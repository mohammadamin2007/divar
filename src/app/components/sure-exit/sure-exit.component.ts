import { Component } from '@angular/core';
import {GlobalValueService} from "../../services/global-value.service";

@Component({
  selector: 'app-sure-exit',
  templateUrl: './sure-exit.component.html',
  styleUrls: ['./sure-exit.component.scss']
})
export class SureExitComponent {
  constructor(public globalValue: GlobalValueService) {
  }
}
