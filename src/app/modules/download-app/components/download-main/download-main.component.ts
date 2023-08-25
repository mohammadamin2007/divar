import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-download-main',
  templateUrl: './download-main.component.html',
  styleUrls: ['./download-main.component.scss']
})
export class DownloadMainComponent {
  title = "دانلود اپلیکیشن دیوار | به جمع میلیونی کاربرهای دیوار بپیوندید"
  downloadList = [
    {
      type: "android",
      images: [
        {
          text: false,
          image: "bazar",
          textContent: "",
          textIcon: ""
        }, {
          text: false,
          image: "android",
          textContent: "",
          textIcon: ""
        }
      ]
    }, {
      type: "pwa-icon",
      images: [
        {
          text: false,
          image: "pwa",
          textContent: "",
          textIcon: ""
        }, {
          text: true,
          image: "",
          textContent: "راهنمای وب‌اپلیکیشن",
          textIcon: "question-circle"
        }
      ]
    }, {
      type: "apple",
      images: [
        {
          text: false,
          image: "appleStore",
          textContent: "",
          textIcon: ""
        },{
          text: false,
          image: "sibche",
          textContent: "",
          textIcon: ""
        },{
          text: false,
          image: "sibIran",
          textContent: "",
          textIcon: ""
        },{
          text: false,
          image: "iApps",
          textContent: "",
          textIcon: ""
        },
      ]
    }
  ]

  constructor(private navbar: NavbarService, private titleService: Title) {
    this.navbar.whichLinks = ["chooseShahr"]
    this.navbar.showNavbar = true;
    setTimeout(() => {
      this.navbar.shouldActivated = 'all';
    }, 500)
    this.titleService.setTitle(this.title)
  }
}
