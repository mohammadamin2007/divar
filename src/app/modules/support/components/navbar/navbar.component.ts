import { Component } from '@angular/core';
import {GlobalValueService} from "../../../../services/global-value.service";
import {NavbarService} from "../../../../services/navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public globalValue: GlobalValueService, public navbarService: NavbarService) {
  }

}
