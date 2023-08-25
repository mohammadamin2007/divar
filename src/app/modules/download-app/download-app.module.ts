import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadMainComponent } from './components/download-main/download-main.component';
import { DownloadItemComponent } from './components/download-item/download-item.component';
import { DownloadItemTitleComponent } from './components/download-item-title/download-item-title.component';
import {FooterComponent} from "./components/footer/footer.component";
import {RouterModule} from "@angular/router";
import {DownloadRoutingModule} from "./download-routing.module";



@NgModule({
  declarations: [
    DownloadMainComponent,
    DownloadItemComponent,
    DownloadItemTitleComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DownloadRoutingModule
  ],
  exports: [
    DownloadMainComponent
  ]
})
export class DownloadAppModule { }
