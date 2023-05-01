import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatModule } from '@mp/app/chat/data-access';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { InChatComponent } from './in-chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [InChatComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    NgxsFormPluginModule,
    ChatModule,
    FormsModule
  ],
  exports: [InChatComponent],
})
export class InChat { }