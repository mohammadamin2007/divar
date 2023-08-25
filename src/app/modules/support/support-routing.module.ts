import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SupportMainComponent} from "./components/support-main/support-main.component";


let routes: Routes = [
  {path: "", component: SupportMainComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SupportRoutingModule {}
