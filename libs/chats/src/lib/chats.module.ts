import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatSearchComponent } from './chat-search/chat-search.component';
import { ChatBubbleComponent } from './chat-bubble/chat-bubble.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChatSearchComponent, ChatBubbleComponent],
})
export class ChatsModule {}
