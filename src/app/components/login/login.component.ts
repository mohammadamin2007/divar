import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NavbarService} from "../../services/navbar.service";
import {ServerService} from "../../services/server.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {GlobalValueService} from "../../services/global-value.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{
  @ViewChild("loginModel") loginModel: ElementRef
  formGroup: FormGroup
  showPhoneNumber = true
  showPhoneNumberOpacity = true
  showCodeNumberOpacity = false
  userPhoneNumber: number = 0
  codeWrong: boolean = false
  timerInterval = 0
  timer = 30

  constructor(public globalValue: GlobalValueService,private server:ServerService, private navbarService: NavbarService, private router: Router, private loginService: LoginService) {
    this.formGroup = new FormGroup({
      phoneNumber: new FormControl("", [Validators.required, Validators.pattern(new RegExp('^9\\d{9}$'))]),
      codeNumber: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }


  phoneNumber(number:string) {
    // clearInterval(this.timerInterval);
    // this.userPhoneNumber = parseInt(number);
    // if(number.toString().length === 10 && this.formGroup.get('phoneNumber')?.valid) {
    //   this.showPhoneNumberOpacity = false;
    //   setTimeout(() => {
    //     this.showPhoneNumber = false;
    //     setTimeout(() => {
    //       this.showCodeNumberOpacity = true;
    //       this.formGroup = new FormGroup({
    //         phoneNumber: new FormControl("", [Validators.required, Validators.pattern(new RegExp('^9\\d{9}$'))]),
    //         codeNumber: new FormControl("", [Validators.required, Validators.minLength(6)])
    //       })
    //       this.timerInterval = setInterval(() => {
    //         if(this.timer > 0) {
    //           this.timer -= 1
    //         }
    //       },1000)
    //     },100)
    //   }, 500)
    // }
  }

  changePhoneNumber() {
    clearInterval(this.timerInterval);
    this.showCodeNumberOpacity = false;
    setTimeout(() => {
      this.showPhoneNumber = true;
      setTimeout(() => {
        this.showPhoneNumberOpacity = true;
        this.formGroup = new FormGroup({
          phoneNumber: new FormControl(this.userPhoneNumber, [Validators.required, Validators.pattern(new RegExp('^9\\d{9}$'))]),
          codeNumber: new FormControl("", [Validators.required, Validators.minLength(6)])
        })
      },100)
    }, 500)
  }

  codeNumber(code: string) {
    this.codeWrong = false;
    if(code.length === 6) {
      this.codeWrong = code !== '123456';
      if(!this.codeWrong) {
        this.globalValue.closeModelLogin('normal');
        setTimeout(() => {
          this.loginService.loginUser(this.userPhoneNumber.toString());
        }, 500)
      }
    }
  }

  sendAgain() {
    // if(this.timer === 0) {
    //   clearInterval(this.timerInterval);
    //   this.timer = 30;
    //   this.timerInterval = setInterval(() => {
    //     if(this.timer > 0) {
    //       this.timer -= 1
    //     }
    //   },1000)
    // }
  }

}
