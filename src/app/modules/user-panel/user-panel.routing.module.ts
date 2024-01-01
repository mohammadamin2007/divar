import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UserPanelMainComponent} from "./components/user-panel-main/user-panel-main.component";
import {MyPostComponent} from "./components/my-post/my-post.component";
import {VerifyUserComponent} from "./components/verify-user/verify-user.component";
import {FavoritComponent} from "./components/favorit/favorit.component";
import {NoteComponent} from "./components/note/note.component";
import {RecentComponent} from "./components/recent/recent.component";
import {DivarForStoresComponent} from "./components/divar-for-stores/divar-for-stores.component";
//import {AuthGuard} from "./auth.guard";

let routes: Routes = [
  {path: "", component: UserPanelMainComponent, children: [
      {path: "myPosts", component: MyPostComponent}, //canActivate: [AuthGuard],
      {path: "verifyUser", component: VerifyUserComponent}, //canActivate: [AuthGuard],
      {path: "favorite", component: FavoritComponent},
      {path: "note", component: NoteComponent},
      {path: "recent", component: RecentComponent},
      {path: "divarStores", component: DivarForStoresComponent},
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})


export default class UserPanelRoutingModule {}
