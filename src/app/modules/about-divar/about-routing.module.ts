import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AboutMainComponent} from "./components/about-main/about-main.component";
import {AboutDetailsComponent} from "./components/about-details/about-details.component";


let routes: Routes = [
  {path: "", component: AboutMainComponent},
  {path: "details", component: AboutDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AboutRoutingModule {}
