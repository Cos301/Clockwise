import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';

import { IGetAllPostsRequest, IGetAllPostsResponse, ICreatePostRequest, ICreatePostResponse } from '@mp/api/posts/util';

@Injectable()
export class PostsApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) { }

  async getAllPosts() {
    console.log('getAllPosts callable');
    return await httpsCallable<IGetAllPostsRequest, IGetAllPostsResponse>(
      this.functions,
      'getAllPosts'
    )();    
  }
  async createPost(request: ICreatePostRequest) {
    console.log('createPost callable');
    return await httpsCallable<ICreatePostRequest, ICreatePostResponse>(
      this.functions,
      'createPost'
    )(request);
  }
}


