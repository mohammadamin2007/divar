import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportMainComponent } from './components/support-main/support-main.component';
import { SupportItemComponent } from './components/support-item/support-item.component';



@NgModule({
  declarations: [
    SupportMainComponent,
    SupportItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SupportModule { }
