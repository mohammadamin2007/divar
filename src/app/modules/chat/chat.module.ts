import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMainComponent } from './components/chat-main/chat-main.component';
import { ChatsComponent } from './components/chats/chats.component';
import { WhenCanAnswerComponent } from './components/when-can-answer/when-can-answer.component';
import { RemoveChatsComponent } from './components/remove-chats/remove-chats.component';
import { SettingsComponent } from './components/settings/settings.component';
import ChatRoutingModule from './chat-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatSideBarComponent } from './components/chat-side-bar/chat-side-bar.component';



@NgModule({
  declarations: [
    ChatMainComponent,
    ChatsComponent,
    WhenCanAnswerComponent,
    RemoveChatsComponent,
    SettingsComponent,
    NavbarComponent,
    ChatSideBarComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
