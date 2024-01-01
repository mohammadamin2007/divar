import {Component, OnDestroy} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {LoginService} from "../../../../services/login.service";
import {GlobalValueService} from "../../../../services/global-value.service";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent{
  constructor(private titleService: Title, public readonly loginService: LoginService, private globalService: GlobalValueService) {
    titleService.setTitle("یادداشت‌های شما در سایت دیوار");
    if (!loginService.loggedIn) {
      globalService.openModelLogin();
    }
  }
}
