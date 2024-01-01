import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddnewMainComponent } from './components/addnew-main/addnew-main.component';
import {AddNewRoutingModule} from "./add-new-routing.module";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CategoryItemsMainComponent } from './components/category-items-main/category-items-main.component';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import { CategoryItemsGroupsComponent } from './components/category-items-groups/category-items-groups.component';
import { CategoryItemGroupComponent } from './components/category-item-group/category-item-group.component';
import { AddNewFormComponent } from './components/add-new-form/add-new-form.component';
import {UserDropDownComponent} from "./components/user-drop-down/user-drop-down.component";


@NgModule({
  declarations: [
    AddnewMainComponent,
    NavbarComponent,
    CategoryItemsMainComponent,
    CategoryItemsComponent,
    CategoryItemsGroupsComponent,
    CategoryItemGroupComponent,
    AddNewFormComponent,
    UserDropDownComponent
  ],
  imports: [
    CommonModule,
    AddNewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AddNewModule { }
