import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent {
  constructor(private titleService: Title) {
    titleService.setTitle("بازدیدهای اخیر شما در سایت دیوار");
  }
}
