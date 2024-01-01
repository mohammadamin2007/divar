import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { chatOptionModel } from '../../enum';
import { GlobalValueService } from 'src/app/services/global-value.service';
import {ActivatedRoute} from "@angular/router";
import {query} from "@angular/animations";

@Component({
  selector: 'app-chat-side-bar',
  templateUrl: './chat-side-bar.component.html',
  styleUrls: ['./chat-side-bar.component.scss']
})
export class ChatSideBarComponent {
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
  goToChat: boolean = false

  constructor(private navbarService: NavbarService, public globalValue: GlobalValueService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      if(window.innerWidth < 768) {
        this.goToChat = params['chat'] !== undefined;
      }
    })

    window.addEventListener('resize', () => {
      if(window.innerWidth < 768) {
        this.goToChat = activatedRoute.snapshot.params['chat'] !== undefined;
      } else {
        this.goToChat = false;
      }
    })
  }

  openModel(model:HTMLDivElement) {
    model.classList.remove("hidden");
    model.classList.add("opacity-0");
    this.optionContainer = true;
    this.globalValue.modelOpen = true;
    setTimeout(() => {
      model.classList.remove("opacity-0");
      model.classList.add("opacity-100");
      model.classList.add("translate-x-[0_!important]");
    },200);
  }


  closeModel(model:HTMLDivElement) {
    model.classList.remove("opacity-100");
    model.classList.add("opacity-0");
    model.classList.remove("translate-x-[0_!important]");
    this.optionContainer = false;
    setTimeout(() => {
      model.classList.add("hidden");
      this.globalValue.modelOpen = true;
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
