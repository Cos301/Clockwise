import { Injectable } from "@nestjs/common";
import { IPost } from "@mp/api/posts/util";
import * as admin from 'firebase-admin';

@Injectable()
export class PostsRepository {
  //Fetch all posts from the database
  async fetchAllPosts() {
    console.log('Fetch all posts');
    return await admin.firestore().collection('posts').get();
  }
}
