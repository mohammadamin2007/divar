import { Component } from '@angular/core';
import {NavbarService} from "../../../../services/navbar.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = "دیوار: بزرگترین سایت نیازمندی های رایگان در ایران"

  constructor(private navbar: NavbarService, private titleService: Title) {
    this.navbar.shouldActivated = "none";
    this.navbar.whichLinks = [];
    setTimeout(() => {
      this.navbar.showNavbar = false;
    },500)
    this.titleService.setTitle(this.title)
  }
}
