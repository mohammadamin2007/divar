import {Component, EventEmitter, Output} from '@angular/core';
import { GlobalValueService } from 'src/app/services/global-value.service';

@Component({
  selector: 'app-when-can-answer',
  templateUrl: './when-can-answer.component.html',
  styleUrls: ['./when-can-answer.component.scss']
})
export class WhenCanAnswerComponent {
  defaultTimeInString = [
    "۱ بامداد",
    "۲ بامداد",
    "۳ بامداد",
    "۴ بامداد",
    "۵ بامداد",
    "۶ صبح",
    "۷ صبح",
    "۸ صبح",
    "۹ صبح",
    "۱۰ صبح",
    "۱۱ صبح",
    "۱۲ ظهر",
    "۱ بعد از ظهر",
    "۲ بعد از ظهر",
    "۳ بعد از ظهر",
    "۴ بعد از ظهر",
    "۵ عصر",
    "۶ عصر",
    "۷ شب",
    "۸ شب",
    "۹ شب",
    "۱۰ شب",
    "۱۱ شب",
  ]
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
  from = "از ساعت"
  to = "تا ساعت"
  @Output('closeEvent') closeEvent: EventEmitter<string> = new EventEmitter<string>()
  fromError: boolean = false
  toError: boolean = false

  constructor(public globalValue: GlobalValueService) {
    this.optionFromList = this.defaultTime.slice(0, this.defaultTime.length);
    this.optionToList = this.defaultTime.slice(1, this.defaultTime.length);
  }

  chooseFrom(time: string) {
    this.globalValue.selectFrom = false;
    this.from = time;
    this.optionToList = this.defaultTime.slice(this.defaultTimeInString.indexOf(time) + 1, this.to === "تا ساعت"?this.defaultTime.length:this.defaultTimeInString.indexOf(this.to));
  }

  chooseTo(time: string) {
    this.globalValue.selectTo = false;
    this.to = time;
    this.optionFromList = this.defaultTime.slice(this.from === "از ساعت"?0:this.defaultTimeInString.indexOf(this.from) + 1, this.defaultTimeInString.indexOf(time));
  }

  closeWhenCanAnswer() {
    this.closeEvent.emit("close");
  }

  formSubmit(event: MouseEvent) {
    event.preventDefault();
    this.fromError = this.from === "از ساعت";

    this.toError = this.to === "تا ساعت";

    if(!this.toError && !this.fromError) {
      this.closeWhenCanAnswer();
    }
  }

}
