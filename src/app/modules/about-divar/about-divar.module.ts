import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMainComponent } from './components/about-main/about-main.component';
import { TopAboutComponent } from './components/top-about/top-about.component';
import { CooperationsComponent } from './components/cooperations/cooperations.component';
import { FooterComponent } from "./components/footer/footer.component";
import { AboutFooterComponent } from './components/about-footer/about-footer.component';
import {AboutRoutingModule} from "./about-routing.module";
import { AboutDetailsComponent } from './components/about-details/about-details.component';
import { AboutJobComponent } from './components/about-job/about-job.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {UserDropDownComponent} from "./components/user-drop-down/user-drop-down.component";

@NgModule({
  declarations: [
    AboutMainComponent,
    TopAboutComponent,
    CooperationsComponent,
    FooterComponent,
    AboutFooterComponent,
    AboutDetailsComponent,
    AboutJobComponent,
    NavbarComponent,
    UserDropDownComponent
  ],
    imports: [
        CommonModule,
        AboutRoutingModule,

    ],
    exports: [
        AboutMainComponent,
        AboutFooterComponent,
        UserDropDownComponent
    ]
})
export class AboutDivarModule { }
