import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { chatOptionModel } from '../../enum';

@Component({
  selector: 'app-chat-side-bar',
  templateUrl: './chat-side-bar.component.html',
  styleUrls: ['./chat-side-bar.component.scss']
})
export class ChatSideBarComponent implements AfterViewInit{
  @ViewChild('removeChats') removeChats: ElementRef;
  @ViewChild('settings') settings: ElementRef;
  @ViewChild('whenCanAnswer') whenCanAnswer: ElementRef;

  mode = "all"
  optionContainer = false
  navLinkText = [
    {
      text: "ساعت پاسخگویی",
      icon: "fa fa-clock-o",
      whichToOpen: chatOptionModel.whenToAnswer
    },{
      text: "حذف گروهی چت ها",
      icon: "fa fa-trash",
      whichToOpen: chatOptionModel.removeChats
    },{
      text: "تنظیمات",
      icon: "fa fa-cog",
      whichToOpen: chatOptionModel.settings
    },
  ]

  constructor(private navbarService: NavbarService) {}

  ngAfterViewInit(): void {
    console.log(this.removeChats);
    console.log(this.settings);
    console.log(this.whenCanAnswer);
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

  changeChatMode(chatMode: string) {
    this.mode = chatMode;
  }

  openOptionModel(whichToOpen: chatOptionModel) {
    switch (whichToOpen) {
      case chatOptionModel.removeChats:
        this.openModel(this.removeChats.nativeElement);
        break;
      case chatOptionModel.settings:
        this.openModel(this.settings.nativeElement);
        break;
      case chatOptionModel.whenToAnswer:
        this.openModel(this.whenCanAnswer.nativeElement);
        break;
    }
  }
}
