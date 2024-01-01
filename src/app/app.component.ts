import { Component } from '@angular/core';
import { routeAnimation } from './route-animation';
import {GlobalValueService} from "./services/global-value.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation]
})
export class AppComponent {
  navItemList = [
    {
      text: "دسته‌ها",
      link: "",
      icon: "fa fa-list"
    }, {
      text: "ثبت اگهی",
      link: "/new",
      icon: "fa fa-plus-circle"
    }, {
      text: "چت",
      link: "/chat",
      icon: "fa fa-comment"
    }, {
      text: "دیوار من",
      link: "/myDivar",
      icon: "fa fa-user"
    }
  ]

  constructor(private globalValue: GlobalValueService) {
  }

  protected readonly window = window;
}
