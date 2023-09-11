import { Component } from '@angular/core';
import { routeAnimation } from './route-animation';
import {GlobalValueService} from "./services/global-value.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation]
})
export class AppComponent {

  constructor(private globalValue: GlobalValueService) {
  }
}
