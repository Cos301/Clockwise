import { ICreateCommentRequest, IGetAllPostsRequest, IPost } from '@mp/api/posts/util';

export class GetAllPosts {
  static readonly type = '[Posts] GetAllPosts';
  constructor(public readonly request: IGetAllPostsRequest) {
    console.log(
      '🚀 ~ file: posts.actions.ts:14 ~ GetAllPosts ~ constructor ~ constructor'
    );
  }
}

export class setAllPosts {
  static readonly type = '[Posts] setAllPosts';
  constructor(public readonly posts: IPost[]) { }
}

export class CreateComment {
  static readonly type = '[Posts] CreateComment';
  constructor(public readonly comment: ICreateCommentRequest) { }
}
