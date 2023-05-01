import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IComment, IPost } from '@mp/api/posts/util';
import { IUser, IUserProfile } from '@mp/api/users/util';
import { user } from 'firebase-functions/v1/auth';

@Injectable()
export class PostsRepository {
  //Fetch all posts from the database
  async fetchAllPosts(): Promise<IPost[]> {
    // console.log('Fetch all posts');
  
    const postsRef = admin.firestore().collectionGroup('posts');
    const posts: IPost[] = [];
  
    const snapshot = await postsRef.get();
  
    const postPromises = snapshot.docs.map(async (doc) => {
      const post = doc.data() as IPost;
      const comments: IComment[] = [];
      console.log('Francois', post);
      await Promise.all(post.comments.map(async (comment) => {
        const commentRef: any = comment;
        const comment_id = commentRef._path.segments[1];
        const newcomment = await admin.firestore().collection('comments').doc(comment_id).get().then(async (doc) => {
          const commentData = doc.data() as IComment;
          const newComment: IComment = {
            comment_id: commentData.comment_id,
            text: commentData.text,
            time_created: commentData.time_created,
            user_id: commentData.user_id,
            comment_children: commentData.comment_children,
          };
          return newComment;
        });
        comments.push(newcomment);
      }));
  
      const newPost: IPost = {
        post_id: post.post_id,
        caption: post.caption,
        comments: await Promise.all(comments),
        img_url: post.img_url,
        time_created: post.time_created,
        time_remove: post.time_remove,
        user_id: post.user_id,
      };
  
      posts.push(newPost);
    });
  
    await Promise.all(postPromises);
  
    return posts;
  }


  async getUserData() {
    const userRef = admin.firestore().collection('users');
    const userSnapshot = await userRef.get();
    const users: IUser[] = [];

    const userPromises = userSnapshot.docs.map(async (doc) => {
      const userData = doc.data() as IUser;
      if(userData.userProfile) {
        userData.userProfile.posts = [];
      }
      console.log('userData', userData);
      const newUser: IUser = userData; 
      users.push(newUser);
    });
    await Promise.all(userPromises);
    return users;
  }
  
  

  async createPost(post: IPost) {
    return await admin
      .firestore()
      .collection('posts')
      .doc(post.post_id)
      .create(post);
  }
}
