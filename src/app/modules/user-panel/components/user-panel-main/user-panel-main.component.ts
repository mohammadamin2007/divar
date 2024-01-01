import {Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RoutesRecognized} from "@angular/router";
import {NavbarService} from "../../../../services/navbar.service";
import {Title} from "@angular/platform-browser";
import {LoginService} from "../../../../services/login.service";
import {globalScriptsByBundleName} from "@angular-devkit/build-angular/src/tools/webpack/utils/helpers";
import {GlobalValueService} from "../../../../services/global-value.service";

@Component({
  selector: 'app-user-panel-main',
  templateUrl: './user-panel-main.component.html',
  styleUrls: ['./user-panel-main.component.scss']
})
export class UserPanelMainComponent {
  title = "دیوار من: آخرین بازدید ها، آگهی های نشان شده و شخصی شما"
  exit: boolean = false
  routeOpened: boolean = false
  notMobile: boolean = true

  constructor(private globalValue: GlobalValueService,public readonly loginService: LoginService,private activatedRoute: ActivatedRoute, private router: Router, private navbarService: NavbarService, private titleService: Title, private Router: Router){
    if(router.url === '/myDivar' && window.innerWidth > 626){
      router.navigateByUrl("/myDivar/myPosts").then(r => {})
    }
    if(window.innerWidth < 626) {
      this.notMobile = false;
    }
    window.addEventListener("resize", () => {
      if(window.innerWidth < 626) {
        this.notMobile = false;
        this.routeOpened = this.router.url.replace("/myDivar", "").length !== 0;
      } else {
        this.notMobile = true;
      }
    })
    this.router.events.subscribe(item => {
      if(item instanceof NavigationEnd && window.innerWidth < 626){
        this.routeOpened = item.url.replace("/myDivar", "").length !== 0;
      }
    })
    this.navbarService.showNavbar = true;
    setTimeout(() => {
      this.navbarService.shouldActivated = 'all';
    }, 500)
    this.titleService.setTitle(this.title);
    if(!loginService.loggedIn) {
      globalValue.openModelLogin();
    }
    // globalValue.loginModelClose.subscribe(pass => {
    //   console.log(pass)
    // })
  }

}
