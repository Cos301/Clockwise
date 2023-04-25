import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';

import { ICreateCommentRequest, ICreateCommentResponse, IGetAllPostsRequest, IGetAllPostsResponse } from '@mp/api/posts/util';

@Injectable()
export class PostsApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) { }

  async getAllPosts(request: IGetAllPostsRequest) {
    console.log('getAllPosts callable');
    return await httpsCallable<IGetAllPostsRequest, IGetAllPostsResponse>(
      this.functions,
      'getAllPosts'
    )(request);
  }

  async createComment(request: ICreateCommentRequest) {
    console.log('createComment callable');
    return await httpsCallable<ICreateCommentRequest, ICreateCommentResponse>(
      this.functions,
      'createComment',
    )(request);
  }
}
