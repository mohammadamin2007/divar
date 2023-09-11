import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NavbarService} from "../../services/navbar.service";
import {ServerService} from "../../services/server.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit{
  @ViewChild("loginModel") loginModel: ElementRef
  formGroup: FormGroup
  showPhoneNumber = true
  showPhoneNumberOpacity = true
  showCodeNumberOpacity = false
  userPhoneNumber: number = 0
  codeWrong: boolean = false
  timerInterval = 0
  timer = 30

  constructor(private server:ServerService, private navbarService: NavbarService, private router: Router, private loginService: LoginService) {
    this.formGroup = new FormGroup({
      phoneNumber: new FormControl("", [Validators.required, Validators.pattern(new RegExp('^9\\d{9}$'))]),
      codeNumber: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }

  ngAfterViewInit() {
    this.openModel(this.loginModel.nativeElement);
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


  closeModel(model:HTMLDivElement, closeType: string) {
    model.classList.remove("opacity-100");
    model.classList.add("opacity-0");
    setTimeout(() => {
      model.classList.add("hidden");
      document.body.classList.remove("overflow-hidden");
      document.body.style.paddingRight = "";
      this.navbarService.marginRight = false;
    }, 500)
    if(closeType === 'abnormal') {
      this.router.navigateByUrl("/").then(r => {});
    }
  }

  phoneNumber(number:string) {
    clearInterval(this.timerInterval);
    this.userPhoneNumber = parseInt(number);
    if(number.toString().length === 10 && this.formGroup.get('phoneNumber')?.valid) {
      this.showPhoneNumberOpacity = false;
      setTimeout(() => {
        this.showPhoneNumber = false;
        setTimeout(() => {
          this.showCodeNumberOpacity = true;
          this.formGroup = new FormGroup({
            phoneNumber: new FormControl("", [Validators.required, Validators.pattern(new RegExp('^9\\d{9}$'))]),
            codeNumber: new FormControl("", [Validators.required, Validators.minLength(6)])
          })
          this.timerInterval = setInterval(() => {
            if(this.timer > 0) {
              this.timer -= 1
            }
          },1000)
        },100)
      }, 500)
    }
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
        this.closeModel(this.loginModel.nativeElement, 'normal');
        setTimeout(() => {
          this.loginService.loginUser(this.userPhoneNumber.toString());
        }, 500)
      }
    }
  }

  sendAgain() {
    if(this.timer === 0) {
      clearInterval(this.timerInterval);
      this.timer = 30;
      this.timerInterval = setInterval(() => {
        if(this.timer > 0) {
          this.timer -= 1
        }
      },1000)
    }
  }

}
