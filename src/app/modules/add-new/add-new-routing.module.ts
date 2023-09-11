import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AddnewMainComponent} from "./components/addnew-main/addnew-main.component";
import {CategoryItemsMainComponent} from "./components/category-items-main/category-items-main.component";
import {CategoryItemGroupComponent} from "./components/category-item-group/category-item-group.component";
import {AddNewFormComponent} from "./components/add-new-form/add-new-form.component";
import {CategoryItemsGroupsComponent} from "./components/category-items-groups/category-items-groups.component";



let routes: Routes = [
  {path: "", component: AddnewMainComponent, children: [
      {path: "", component: CategoryItemsMainComponent},
      {path: "groups/:id", component: CategoryItemsGroupsComponent},
      {path: "groups/:id/:id2", component: CategoryItemGroupComponent},
      {path: "groups/:id/:id2/:id3/form", component: AddNewFormComponent},
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:  [
    RouterModule
  ]
})


export class AddNewRoutingModule {}
