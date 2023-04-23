import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IPost } from '@mp/api/posts/util';

@Injectable()
export class PostsRepository {
  //Fetch all posts from the database
  async fetchAllPosts() {
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

    return data;
  }

  async createPost(post: IPost) {
    return await admin
      .firestore()
      .collection('posts')
      .doc(post.post_id)
      .create(post);
  }
}
