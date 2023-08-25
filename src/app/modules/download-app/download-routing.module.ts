import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { DownloadMainComponent } from "./components/download-main/download-main.component";

let routes: Routes = [
  {path: "", component: DownloadMainComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DownloadRoutingModule {}
