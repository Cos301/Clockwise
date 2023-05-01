import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CreateNewChatComponent } from './create-new-chat.component';

@NgModule({
  declarations: [CreateNewChatComponent],
  imports: [CommonModule, IonicModule],
  exports: [CreateNewChatComponent],
})
export class CreateNewChat {}