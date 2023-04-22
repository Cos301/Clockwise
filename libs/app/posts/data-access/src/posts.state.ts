import { Injectable } from '@angular/core';
import { IPost } from '@mp/api/posts/util';
import { GetAllPosts, setAllPosts } from '@mp/app/posts/util';

import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { PostsApi } from './posts.api';
import { Timestamp } from 'firebase-admin/firestore';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PostsStateModel {
  posts: IPost[];
  // post_id: string;
  // caption: string;
  // comments: IComment[];
  // img_url: string;
  // time_created: Timestamp;
  // time_remove: Timestamp;
  // user_id: string;
}

@State<PostsStateModel>({
  name: 'posts',
  defaults: {
    posts: [],
    // post_id: '',
    // caption: '',
    // comments: [],
    // img_url: '',
    // time_created: Timestamp.now(),
    // time_remove: Timestamp.now(),
    // user_id: '',
  },
})
@Injectable()
export class PostsState {
  constructor(
    private readonly postsApi: PostsApi,
    private readonly store: Store
  ) { }
  @Selector()
  static posts(state: PostsStateModel) {
    return state.posts;
  }

  @Action(GetAllPosts)
  async getAllPosts(ctx: StateContext<PostsStateModel>) {

    console.log('🚀 ~ file: posts.state.ts:47 ~ PostsState ~ getAllPosts ');
    try {
      const responseRef = await this.postsApi.getAllPosts();
      const response = responseRef.data;
      console.log(
        '🚀 ~ file: posts.state.ts:47 ~ PostsState ~ getAllPosts ~ response:',
        response
      );

      return ctx.dispatch(new setAllPosts(response.posts));
    } catch (error) {
      return error;
    }
  }
}
