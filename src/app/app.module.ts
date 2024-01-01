import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarService} from "./services/navbar.service";
import {ServerService} from "./services/server.service";
import {GlobalValueService} from "./services/global-value.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LoginComponent} from "./components/login/login.component";
import { SureExitComponent } from './components/sure-exit/sure-exit.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SureExitComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    providers: [
        NavbarService,
        ServerService,
        GlobalValueService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
