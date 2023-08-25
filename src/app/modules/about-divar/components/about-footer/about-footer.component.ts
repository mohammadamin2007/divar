import { Component } from '@angular/core';

@Component({
  selector: 'app-about-footer',
  templateUrl: './about-footer.component.html',
  styleUrls: ['./about-footer.component.scss']
})
export class AboutFooterComponent {
  footerLinkList = [
    {
      link: "tel:+982179458000",
      text: "ارتباط با پشتیبانی"
    }, {
      link: "https://www.cyberpolice.ir/",
      text: "سایت پلیس فتا"
    }
  ]
}
