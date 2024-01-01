import {Component, EventEmitter, Output} from '@angular/core';
import {LoginService} from "../../../../services/login.service";
import {GlobalValueService} from "../../../../services/global-value.service";

@Component({
  selector: 'app-user-drop-down',
  templateUrl: './user-drop-down.component.html',
  styleUrls: ['./user-drop-down.component.scss']
})
export class UserDropDownComponent {
  @Output('close') close:EventEmitter<string> = new EventEmitter<string>()
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
  navLinkTextDropDown = [
    {
      icon: "fa fa-shield",
      text: "تایید هویت",
      routerLinkText: "verifyUser"
    },{
      icon: "fa fa-ad",
      text: "اگهی های من",
      routerLinkText: "myPosts"
    },{
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
  loginStatus: boolean = false
  userPhoneNumber: string | null

  constructor(public loginService: LoginService, public globalValue: GlobalValueService) {
    this.loginStatus = loginService.loggedIn;
    this.userPhoneNumber = loginService.userPhoneNumber;
  }

  signOut() {
    this.globalValue.openModelSignOut();
    this.close.emit("");
    console.log("closing")
  }

  login() {
    this.globalValue.openModelLogin();
    this.close.emit("");
  }
}
