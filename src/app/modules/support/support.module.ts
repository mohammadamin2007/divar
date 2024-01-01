import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportMainComponent } from './components/support-main/support-main.component';
import { SupportItemComponent } from './components/support-item/support-item.component';
import {FooterComponent} from "./components/footer/footer.component";
import { MajorSupportComponent } from './components/major-support/major-support.component';
import {RouterModule} from "@angular/router";
import {SupportRoutingModule} from "./support-routing.module";
import { LinkBoldListedTextDirective } from './directive/link-bold-listed-text.directive';
import { ContactComponent } from './components/contact/contact.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NavigationComponent } from './components/navigation/navigation.component';
import { SendMailComponent } from './components/send-mail/send-mail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SupportItemMainComponent } from './components/support-item-main/support-item-main.component';
import {UserDropDownComponent} from './components/user-drop-down/user-drop-down.component'

@NgModule({
    declarations: [
        SupportMainComponent,
        SupportItemComponent,
        FooterComponent,
        MajorSupportComponent,
        LinkBoldListedTextDirective,
        ContactComponent,
        NavigationComponent,
        SendMailComponent,
        NavbarComponent,
        SupportItemMainComponent,
        UserDropDownComponent
    ],
    exports: [
        LinkBoldListedTextDirective
    ],
  imports: [
    CommonModule,
    RouterModule,
    SupportRoutingModule,
    ReactiveFormsModule,
  ]
})
export class SupportModule { }
