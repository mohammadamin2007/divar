import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {MainComponent} from "./components/main/main.component";


let routes: Routes = [
  {path: "", component: MainComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IntroRoutingModule {}
