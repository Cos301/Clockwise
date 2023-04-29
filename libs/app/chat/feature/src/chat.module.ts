import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChatPage } from './chat.page';
import { MessageContainer, ChatSearch } from '@mp/app/chat/ui';
import { ChatRouting } from './chat.routing';
import { NgxsModule } from '@ngxs/store';
import { ChatState } from '@mp/app/chat/data-access';

@NgModule({
  declarations: [ChatPage],
  imports: [
    CommonModule,
    IonicModule, 
    MessageContainer,
    ChatRouting, 
    ChatSearch, 
    NgxsModule.forFeature([ChatState])
  ],
  exports: [ChatPage],
})
export class ChatModule {}
