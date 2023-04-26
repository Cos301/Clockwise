import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PostsState, CreatePostState } from './posts.state';
import { PostsApi } from './posts.api';
@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([PostsState]), NgxsModule.forFeature([CreatePostState])], 
  providers: [PostsApi],
})
export class PostsModule {
  constructor() {
    console.log('PostsModule');
  }
}
