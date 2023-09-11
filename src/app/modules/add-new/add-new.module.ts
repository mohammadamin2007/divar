import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddnewMainComponent } from './components/addnew-main/addnew-main.component';
import {AddNewRoutingModule} from "./add-new-routing.module";
import {NavbarComponent} from "./components/navbar/navbar.component";
import { LoginComponent } from '../../components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CategoryItemsMainComponent } from './components/category-items-main/category-items-main.component';
import { CategoryItemsComponent } from './components/category-items/category-items.component';
import { CategoryItemsGroupsComponent } from './components/category-items-groups/category-items-groups.component';
import { CategoryItemGroupComponent } from './components/category-item-group/category-item-group.component';
import { AddNewFormComponent } from './components/add-new-form/add-new-form.component';



@NgModule({
  declarations: [
    AddnewMainComponent,
    NavbarComponent,
    LoginComponent,
    CategoryItemsMainComponent,
    CategoryItemsComponent,
    CategoryItemsGroupsComponent,
    CategoryItemGroupComponent,
    AddNewFormComponent
  ],
    imports: [
        CommonModule,
        AddNewRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AddNewModule { }
