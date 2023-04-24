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
      caption: "Your mom is a nice person"
    };

    //console.log("🚀 ~ file: posts.repository.ts:12 ~ PostsRepository ~ fetchAllPosts ~ postsRef:", postsRef)

    // const testInsert = await admin
    //   .firestore()
    //   .collection('test')
    //   .doc('asddasd')
    //   .create(insertData);
    const postsRef = admin.firestore().collectionGroup('posts');
    const data = await postsRef.get();

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
