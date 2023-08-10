import { Component } from '@angular/core';
import { GlobalValueService } from 'src/app/services/global-value.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  constructor(public navbarService: NavbarService) {
    
  }

}
