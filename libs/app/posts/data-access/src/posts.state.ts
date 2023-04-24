import { Injectable } from '@angular/core';
import { IPost, IComment, ICreatePostRequest } from '@mp/api/posts/util';
import { GetAllPosts, setAllPosts, CreatePost, setCreatedPost, IncrementCounter } from '@mp/app/posts/util';

import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { PostsApi } from './posts.api';
import { Timestamp } from '@angular/fire/firestore';
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
    // user_id: ''
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


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PostStateModel {
  post: IPost | null;
  postDataForm: {
    model: {
      post_id: string | null;
      caption: string | null;
      comments: IComment[];
      img_url: string | null;
      time_created: Timestamp | null;
      time_remove: Timestamp | null;
      user_id: string | null;
    };
    dirty: false;
    status: string;
    errors: object;
  };
  count: number
}
@State<PostStateModel>({
  name: 'post',
  defaults: {
    post: null,
    postDataForm: {
      model: {
        post_id: '',
        caption: '',
        comments: [],
        img_url: '',
        time_created: Timestamp.now(),
        time_remove: Timestamp.now(),
        user_id: '',
      },
      dirty: false,
      status: '',
      errors: {},
    },
    count: 0
  },
})
@Injectable()
export class CreatePostState {
  constructor(
    private readonly postsApi: PostsApi,
    private readonly store: Store
  ) {}
  @Selector()
  static post(state: PostStateModel) {
    return state.post;
  }

  @Action(IncrementCounter)
  async incrementCounter(ctx: StateContext<PostStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      count: state.count + 1
    })
    console.log("🚀 ~ file: posts.state.ts:124 ~ PostState ~ Increment counter ~ state:", state.count)
  }

  @Selector()
  static count(state: PostStateModel) {
    return state.count;
  }


  @Action(CreatePost)
  async createPost(ctx: StateContext<PostStateModel>) {
    
    try {
      const state = ctx.getState();
      //console.log("🚀 ~ file: posts.state.ts:117 ~ PostState ~ createPost ~ state:", state)
      //return ctx.dispatch(new setCreatedPost(null));
      /*const post_id = state.postDataForm.model.post_id;
      const caption = state.postDataForm.model.caption;
      const comments = state.postDataForm.model.comments;
      const img_url = state.postDataForm.model.img_url;
      const time_created = state.postDataForm.model.time_created;
      const time_remove = state.postDataForm.model.time_remove;
      const user_id = state.postDataForm.model.user_id;
*/
      const post_id = '123_asdas_23';
      const caption = 'caption';
      const comments : IComment[] = [];
      const img_url = 'img_url';
      const time_created = Timestamp.fromDate(new Date());
      const time_remove = Timestamp.fromDate(new Date());
      const user_id = 'dabshknl678798';
      if (
        !post_id ||
        !caption ||
        !comments ||
        !img_url ||
        !time_created ||
        !time_remove ||
        !user_id
      ) {
        return;
      }

      const request: ICreatePostRequest = {
        post: {
          post_id,
          caption,
          comments,
          img_url,
          time_created,
          time_remove,
          user_id,
        },
      };
      //console.log("🚀 ~ file: posts.state.ts:159 ~ CreatePostState ~ createPost ~ request:", request)
      //return ctx.dispatch(new setCreatedPost(null));
      const responseRef = await this.postsApi.createPost(request);
      const response = responseRef.data;
      console.log("🚀 ~ file: posts.state.ts:162 ~ CreatePostState ~ createPost ~ response:", response)
      
      return ctx.dispatch(new setCreatedPost(response.post));
      
    } catch (error) {
     return error;
    }
  }
}

