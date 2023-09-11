import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ServerService} from "../../../../services/server.service";
import {Title} from "@angular/platform-browser";
import {NavbarService} from "../../../../services/navbar.service";

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.scss']
})
export class SendMailComponent {
  sendMailForm: FormGroup
  sendMailNav = [
    {
      link: "/b/support-users/fa",
      queryParams: [],
      text: "پشتیبانی"
    },
    {
      link: "/b/support-users/fa",
      queryParams: {
        "page": "sendMail"
      },
      text: "ارسال ایمیل"
    }
  ]
  subjectOption: {title: string}[]
  open = false
  title = "انتقادات و پیشنهادات - مرکز پشتیبانی دیوار"
  optionOpac = false
  selectedSubject = "انتخاب بخش"
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
      routerLink: "/b/support-users/fa",
      queryParams: {'page': 'contact'}
    }
  ]
  filesList:{file: File}[] = [];
  fileError = false

  constructor(private server: ServerService, private titleService: Title, private navbar: NavbarService) {
    this.sendMailForm = new FormGroup({
      email: new FormControl(""),
      subject: new FormControl(""),
      contactNumber: new FormControl(""),
      title: new FormControl(""),
      text: new FormControl(""),
      file: new FormControl(""),
    })
    this.subjectOption = server.subjectsSendMail;
    titleService.setTitle(this.title);
  }

  exit() {
    this.optionOpac = false;
    setTimeout(() => {
      this.open = false;
      document.body.style.paddingRight = "";
      this.navbar.marginRight = false;
      document.body.classList.remove("overflow-hidden");
    },240);
  }

  openOption() {
    this.open = true;
    setTimeout(() => {
      this.optionOpac = true;
      document.body.classList.add("overflow-hidden");
      this.navbar.marginRight = true;
      document.body.style.paddingRight = "16px";
    },100);
  }

  selectSubject(option: string) {
    this.selectedSubject = option;
    this.exit();
  }

  handelFile(input: HTMLInputElement) {
    //@ts-ignore
    let file = input.files[0]
    if(file.size < 500000 ) {
      this.filesList.push({file: file})
    } else {
      this.fileError = true;
    }
  }
}
