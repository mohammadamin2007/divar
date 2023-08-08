import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroModule } from "./modules/intro/intro.module";
import {MainComponent} from "./modules/intro/components/main/main.component";
import {SupportMainComponent} from "./modules/support/components/support-main/support-main.component";

const routes: Routes = [
  {path: "", component: MainComponent, data: {animation: 'home'}},
  {path: "b/support-users/fa", component: SupportMainComponent, data: {animation: 'support'}},
  {path: "**", component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), IntroModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
