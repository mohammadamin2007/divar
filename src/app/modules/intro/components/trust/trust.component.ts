import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-trust',
  templateUrl: './trust.component.html',
  styleUrls: ['./trust.component.scss']
})
export class TrustComponent {
  @Input('trust') trust: {trustImage: string, href: string}


}

