import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent {
  title = "چت دیوار"

  constructor(private navbarService: NavbarService, private titleService: Title, public readonly activatedRoute: ActivatedRoute) {
    this.navbarService.showNavbar = true;
    setTimeout(() => {
      this.navbarService.shouldActivated = 'all';
    }, 500)
    this.titleService.setTitle(this.title);
  }
}
