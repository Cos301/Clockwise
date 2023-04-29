import { Component, Input } from '@angular/core';
import { MessageBubbleComponent } from '../message-bubble/message-bubble.component'
import { CommonModule } from '@angular/common';

type MessageType = {
  chatName: string,
  msgPreview: string,
  time: string,
  unReadCount: string
}

@Component({
  selector: 'mp-message-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss'],
  imports: [
    CommonModule, 
    MessageBubbleComponent
  ], 
  standalone: true
})
export class MessagesContainerComponent {
  @Input() messages : MessageType[];

  constructor() {
    this.messages = []
    //get the messages from the state...
  }

  addMessage(newMessage: MessageType) {
    this.messages.push(newMessage);
  }
}
