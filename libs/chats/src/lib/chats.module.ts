import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatSearchComponent } from './chat-search/chat-search.component';
import { MessageBubbleComponent } from './message-bubble/message-bubble.component';
import { MessagesContainerComponent } from './messages-container/messages-container.component';
import { ChatsDemoComponent } from './chats-demo/chats-demo.component';
import { TimeBarComponent } from '@mp/app/global-ui';

@NgModule({
  imports: [
    CommonModule, 
    TimeBarComponent, 
    ChatsDemoComponent, 
    ChatSearchComponent, 
    MessageBubbleComponent, 
    MessagesContainerComponent
  ],
  declarations: [
  ],
  exports: [MessagesContainerComponent],
})
export class ChatsModule {}
