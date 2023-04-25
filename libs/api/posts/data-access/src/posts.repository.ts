import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IComment, IPost } from '@mp/api/posts/util';

@Injectable()
export class PostsRepository {
  //Fetch all posts from the database
  async fetchAllPosts(): Promise<IPost[]> {
    console.log('Fetch all posts');
    const insertData = {
      name: 'John',
      age: 30,
      caption: 'Your mom is a nice person',
    };
    let posts: IPost[] = [];
    data.forEach(x => posts.push(x.data() as IPost));
    console.log('posts.repository.ts:29 ~ posts:', posts);

    return posts;
  }

  async createPost(post: IPost) {
    return await admin
      .firestore()
      .collection('posts')
      .doc(post.post_id)
      .create(post);
  }
}
