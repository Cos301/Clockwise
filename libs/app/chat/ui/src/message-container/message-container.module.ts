import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MessagesContainerComponent } from './messages-container.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, IonicModule, MessagesContainerComponent],
  exports: [MessagesContainerComponent],
})
export class MessageContainer {}
