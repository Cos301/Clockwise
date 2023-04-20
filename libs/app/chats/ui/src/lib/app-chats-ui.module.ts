import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesContainerComponent } from './messages-container/messages-container.component';
import { ChatSearchComponent } from './chat-search/chat-search.component';

@NgModule({
  imports: [CommonModule, ChatSearchComponent, MessagesContainerComponent],
  declarations: [],
  exports: [ChatSearchComponent, MessagesContainerComponent],
})
export class AppChatsUiModule {}
