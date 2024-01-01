import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-remove-chats',
  templateUrl: './remove-chats.component.html',
  styleUrls: ['./remove-chats.component.scss']
})
export class RemoveChatsComponent {
  @Output('closeEvent') closeEvent: EventEmitter<string> = new EventEmitter<string>()
  removeChatsList = []

  closeRemoveChats() {
    this.closeEvent.emit("close");
  }

  removeSelectedChats(event: MouseEvent) {
    if(this.removeChatsList.length !== 0) {
      this.closeRemoveChats();
    }
  }
}
