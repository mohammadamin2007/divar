import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.scss']
})
export class FavoritComponent {
  constructor(private titleService: Title) {
    titleService.setTitle("آگهی های نشان شده شما در سایت دیوار");
  }
}
