import { Component } from '@angular/core';
import {NavbarService} from "../../../../services/navbar.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  navList = [
    {
      href: "/new",
      text: "ثبت اگهی",
      isLink: false,
      activateList: ["my-divar", "support", "chat", "chooseCity"],
      which: "all"
    },{
      href: "/about",
      text: "درباره دیوار",
      isLink: false,
      activateList: ["my-divar", "support", "chat", "chooseCity", "setPost"],
      which: "all"
    },{
      href: "/download",
      text: "دریافت برنامه",
      isLink: false,
      activateList: ["my-divar", "support", "chat", "chooseCity", "setPost"],
      which: "all"
    },{
      href: "https://divar.ir/blog",
      text: "بلاگ",
      isLink: true,
      activateList: [],
      which: "none"
    },{
      href: "b/support-users/fa",
      isLink: false,
      text: "پشتیبانی",
      activateList: ["my-divar", "support", "chat"],
      which: "posht"
    }
  ]

  constructor(private NavbarService: NavbarService) {}

  changeNavbarStatus(activateList: string[], which: string) {
    setTimeout(() => {
      this.NavbarService.shouldActivated = which;
      this.NavbarService.whichLinks = activateList;
    } ,1000)
  }
}
