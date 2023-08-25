import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  navList = [
    {
      text: "درباره دیوار"
    }, {
      text: "دریافت برنامه"
    }, {
      text: "بلاگ دیوار"
    }, {
      text: "پشتیبانی و قوانین"
    }, {
      text: "تماس با پشتیبانی"
    }
  ]
  iconList = [
    {
      svvg: "fa fa-twitter",
      href: "https://twitter.com/divar_official"
    },{
      svvg: "fa fa-instagram",
      href: "https://www.instagram.com/divar.official"
    }
  ]
}
