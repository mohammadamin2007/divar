import { Component, Input, OnInit } from '@angular/core';
import { GlobalValueService } from 'src/app/services/global-value.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit{
  @Input('chat') chat: string
  optionContainer = false

  constructor(public globalValue: GlobalValueService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log(this.chat)
  }

  openModel(model:HTMLDivElement) {
    model.classList.remove("hidden");
    model.classList.add("opacity-0");
    this.optionContainer = true;
    setTimeout(() => {
      model.classList.remove("opacity-0");
      model.classList.add("opacity-100");
    },200);
  }


  closeModel(model:HTMLDivElement) {
    model.classList.remove("opacity-100");
    model.classList.add("opacity-0");
    this.optionContainer = false;
    setTimeout(() => {
      model.classList.add("hidden");

    }, 500)
  }

}
