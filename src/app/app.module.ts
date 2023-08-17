import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroModule } from "./modules/intro/intro.module";
import { NavbarComponent } from './components/navbar/navbar.component';
import {NavbarService} from "./services/navbar.service";
import {ServerService} from "./services/server.service";
import {GlobalValueService} from "./services/global-value.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupportModule } from './modules/support/support.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    IntroModule,
    BrowserAnimationsModule,
    SupportModule
  ],
  providers: [
    NavbarService,
    ServerService,
    GlobalValueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
