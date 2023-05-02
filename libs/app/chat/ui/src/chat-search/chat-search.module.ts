import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ChatSearchComponent } from './chat-search.component';

@NgModule({
  declarations: [ChatSearchComponent],
  imports: [CommonModule, IonicModule],
  exports: [ChatSearchComponent],
})
export class ChatSearch {}
