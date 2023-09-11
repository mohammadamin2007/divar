import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input("page") page: string;

  navList = [
    {
      text: "درباره دیوار",
      routerLink: "/about",
      queryParams: {}
    }, {
      text: "دریافت برنامه",
      routerLink: "/download",
      queryParams: {}
    }, {
      text: "بلاگ دیوار",
      routerLink: "",
      queryParams: {}
    }, {
      text: "پشتیبانی و قوانین",
      routerLink: "/b/support-users/fa",
      queryParams: {}
    }, {
      text: "تماس با پشتیبانی",
      routerLink: "/b/support-users/fa/contact",
    }
  ]
}
