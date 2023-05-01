import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ChatState, CreateChatState } from './chat.state';
import { ChatApi } from './chat.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([ChatState, CreateChatState])],
  providers: [ChatApi],
})
export class ChatModule {
  constructor(){
    console.log("ChatModule loaded");
  }
 }

