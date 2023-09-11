import {Component, Input} from '@angular/core';
import {NavbarService} from "../../../../services/navbar.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  optionList = [
    {
      isLink: false,
      image: "assets/images/callContact.svg",
      description: "تماس با پشتیبانی",
      linkText: "تماس تلفنی",
      link: "",
      class: "zero:p-[0] l-c:pr-[1px] l:p-[0]"
    },
    {
      isLink: true,
      image: "assets/images/sendMailContact.svg",
      description: "ارسال جزئیات پرسش به ایمیل پشتیبانی",
      linkText: "ارسال ایمیل",
      link: "/b/support-users/fa/sendMail",
      class: ""
    }
  ]

  constructor(private navbarService: NavbarService) {
  }

  openModel(model:HTMLDivElement) {
    model.classList.remove("hidden");
    model.classList.add("opacity-0");
    document.body.classList.add("overflow-hidden");
    document.body.style.paddingRight = "16px";
    this.navbarService.marginRight = true;
    setTimeout(() => {
      model.classList.remove("opacity-0");
      model.classList.add("opacity-100");
    },200);
  }


  closeModel(model:HTMLDivElement) {
    model.classList.remove("opacity-100");
    model.classList.add("opacity-0");
    setTimeout(() => {
      model.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "";
      this.navbarService.marginRight = false;
    }, 500)
  }

}
