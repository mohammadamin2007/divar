import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HeaderIconComponent } from './components/header/headerIcon.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrustComponent } from './components/trust/trust.component';
import { NavComponent } from './components/nav/nav.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {IntroRoutingModule} from "./intro-routing.module";



@NgModule({
  declarations: [
    MainComponent,
    HeaderIconComponent,
    SearchComponent,
    FooterComponent,
    TrustComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    IntroRoutingModule
  ],
    exports: [
        MainComponent,
        SearchComponent
    ]
})
export class IntroModule { }
