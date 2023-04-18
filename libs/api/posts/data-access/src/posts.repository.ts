import { Injectable } from "@nestjs/common";
import { Post } from "@mp/api/posts/util";
import * as admin from 'firebase-admin';

@Injectable()
export class PostsRepository {
    //Fetch all posts from the database
    async fetchAllPosts() {
        return await admin.firestore().collection('posts').get();
    }
}

