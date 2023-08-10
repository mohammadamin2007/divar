import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SupportMainComponent } from './components/support-main/support-main.component';
import { SupportItemComponent } from './components/support-item/support-item.component';


@NgModule({
  declarations: [
    SupportMainComponent,
    SupportItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SupportMainComponent
  ]
})
export class SupportModule { }
