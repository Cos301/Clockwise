import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IChat } from '@mp/api/chat/util';

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
  
  constructor() {
    this.chatName = 'Chat Name';
    this.profilePhotoUrl = 'profile-photo.png';
    this.msgPreview =
      'Hi... I am a message preview and I will be displayed I want it to overflowl and displayer over two lines. Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah ';
    this.time = '14:45';
    this.unreadCount = 1;
  }

  getName() {
    //return this.chat.chat_id;
    let name = 'Uknown User';
    this.chat.users?.forEach((user) => {
      name = user.userProfile?.first_name + " " + user.userProfile?.last_name|| 'Uknown User';
    });
    return name;
  }

  messagegPreview() {
    return this.chat.messages?.[0].content;
  }


  getProfilePhoto(){
    let photo = 'Uknown User';
    this.chat.users?.forEach((user) => {
      photo = user.userProfile?.pfp_url|| 'Uknown User';
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
    //console.log("🚀 ~ file: message-bubble.component.ts:62 ~ MessageBubbleComponent ~ lastMessageTime ~ data:", hours)
    return hours + ":" + minutes;
  }
  
  openChatPage(): void {
    this.chatPageOpen.emit(true);
  }
}
