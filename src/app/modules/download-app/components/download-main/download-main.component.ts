import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import {Title} from "@angular/platform-browser";
import {GlobalValueService} from "../../../../services/global-value.service";

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
          textIcon: "",
          link: "https://cafebazaar.ir/app/ir.divar"
        }, {
          text: false,
          image: "android",
          textContent: "",
          textIcon: "",
          link: "assets/Divar-release-11.8.6-230204251.apk"
        }
      ]
    }, {
      type: "pwa-icon",
      images: [
        {
          text: false,
          image: "pwa",
          textContent: "",
          textIcon: "",
          link: ""
        }, {
          text: true,
          image: "",
          textContent: "راهنمای وب‌اپلیکیشن",
          textIcon: "question-circle",
          link: ""
        }
      ]
    }, {
      type: "apple",
      images: [
        {
          text: false,
          image: "appleStore",
          textContent: "",
          textIcon: "",
          link: "https://sibapp.com/applications/divar"
        },{
          text: false,
          image: "sibche",
          textContent: "",
          textIcon: "",
          link: "https://sibche.com/applications/%D8%AF%DB%8C%D9%88%D8%A7%D8%B1-%D8%AE%D8%B1%DB%8C%D8%AF-%D9%88-%D9%81%D8%B1%D9%88%D8%B4-%D8%A8%DB%8C-%D9%88%D8%A7%D8%B3%D8%B7%D9%87-%D8%AF%D8%B1-%D8%A7%DB%8C%D8%B1%D8%A7%D9%86"
        },{
          text: false,
          image: "sibIran",
          textContent: "",
          textIcon: "",
          link: "https://sibirani.com/apps/%D8%AF%DB%8C%D9%88%D8%A7%D8%B1-Divar/"
        },{
          text: false,
          image: "iApps",
          textContent: "",
          textIcon: "",
          link: "https://iapps.ir/app/%D8%AF%DB%8C%D9%88%D8%A7%D8%B1-divar/415062961"
        },
      ]
    }
  ]

  constructor(private navbar: NavbarService, private titleService: Title, public globalValue: GlobalValueService) {
    this.navbar.whichLinks = ["chooseShahr"]
    this.navbar.showNavbar = true;
    setTimeout(() => {
      this.navbar.shouldActivated = 'all';
    }, 500)
    this.titleService.setTitle(this.title);
  }
}
