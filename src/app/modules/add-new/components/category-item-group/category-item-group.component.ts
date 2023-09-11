import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServerService} from "../../../../services/server.service";
import {GlobalValueService} from "../../../../services/global-value.service";

@Component({
  selector: 'app-category-item-group',
  templateUrl: './category-item-group.component.html',
  styleUrls: ['./category-item-group.component.scss']
})
export class CategoryItemGroupComponent {
  categoryList: {majorTitle:string, title: string, groups: {text: string}[]}

  constructor(public readonly activatedRoute: ActivatedRoute, private server:ServerService, public readonly globalValue: GlobalValueService) {
    this.categoryList = server.addNewDataCategoryGroups(activatedRoute.snapshot.params['id'], activatedRoute.snapshot.params['id2']);
    console.log(this.categoryList);
  }
}
