import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GetAllChatsComponent } from './get-all-chats.component'

@NgModule({
  declarations: [GetAllChatsComponent],
  imports: [CommonModule, IonicModule],
  exports: [GetAllChatsComponent],
})
export class GetAllChat {}