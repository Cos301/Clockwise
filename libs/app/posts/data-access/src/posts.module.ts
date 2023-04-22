import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PostsState } from './posts.state';
import { PostsApi } from './posts.api';
@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([PostsState])],
  providers: [PostsApi],
})
export class PostsModule {
  constructor() {
    console.log('PostsModule');
  }
}
