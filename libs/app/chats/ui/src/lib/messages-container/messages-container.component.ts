import { Component, Input } from '@angular/core';
import { MessageBubbleComponent } from '../message-bubble/message-bubble.component'
import { CommonModule } from '@angular/common';

type MessageType = {
  chatName: string, 
  msgPreview: string, 
  time: string,
  isUnread: boolean, 
  profilePhotoUrl: string
}

@Component({
  selector: 'mp-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    MessageBubbleComponent
  ]
})
export class MessagesContainerComponent {
  @Input() messages : MessageType[];

  constructor() {
    this.messages = [
      {
        chatName: "New Chat" ,
        msgPreview: "This is a message preview",
        time: "13:45",
        isUnread: true,
        profilePhotoUrl: 'assets/placeholderAssets/dog.jpg'
      }
    ]
  }

  addMessage() {
    this.messages.push(
      {
        chatName: "Tracy" ,
        msgPreview: "Hi, this is tracy!",
        time: "13:45",
        isUnread: true,
        profilePhotoUrl: 'assets/placeholderAssets/dog.jpg'
      }
    );
  }
}
