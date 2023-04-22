import { Injectable } from "@nestjs/common"
import * as admin from 'firebase-admin';
import { collection, query, where } from "firebase/firestore";

@Injectable()
export class PostsRepository {
  //Fetch all posts from the database
  async fetchAllPosts() {
    console.log('Fetch all posts');

    const postsRef  = admin.firestore().collection('posts');
    console.log("🚀 ~ file: posts.repository.ts:12 ~ PostsRepository ~ fetchAllPosts ~ postsRef:", postsRef)
    

   // const data = await postsRef.get();
    return postsRef;
  }
}
