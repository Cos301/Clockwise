import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { IChat } from '@mp/api/chat/util';
import { Selector } from '@ngxs/store';

@Component({
  selector: 'mp-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.scss'],
  standalone: true,
})

export class MessageBubbleComponent {
  @Input() chatName: string;
  @Input() profilePhotoUrl: string;
  @Input() msgPreview: string;
  @Input() time: string;
  @Input() unreadCount: number;
  @Input() chat!: IChat;

  @Output() chatPageOpen = new EventEmitter<boolean>();
  @Output() currentUser = new EventEmitter<string>();

  
  public getName() {
    let name = 'Unknown User';
    this.chat.users?.forEach((user) => {
      name = user.userProfile?.first_name + " " + user.userProfile?.last_name|| 'Unknown User';
    });
    return name;
  }
  
  constructor() {
    this.chatName = 'Chat Name';
    this.profilePhotoUrl = 'profile-photo.png';
    this.msgPreview =
      'Hi... I am a message preview and I will be displayed I want it to overflow and displayed over two lines. Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah ';
    this.time = '14:45';
    this.unreadCount = 1;
  }

  
  // public getName() {
  //   //return this.chat.chat_id;
    
  // }

  messagegPreview() {
    return this.chat.messages?.[this.chat.messages?.length - 1].content;
  }


  getProfilePhoto(){
    let photo = 'Unknown User';
    this.chat.users?.forEach((user) => {
      photo = user.userProfile?.pfp_url|| 'Unknown User';
      return photo;
    });
    return photo;
  }

  messageCount() {
    return this.chat.messages?.length;
  }

  lastMessageTime(){
    const messages =  this.chat.messages;
    if(messages === null){
      return 'null';
    }
    if(messages === undefined || messages.length === 0){
      return 'undefined or 0';
    }
    const timestamp =  messages[messages.length - 1].timestamp as any;
    //convert timestamp to 24hr format
    const minutes = Math.floor(timestamp._seconds / 36000000);
    const hours = Math.floor(timestamp._nanoseconds / 36000000);

    return hours + ":" + minutes;
  }
  
  openChatPage(): void {
    this.chatPageOpen.emit(true);
    this.currentUser.emit(this.getName());
  }
}
