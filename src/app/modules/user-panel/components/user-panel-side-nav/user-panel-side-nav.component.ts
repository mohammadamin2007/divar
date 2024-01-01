import { Component } from '@angular/core';
import {LoginService} from "../../../../services/login.service";
import {Router} from "@angular/router";
import {GlobalValueService} from "../../../../services/global-value.service";
import {NavbarService} from "../../../../services/navbar.service";

@Component({
  selector: 'app-user-panel-side-nav',
  templateUrl: './user-panel-side-nav.component.html',
  styleUrls: ['./user-panel-side-nav.component.scss']
})
export class UserPanelSideNavComponent {
  navLinkText = [
    {
      icon: "fa fa-shield",
      text: "تایید هویت",
      routerLink: "verifyUser"
    },{
      icon: "fa fa-ad",
      text: "اگهی های من",
      routerLink: "myPosts"
    },{
      icon: "fa fa-bookmark",
      text: "نشان ها",
      routerLink: "favorite"
    },{
      icon: "fa fa-comment",
      text: "یادداشت ها",
      routerLink: "note"
    },{
      icon: "fa fa-history",
      text: "بازدید های اخیر",
      routerLink: "recent"
    }, {
      icon: "fa fa-user",
      text: "رزومه من",
      routerLink: "my-resume"
    }, {
      icon: "fa fa-store-alt",
      text: "دیوار برای کسب‌وکارها",
      routerLink: "divarStores"
    }
  ]
  navLinkTextDropDownNotLog = [
    {
      icon: "fa fa-bookmark",
      text: "نشان ها",
      routerLinkText: "favorite"
    },{
      icon: "fa fa-comment",
      text: "یادداشت ها",
      routerLinkText: "note"
    },{
      icon: "fa fa-history",
      text: "بازدید های اخیر",
      routerLinkText: "recent"
    },{
      icon: "fa fa-store-alt",
      text: "دیوار برای کسب‌وکارها",
      routerLinkText: "divarStores"
    }
  ]
  userPhoneNumber: string | null
  currentRoute: string = ""

  constructor(public readonly loginService:LoginService, public globalValue: GlobalValueService,private router: Router, private navbarService:NavbarService) {
    this.userPhoneNumber = loginService.userPhoneNumber;
    this.currentRoute = router.url.replace("/myDivar/", "");
    this.router.events.subscribe(item => {
      this.currentRoute = router.url.replace("/myDivar/", "");
    })

  }

  openModel(model:HTMLDivElement) {
    model.classList.remove("hidden");
    model.classList.add("opacity-0");
    document.body.classList.add("overflow-hidden");
    setTimeout(() => {
      model.classList.remove("opacity-0");
      model.classList.add("opacity-100");
    },200);
  }


  closeModel(model:HTMLDivElement, closeType: string) {
    model.classList.remove("opacity-100");
    model.classList.add("opacity-0");
    setTimeout(() => {
      model.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
    }, 500)
    if(closeType === 'yes') {
      this.loginService.logoutUser();
    }
  }
}
