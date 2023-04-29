import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChatPage } from './chat.page';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { MessageContainer, ChatSearch, MessageBubble } from '@mp/app/chat/ui';
import { ChatRouting } from './chat.routing';
import { NgxsModule } from '@ngxs/store';
import { ChatState, ChatModule as ChatModuleDataAccess } from '@mp/app/chat/data-access';

@NgModule({
  declarations: [ChatPage],
  imports: [
    CommonModule,
    IonicModule, 
    MessageContainer,
    ChatRouting, 
    ChatSearch, 
    ChatModuleDataAccess,
    MessageBubble,
    NgxsModule.forFeature([ChatState])
  ],
  exports: [ChatPage],
})
export class ChatModule {}
