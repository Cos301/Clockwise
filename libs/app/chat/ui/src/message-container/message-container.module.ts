import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MessageContainerComponent } from './message-container.component';

@NgModule({
  declarations: [MessageContainerComponent],
  imports: [CommonModule, IonicModule],
  exports: [MessageContainerComponent],
})
export class MessageContainer {}
