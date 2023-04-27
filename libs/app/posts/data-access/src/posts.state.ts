import { Injectable } from '@angular/core';
import { IPost, IComment, ICreatePostRequest } from '@mp/api/posts/util';
import { IncrementCounter, setCreatedPost, CreatePost, CreateComment, GetAllPosts, setAllPosts, ShowCreatePost, HideCreatePost, DecrementCounter } from '@mp/app/posts/util';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { PostsApi } from './posts.api';
import { Timestamp } from '@angular/fire/firestore';
import produce from 'immer';
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
  count: number;
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
    count: 0
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

  @Selector()
  static count(state: PostStateModel) {
    return state.count;
  }

  @Action(setAllPosts)
  setAllPosts(ctx : StateContext<PostsStateModel>, { posts }: setAllPosts) {
    return ctx.setState(
      produce((draft) => {
        draft.posts = posts;
      })
    );
  }

  @Action(GetAllPosts)
  async getAllPosts(ctx: StateContext<PostsStateModel>, action: GetAllPosts) {

    console.log('🚀 ~ file: posts.state.ts:47 ~ PostsState ~ getAllPosts ');
    try {
      const responseRef = await this.postsApi.getAllPosts(action.request);
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

  @Action(CreateComment)
  async createComment(ctx: StateContext<PostsStateModel>, action: CreateComment) {
    console.log('posts.state.ts:65 ~ PostsState ~ createComment');

    try {
      console.log('posts.state.ts:68 action: ', action);
      const responseRef = await this.postsApi.createComment(action.comment);
      const response = responseRef.data;

      console.log('posts.state.ts:70 ~ response: ', response);

      return null;
    } catch (error) {
      return error;
    }
  }
}


// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PostStateModel {
  post: IPost | null;
  createPostForm: {
    model: {
      post_id: string | null;
      caption: string | null;
      img_url: string | null;
      user_id: string | null;
      postLife: number;
    };
    dirty: false;
    status: string;
    errors: object;
  };
  count: number, 
  createPostShown: boolean
}
@State<PostStateModel>({
  name: 'createPost',
  defaults: {
    post: null,
    createPostForm: {
      model: {
        post_id: '',
        caption: '',
        img_url: '',
        user_id: '',
        postLife: 10,
      },
      dirty: false,
      status: '',
      errors: {},
    },
    count: 1, 
    createPostShown: false
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

  @Selector()
  static count(state: PostStateModel){
    return state.count;
  }

  @Selector()
  static createPostShown(state: PostStateModel) {
    return state.createPostShown;
  }

  @Action(ShowCreatePost)
  showCreatePost(ctx: StateContext<PostStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      createPostShown: true
    })
    console.log("🚀 ~ file: posts.state.ts:124 ~ PostState ~ Increment counter ~ state:", state.createPostShown)
  }

  @Action(HideCreatePost)
  hideCreatePost(ctx: StateContext<PostStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      createPostShown: false
    })
    console.log("🚀 ~ file: posts.state.ts:175 ~ PostState ~ Increment counter ~ state:", state.createPostShown)
  }

  @Action(IncrementCounter)
  async incrementCounter(ctx: StateContext<PostStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      count: state.count + 1
    })
    console.log("🚀 ~ file: posts.state.ts:185 ~ PostState ~ Increment counter ~ state:", state.count)
  }

  @Action(DecrementCounter)
  async decrementCounter(ctx: StateContext<PostStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      count: state.count - 1
    })
    console.log("🚀 ~ file: posts.state.ts:195 ~ PostState ~ Decrement counter ~ state:", state.count)
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
      const caption = state.createPostForm.model.caption;
      const comments : IComment[] = [];
      const img_url = state.createPostForm.model.img_url;
      const time_created = Timestamp.fromDate(new Date());
      const postLife = state.createPostForm.model.postLife == null ? 10 : state.createPostForm.model.postLife;
      const dateRemoved = new Date();
      dateRemoved.setHours(postLife);
      const time_remove = Timestamp.fromDate(dateRemoved);
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
      console.log("🚀 ~ file: posts.state.ts:159 ~ CreatePostState ~ createPost ~ request:", request)
      const responseRef = await this.postsApi.createPost(request);
      const response = responseRef.data;
      console.log("🚀 ~ file: posts.state.ts:214 ~ CreatePostState ~ createPost ~ response:", response)

      return ctx.dispatch(new setCreatedPost(response.post));

    } catch (error) {
     return error;
    }
  }
}

