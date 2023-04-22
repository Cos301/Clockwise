import { IPost } from '@mp/api/posts/util';

export class GetAllPosts {
  static readonly type = '[Posts] GetAllPosts';
  constructor() {
    console.log(
      '🚀 ~ file: posts.actions.ts:14 ~ GetAllPosts ~ constructor ~ constructor'
    );
  }
}

export class setAllPosts {
  static readonly type = '[Posts] setAllPosts';
  constructor(public readonly posts: IPost[]) {}
}
