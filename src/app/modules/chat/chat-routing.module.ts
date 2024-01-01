import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChatMainComponent } from "./components/chat-main/chat-main.component";

let routes: Routes = [
    {path: "", component: ChatMainComponent},
    {path: ":chat", component: ChatMainComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})


export default class ChatRoutingModule {}