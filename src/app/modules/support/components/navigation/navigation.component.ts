import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{
  @Input("navigation") navigation: {link: string, text: string, queryParams: {}}[];
  hoveredNav: number = 0;

  ngOnInit() {
    this.hoveredNav = this.navigation.length + 1;
  }

}
