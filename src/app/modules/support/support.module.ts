import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportMainComponent } from './components/support-main/support-main.component';
import { SupportItemComponent } from './components/support-item/support-item.component';
import {FooterComponent} from "./components/footer/footer.component";
import { MajorSupportComponent } from './components/major-support/major-support.component';
import {RouterModule} from "@angular/router";
import {SupportRoutingModule} from "./support-routing.module";



@NgModule({
  declarations: [
    SupportMainComponent,
    SupportItemComponent,
    FooterComponent,
    MajorSupportComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SupportRoutingModule
  ]
})
export class SupportModule { }
