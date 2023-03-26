import { Component, Input } from '@angular/core';
import { MessageBubbleComponent } from '../message-bubble/message-bubble.component'
import { CommonModule } from '@angular/common';

type MessageType = {
  message: string
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
      { message: 'Hello I am message 1'}, 
      { message: 'Hello, I am message 2'}
    ]
  }

  addMessage(newMessage: MessageType) {
    this.messages.push(newMessage);
  }
}
