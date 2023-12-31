import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: () => import("./modules/intro/intro.module").then(m => m.IntroModule), data: {animation: "home"}},
  {path: "b/support-users/fa", loadChildren: () => import("./modules/support/support.module").then(m => m.SupportModule), data: {animation: "support"}},
  {path: "download", loadChildren: () => import("./modules/download-app/download-app.module").then(m => m.DownloadAppModule), data: {animation: "download"}},
  {path: "about", loadChildren: () => import("./modules/about-divar/about-divar.module").then(m => m.AboutDivarModule), data: {animation: "about"}},
  {path: "new", loadChildren: () => import("./modules/add-new/add-new.module").then(m => m.AddNewModule), data: {animation: "new"}},
  {path: "chat", loadChildren: () => import("./modules/chat/chat.module").then(m => m.ChatModule), data: {animation: "chat"}},
  {path: "myDivar", loadChildren: () => import("./modules/user-panel/user-panel.module").then(m => m.UserPanelModule), data: {animation: "myDivar"}},
  {path: "s/:id", loadChildren: () => import("./modules/products/products.module").then(m => m.ProductsModule)},
  {path: "**", loadChildren: () => import("./modules/intro/intro.module").then(m => m.IntroModule), data: {animation: "notFound"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
