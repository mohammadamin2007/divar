import { Component } from '@angular/core';
import {GlobalValueService} from "../../../../services/global-value.service";
import {NavbarService} from "../../../../services/navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  userDropDown: boolean = false;
  constructor(public globalValue: GlobalValueService, public navbarService: NavbarService) {
  }

  readonly document = document
  protected readonly window = window;
  protected readonly history = history;
}
