import { Component } from '@angular/core';
import {ServerService} from "../../../../services/server.service";

@Component({
  selector: 'app-support-item-main',
  templateUrl: './support-item-main.component.html',
  styleUrls: ['./support-item-main.component.scss']
})
export class SupportItemMainComponent {
  supportList: { title: string; categoryName: string; categoryHelp: { title: string; body: string; helps: { type: string; body: { text: string; }[]; pic: { picture: string; }[]; }[]; }[]; }[]

  constructor(private server: ServerService) {
    this.supportList = server.supportList;
  }
}
