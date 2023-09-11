import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ContactComponent} from "./components/contact/contact.component";
import {SupportMainComponent} from "./components/support-main/support-main.component";
import {SendMailComponent} from "./components/send-mail/send-mail.component";
import {SupportItemMainComponent} from "./components/support-item-main/support-item-main.component";


let routes: Routes = [
  {path: "", component: SupportMainComponent, children: [
      {path: "", component: SupportItemMainComponent},
      {path: "contact", component: ContactComponent},
      {path: "sendMail", component: SendMailComponent},
  ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SupportRoutingModule {}
