import {Injectable} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RoutesRecognized
} from "@angular/router";
import {filter, pairwise, Observable} from "rxjs";
import {NavbarService} from "./navbar.service";

@Injectable({
  providedIn: 'root'
})
export class GlobalValueService  {
  // loginModelClose: Observable<string>
  showNavbar: boolean = false
  previousRoute = ""
  navbarName  = ""
  currentRoute = ""
  newDataIsLoading: boolean = true
  selectFrom = false
  selectTo = false
  modelOpen = false
  loginDisplay: boolean = false
  loginOpacity: boolean = false
  sureExitDisplay: boolean = false
  sureExitOpacity: boolean = false

  constructor(private router: Router, private navbarService:NavbarService) {
    this.router.events.subscribe(item => {
      if(item instanceof NavigationEnd){
        this.currentRoute = item.url.indexOf("?") !== -1? item.url.slice(0, item.url.indexOf("?")): item.url;
      }
      this.router.events
        .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
        .subscribe((events: RoutesRecognized[]) => {
          this.previousRoute =  events[0].urlAfterRedirects;
        });
    })
  }

  getPreviousRoute() {
    return this.previousRoute;
  }

  openModelLogin() {
    this.loginDisplay = true;
    document.body.classList.add("overflow-hidden");
    document.body.style.paddingRight = "16px";
    this.navbarService.marginRight = true;
    setTimeout(() => {
      this.loginOpacity = true;
    },200);
  }


  closeModelLogin(closeType: string) {
    this.loginDisplay = false;
    // this.loginModelClose = new Observable<string>(pass => {
    //   pass.next("closed")
    // })
    setTimeout(() => {
      this.loginOpacity = false;
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "";
      this.navbarService.marginRight = false;
    }, 500)
  }


  openModelSignOut() {
    this.sureExitDisplay = true;
    document.body.classList.add("overflow-hidden");
    document.body.style.paddingRight = "16px";
    this.navbarService.marginRight = true;
    setTimeout(() => {
      this.sureExitOpacity = true;
    },200);
  }


  closeModelSignOut(answer: string) {
    this.sureExitDisplay = false;
    setTimeout(() => {
      this.sureExitOpacity = false;
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "";
      this.navbarService.marginRight = false;
    }, 500)
    if(answer === "yes") {
      localStorage.removeItem("userPhoneNumber");
      localStorage.removeItem("loggedIn");
      window.location.reload();
    }
  }
}
