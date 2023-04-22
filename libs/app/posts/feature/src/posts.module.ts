import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import { PostsModule as PostsDataAccessModule } from '@mp/app/posts/data-access';
import {GetAllPostsModule } from '@mp/app/posts/ui';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PostsPage } from './posts.page';
import { PostsRouting } from './posts.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsRouting,
    //PostsDataAccessModule,
    GetAllPostsModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [PostsPage],
})
export class PostsModule {}
