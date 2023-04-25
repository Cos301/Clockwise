import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ChatModule } from '@mp/app/chat/data-access';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { GetAllChatsComponent } from './get-all-chats.component';
// import { SingleChat } from '../single-chat';

@NgModule({
    declarations: [GetAllChatsComponent],
    imports: [
        CommonModule,
        IonicModule,
        NgxSkeletonLoaderModule,
        ReactiveFormsModule,
        NgxsFormPluginModule,
        ChatModule,
        // SingleChat
    ],
    exports: [GetAllChatsComponent],
})
export class GetAllChatsModule { }
