import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  navList = [
    {
      text: "درباره دیوار",
      routerLink: "/about",
      queryParams: {}
    },{
      text: "دریافت برنامه",
      routerLink: "/b/support-users/fa",
      queryParams: {}
    }, {
      text: "کسب و کار ها",
      routerLink: "",
      queryParams: {}
    }, {
      text: "پشتیبانی و قوانین",
      routerLink: "",
      queryParams: {}
    }
  ]
}
