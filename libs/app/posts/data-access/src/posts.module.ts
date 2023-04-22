import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { PostsState } from './posts.state';
import { PostsApi } from './posts.api';
import { AuthModule } from '@mp/app/auth/data-access';
@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([PostsState]), AuthModule],
  providers: [PostsApi],
})
export class PostsModule {
  constructor() {
    console.log('PostsModule');
  }
}
