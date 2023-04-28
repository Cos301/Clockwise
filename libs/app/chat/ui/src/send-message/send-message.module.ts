import { NgModule } from "@angular/core";
import {SendMessageComponent} from "./send-message.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxsFormPluginModule } from "@ngxs/form-plugin";
import { ChatModule } from "@mp/app/chat/data-access";


@NgModule({
    declarations: [SendMessageComponent],
    imports: [
        CommonModule,
        IonicModule,
        NgxSkeletonLoaderModule,
        ReactiveFormsModule,
        NgxsFormPluginModule,
        ChatModule
    ],
    exports: [SendMessageComponent]
})
export class SendMessageModule {}