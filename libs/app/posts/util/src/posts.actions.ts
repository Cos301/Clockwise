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
  static readonly type = '[Posts] setCreatedPost';
  constructor() {}
}

export class DecrementCounter {
  static readonly type = '[Posts] setCreatedPost';
  constructor() {}
}