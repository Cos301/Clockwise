import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';

import { IGetAllPostsQuery, IGetAllPostsResponse } from '@mp/api/posts/util';

@Injectable()
export class PostsApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  async getAllPosts() {
    return await httpsCallable<IGetAllPostsQuery, IGetAllPostsResponse>(
      this.functions,
      'getAllPosts'
    )();
  }
}