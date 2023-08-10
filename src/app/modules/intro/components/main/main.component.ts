import { Component } from '@angular/core';
import {NavbarService} from "../../../../services/navbar.service";
import { GlobalValueService } from 'src/app/services/global-value.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = "دیوار: بزرگترین سایت نیازمندی های رایگان در ایران"

  constructor(private navbar: NavbarService) {
    this.navbar.shouldActivated = "none";
    this.navbar.whichLinks = [];
    setTimeout(() => {
      this.navbar.showNavbar = false;
    },500)
    //@ts-ignore
    document.querySelector("title").textContent = this.title
  }
}
