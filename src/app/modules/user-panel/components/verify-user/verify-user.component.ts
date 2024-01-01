import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.scss']
})
export class VerifyUserComponent {
  nationalitySelect: boolean = false
  nationality: string = "ایرانی"
  nationalitiesList = [
    {
      text: "ایرانی"
    }, {
      text: "اتباع خارجی"
    }
  ]
  nationalityForm: FormGroup

  constructor(private titleService: Title) {
    this.nationalityForm = new FormGroup({
      nationalCode: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/g)])
    });
    titleService.setTitle("صفحه حساب شخصی شما در سایت دیوار");
  }

  chooseNationality(nationality: string) {
    this.nationality = nationality;
    this.nationalitySelect = false;
  }


  submit() {
    if(this.nationalityForm.valid) {
      console.log("nationality-saved")
    }
  }
}
