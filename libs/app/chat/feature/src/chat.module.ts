import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatPage } from './chat.page';
import { ChatUIModule } from '@mp/app/chat/ui';
import { IonicModule } from '@ionic/angular';
import { ChatRouting } from './chat.routing';

@NgModule({
  imports: [
    ChatUIModule,
    CommonModule, 
    IonicModule, 
    ChatRouting
  ],
  declarations: [
    ChatPage
  ],
  exports: [
  ]
})
export class ChatModule {}
