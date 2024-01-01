import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelMainComponent } from './components/user-panel-main/user-panel-main.component';
import { UserPanelSideNavComponent } from './components/user-panel-side-nav/user-panel-side-nav.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { UserDropDownComponent } from "./components/user-drop-down/user-drop-down.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterModule } from "@angular/router";
import UserPanelRoutingModule from "./user-panel.routing.module";
import {DivarForStoresComponent} from "./components/divar-for-stores/divar-for-stores.component";
import {MyPostComponent} from "./components/my-post/my-post.component";
import {NoteComponent} from "./components/note/note.component";
import {RecentComponent} from "./components/recent/recent.component";
import {VerifyUserComponent} from "./components/verify-user/verify-user.component";
import {ReactiveFormsModule} from "@angular/forms";
import {FavoritComponent} from "./components/favorit/favorit.component";


@NgModule({
  declarations: [
    UserPanelMainComponent,
    UserPanelSideNavComponent,
    NavbarComponent,
    UserDropDownComponent,
    FooterComponent,
    DivarForStoresComponent,
    MyPostComponent,
    NoteComponent,
    RecentComponent,
    FavoritComponent,
    VerifyUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserPanelRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserPanelModule { }
