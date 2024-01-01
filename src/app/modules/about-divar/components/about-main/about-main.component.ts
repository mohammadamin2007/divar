import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NavbarService} from "../../../../services/navbar.service";

@Component({
  selector: 'app-about-main',
  templateUrl: './about-main.component.html',
  styleUrls: ['./about-main.component.scss']
})
export class AboutMainComponent {
  title = "درباره دیوار"

  constructor(private navbar: NavbarService, private titleService: Title) {
    this.navbar.showNavbar = true;
    setTimeout(() => {
      this.navbar.shouldActivated = 'all';
    }, 500)
    this.titleService.setTitle(this.title)
  }
}
