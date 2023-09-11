import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-chat-side-bar',
  templateUrl: './chat-side-bar.component.html',
  styleUrls: ['./chat-side-bar.component.scss']
})
export class ChatSideBarComponent {
  mode = "all"
  optionContainer = false

  constructor(private navbarService: NavbarService) {}

  openModel(model:HTMLDivElement) {
    model.classList.remove("hidden");
    model.classList.add("opacity-0");
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = "16px";
    this.navbarService.marginRight = true;
    this.optionContainer = true;
    setTimeout(() => {
      model.classList.remove("opacity-0");
      model.classList.add("opacity-100");
    },200);
  }


  closeModel(model:HTMLDivElement) {
    model.classList.remove("opacity-100");
    model.classList.add("opacity-0");
    setTimeout(() => {
      model.classList.add("hidden");
      document.body.style.overflow = '';
      document.body.style.paddingRight = "";
      this.navbarService.marginRight = false;
    }, 500)
  }

  changeChatMode(chatMode: string) {
    this.mode = chatMode;
  }
}
