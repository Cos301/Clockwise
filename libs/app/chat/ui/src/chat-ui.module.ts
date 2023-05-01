import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatSearchComponent } from './chat-search/chat-search.component';
import { MessageBubbleComponent } from './message-bubble/message-bubble.component';
import { MessageContainerComponent } from './message-container/message-container.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChatSearchComponent,
    MessageBubbleComponent,
    MessageContainerComponent,
  ],
  exports: [
    ChatSearchComponent,
    MessageBubbleComponent,
    MessageContainerComponent
  ]
})
export class ChatUIModule {}
