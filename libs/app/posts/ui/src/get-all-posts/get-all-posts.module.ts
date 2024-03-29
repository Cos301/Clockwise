import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostsModule } from '@mp/app/posts/data-access';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { GetAllPostsComponent } from './get-all-posts.component';
import { SinglePost } from '../single-post';

@NgModule({
  declarations: [GetAllPostsComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    NgxsFormPluginModule,
    PostsModule,
    SinglePost
  ],
  exports: [GetAllPostsComponent],
})
export class GetAllPostsModule { }
