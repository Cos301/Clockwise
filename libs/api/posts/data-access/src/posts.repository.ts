import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IComment, IPost } from '@mp/api/posts/util';

@Injectable()
export class PostsRepository {
  //Fetch all posts from the database
  async fetchAllPosts() {
    console.log('Fetch all posts');
    const insertData = {
      name: 'John',
      age: 30,
      caption: 'Your mom is a nice person',
    };

    // const testInsert = await admin
    //   .firestore()
    //   .collection('test')
    //   .doc('asddasd')
    //   .create(insertData);
    const postsRef = admin.firestore().collection('posts');
    const posts: IPost[] = [];
    const data = await postsRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const post = doc.data() as IPost;
        //form post
        const comments: IComment[] = [];
        post.comments.forEach((com) => {
          
          comments.push({
            comment_id: com.comment_id,
            text: com.text,
            time_created: com.time_created,
            user_id: com.user_id,
            comment_children: com.comment_children,
          });
        });
        const newPost: IPost = {
          post_id: post.post_id,
          caption: post.caption,
          comments: comments,
          img_url: post.img_url,
          time_created: post.time_created,
          time_remove: post.time_remove,
          user_id: post.user_id,
        };

        posts.push(newPost);
      });
      return posts;
    });
    console.log(
      '🚀 ~ file: posts.repository.ts:30 ~ PostsRepository ~ fetchAllPosts ~ posts:',
      posts
    );
    // const commentRef = admin.firestore().collection('comments');
    // const commentData = await commentRef.get().then((snapshot) => {
    //   const data: IComment[] = [];
    //   snapshot.forEach((doc) => {
    //     const post = doc.data() as IComment;
    //     data.push(post);
    //   });
    //   return data;
    // });
    // console.log("🚀 ~ file: posts.repository.ts:40 ~ PostsRepository ~ commentData ~ commentData:", commentData)

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
