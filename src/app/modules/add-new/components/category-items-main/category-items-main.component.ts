import { Component } from '@angular/core';
import {ServerService} from "../../../../services/server.service";

@Component({
  selector: 'app-category-items-main',
  templateUrl: './category-items-main.component.html',
  styleUrls: ['./category-items-main.component.scss']
})
export class CategoryItemsMainComponent {
  addNewData: {text: string, image: string, spClass: string, group: string, boxHeight: string}[]
  detailed = false

  constructor(private server:ServerService) {
    this.addNewData = server.addNewDataTitles();
  }
}
