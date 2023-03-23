import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatSearchComponent } from './chat-search/chat-search.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChatHeaderComponent, ChatSearchComponent],
})
export class ChatsModule {}
