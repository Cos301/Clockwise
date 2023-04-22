import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ChatState } from './chat.state';
import { ChatApi } from './chat.api';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([ChatState])],
  providers: [ChatApi],
})
export class ChatModule { }

