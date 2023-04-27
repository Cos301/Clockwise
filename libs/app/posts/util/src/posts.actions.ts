import { ICreateCommentRequest, IGetAllPostsRequest, IPost } from '@mp/api/posts/util';

export class GetAllPosts {
  static readonly type = '[Posts] GetAllPosts';
  constructor(public readonly request: IGetAllPostsRequest) {
    console.log(
      '🚀 ~ file: posts.actions.ts:14 ~ GetAllPosts ~ constructor ~ constructor'
    );
  }
}

export class ShowCreatePost {
  static readonly type = '[Posts] ShowCreatePost';
  constructor () {
    console.log("🚀 ~ file: posts.actions.ts:15~ ShowCreatePost ~ CreatePost:")
  }
}

export class HideCreatePost {
  static readonly type = '[Posts] HideCreatePost';
}


export class setAllPosts {
  static readonly type = '[Posts] setAllPosts';
  constructor(public readonly posts: IPost[]) { }
}

export class CreateComment {
  static readonly type = '[Posts] CreateComment';
  constructor(public readonly comment: ICreateCommentRequest) { }
}

export class CreatePost {
  static readonly type = '[Posts] CreatePost';
  constructor () {
    console.log("🚀 ~ file: posts.actions.ts:20~ CreatePost ~ CreatePost:")
  }
}

export class setCreatedPost {
  static readonly type = '[Posts] setCreatedPost';
  constructor(public readonly post: IPost | null) {}
}

export class IncrementCounter {
  static readonly type = '[Posts] Increment Counter';
}

export class DecrementCounter {
  static readonly type = '[Posts] Decrement Counter';
}