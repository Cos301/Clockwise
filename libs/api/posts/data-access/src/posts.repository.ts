import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IPost } from '@mp/api/posts/util';

@Injectable()
export class PostsRepository {
  //Fetch all posts from the database
  async fetchAllPosts(): Promise<IPost[]> {
    console.log('Fetch all posts');
    const insertData = {
      name: 'John',
      age: 30,
    };
    const postsRef = admin.firestore().collectionGroup('posts');
    //console.log("🚀 ~ file: posts.repository.ts:12 ~ PostsRepository ~ fetchAllPosts ~ postsRef:", postsRef)
    const data = await postsRef.get();
    // const testInsert =  await admin
    //   .firestore()
    //   .collection('posts')
    //   .doc("postsData")
    //   .create(insertData);
    console.log(
      '🚀 ~ file: posts.repository.ts:14 ~ PostsRepository ~ fetchAllPosts ~ data:',
      data
    );

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
