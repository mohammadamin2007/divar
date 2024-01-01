import {OnInit, Component, ElementRef, Input, ViewChild, AfterViewInit} from '@angular/core';
import {GlobalValueService} from "../../../../services/global-value.service";

@Component({
  selector: 'app-category-items',
  templateUrl: './category-items.component.html',
  styleUrls: ['./category-items.component.scss']
})
export class CategoryItemsComponent implements AfterViewInit{
  @Input('data') data: {title: string, image: string, spClass: string, group: string, detailed: boolean, boxHeight: string, index: number}
  @ViewChild('groups') groups: ElementRef

  constructor() {
    window.addEventListener('resize', (e) => {
      if(this.data.detailed) {
        this.data.boxHeight = "100%";
        setTimeout(() => {
          this.data.boxHeight = this.groups.nativeElement.scrollHeight + 'px';
        }, 100)
      }
    })
  }

  ngAfterViewInit() {
    this.data.boxHeight = this.groups.nativeElement.scrollHeight + 'px';
  }
}
