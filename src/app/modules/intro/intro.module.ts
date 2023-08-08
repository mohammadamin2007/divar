import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HeaderIconComponent } from './components/header/headerIcon.component';
import { SearchComponent } from './components/search/search.component';
import { MostViewdCitiesComponent } from './components/most-viewd-cities/most-viewd-cities.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrustComponent } from './components/trust/trust.component';
import { NavComponent } from './components/nav/nav.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    MainComponent,
    HeaderIconComponent,
    SearchComponent,
    MostViewdCitiesComponent,
    FooterComponent,
    TrustComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    MainComponent
  ]
})
export class IntroModule { }
