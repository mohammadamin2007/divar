import { Component } from '@angular/core';
import {NavbarService} from "../../../../services/navbar.service";
import {Title} from "@angular/platform-browser";
import {LoginService} from "../../../../services/login.service";
import {GlobalValueService} from "../../../../services/global-value.service";

@Component({
  selector: 'app-addnew-main',
  templateUrl: './addnew-main.component.html',
  styleUrls: ['./addnew-main.component.scss']
})
export class AddnewMainComponent {
  title = "ثبت اگهی در دیوار"
  constructor(private navbar: NavbarService, private titleService: Title, public loginService: LoginService, public globalService: GlobalValueService) {
    this.navbar.whichLinks = ["chooseShahr"]
    this.navbar.showNavbar = true;
    setTimeout(() => {
      this.navbar.shouldActivated = 'all';
    }, 500)
    this.titleService.setTitle(this.title);
  }
}
