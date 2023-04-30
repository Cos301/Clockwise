import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IMessage } from '@mp/api/chat/util';
import { Select, Store } from '@ngxs/store';
import { AuthState } from '@mp/app/auth/data-access';
import { ProfileState } from '@mp/app/profile/data-access';


@Component({
  selector: 'mp-in-chat',
  templateUrl: './in-chat.component.html',
  styleUrls: ['./in-chat.component.scss']
})
export class InChatComponent {
  @Input() chatHistory: IMessage[] | null | undefined;
  currentUser = "John";

  

  constructor(private readonly store: Store) {
    console.log('Chat history: ', this.chatHistory);
    
  }

  sendMessage() {
    alert("Message sent");
  }

  cmp(){
    return this.store.selectSnapshot(AuthState.user)?.uid
  }
}
