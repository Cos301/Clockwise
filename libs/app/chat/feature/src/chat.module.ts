import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatPage } from './chat.page';
import { ChatUIModule } from '@mp/app/chat/ui';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    ChatUIModule,
    CommonModule, 
    IonicModule
  ],
  declarations: [
    ChatPage
  ],
  exports: [
  ]
})
export class ChatModule {}
