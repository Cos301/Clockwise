import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IMessage } from '@mp/api/chat/util';
import { Select, Store } from '@ngxs/store';
import { AuthState } from '@mp/app/auth/data-access';
import { ProfileState } from '@mp/app/profile/data-access';
import { Location } from '@angular/common';


@Component({
  selector: 'mp-in-chat',
  templateUrl: './in-chat.component.html',
  styleUrls: ['./in-chat.component.scss']
})
export class InChatComponent {
  @Input() chatHistory: IMessage[] | null | undefined;
  currentUser = "John";

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(private readonly store: Store, private location: Location) {
    console.log('Chat history: ', this.chatHistory);
    
  }

  sendMessage() {
    alert("Message sent");
  }

  getCurrentUserId(){
    return this.store.selectSnapshot(AuthState.user)?.uid
  }

  goBack() {
    //set the location to /home
    this.closeModal.emit();
    console.log('Calling close in child');
  }
}
