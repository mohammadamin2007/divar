import { Component } from '@angular/core';

@Component({
  selector: 'app-when-can-answer',
  templateUrl: './when-can-answer.component.html',
  styleUrls: ['./when-can-answer.component.scss']
})
export class WhenCanAnswerComponent {
  defaultTime = [
    {text: "۱ بامداد"},
    {text: "۲ بامداد"},
    {text: "۳ بامداد"},
    {text: "۴ بامداد"},
    {text: "۵ بامداد"},
    {text: "۶ صبح"},
    {text: "۷ صبح"},
    {text: "۸ صبح"},
    {text: "۹ صبح"},
    {text: "۱۰ صبح"},
    {text: "۱۱ صبح"},
    {text: "۱۲ ظهر"},
    {text: "۱ بعد از ظهر"},
    {text: "۲ بعد از ظهر"},
    {text: "۳ بعد از ظهر"},
    {text: "۴ بعد از ظهر"},
    {text: "۵ عصر"},
    {text: "۶ عصر"},
    {text: "۷ شب"},
    {text: "۸ شب"},
    {text: "۹ شب"},
    {text: "۱۰ شب"},
    {text: "۱۱ شب"},
  ]
  optionFromList: {text: string}[]
  optionToList: {text: string}[]
  
  constructor() {
    this.optionFromList = this.defaultTime.slice(0, this.defaultTime.length);
    this.optionToList = this.defaultTime.slice(0, this.defaultTime.length);
  }

}
