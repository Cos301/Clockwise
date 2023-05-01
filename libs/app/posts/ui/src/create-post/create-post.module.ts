import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsModule } from '@mp/app/posts/data-access';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CreatePostComponent } from './create-post.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxSkeletonLoaderModule,
        ReactiveFormsModule,
        NgxsFormPluginModule,
        PostsModule,
        IonicModule
    ],
    declarations: [CreatePostComponent],
    exports: [CreatePostComponent],
})
export class CreatePostModule { }