import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ServerService} from "../../../../services/server.service";

@Component({
  selector: 'app-category-items-groups',
  templateUrl: './category-items-groups.component.html',
  styleUrls: ['./category-items-groups.component.scss']
})
export class CategoryItemsGroupsComponent {
  categoryList: {title: string, groups: {text: string}[]}

  constructor(public readonly activatedRoute: ActivatedRoute, private server:ServerService) {
    this.categoryList = server.addNewDataTitlesItem(activatedRoute.snapshot.params['id']);
    console.log(this.categoryList);
  }
}
