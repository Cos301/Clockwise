import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MessageBubbleComponent } from './message-bubble.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, IonicModule, MessageBubbleComponent],
  exports: [MessageBubbleComponent],
})
export class MessageBubble{}
