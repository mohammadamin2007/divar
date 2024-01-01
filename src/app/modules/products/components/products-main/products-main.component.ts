import { Component } from '@angular/core';
import {NavbarService} from "../../../../services/navbar.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.scss']
})
export class ProductsMainComponent {
  title = "دیوار - نیازمندی‌ های رایگان، آگهی‌های خرید، فروش نو و دست دوم و کارکرده، استخدام و خدمات"

  constructor(private navbar: NavbarService, private titleService: Title) {
    this.navbar.showNavbar = true;
    setTimeout(() => {
      this.navbar.shouldActivated = 'all';
    }, 500)
    this.titleService.setTitle(this.title);
  }
}
