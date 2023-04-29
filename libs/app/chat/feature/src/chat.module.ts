import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChatPage } from './chat.page';
import { MessageContainer, ChatSearch } from '@mp/app/chat/ui';
import { ChatRouting } from './chat.routing';

@NgModule({
  declarations: [ChatPage],
  imports: [CommonModule, IonicModule, MessageContainer, ChatRouting, ChatSearch],
  exports: [ChatPage],
})
export class ChatModule {}
