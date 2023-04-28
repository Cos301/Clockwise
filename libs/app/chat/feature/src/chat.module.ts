import { CommonModule } from '@angular/common';
import {Input, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GetAllChatsModule } from '@mp/app/chat/ui';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ChatPage } from './chat.page';
import { ChatRouting } from './chat.routing';
import { InChatComponent } from './lib/in-chat/in-chat.component';
// import { TimeBarComponent } from '@mp/global-ui';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatRouting,
    GetAllChatsModule,
    NgxSkeletonLoaderModule,
    // TimeBarComponent
  ],
  declarations: [ChatPage, InChatComponent],
})
export class ChatModule {
  @Input() chat: any| undefined;
}
