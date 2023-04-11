import { Component } from '@angular/core';
import { MessagesContainerComponent } from '../messages-container/messages-container.component';
import { ChatSearchComponent } from '../chat-search/chat-search.component';

@Component({
  selector: 'mp-chats-demo',
  templateUrl: './chats-demo.component.html',
  styleUrls: ['./chats-demo.component.scss'],
  standalone: true,
  imports: [ 
    MessagesContainerComponent,
    ChatSearchComponent
  ]
})
export class ChatsDemoComponent {}
