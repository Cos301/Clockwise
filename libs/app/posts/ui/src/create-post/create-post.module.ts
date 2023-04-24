import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostsModule } from '@mp/app/posts/data-access';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CreatePostComponent } from './create-post.component';

@NgModule({
    declarations: [CreatePostComponent],
    imports: [
        CommonModule,
        IonicModule,
        NgxSkeletonLoaderModule,
        ReactiveFormsModule,
        NgxsFormPluginModule,
        PostsModule,
    ],
    exports: [CreatePostComponent],
})
export class CreatePostModule { }