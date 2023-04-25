import * as functions from 'firebase-functions';
import { ICreateCommentRequest, ICreateCommentResponse, IGetAllPostsRequest, IGetAllPostsResponse } from '@mp/api/posts/util';
import { PostsService } from '@mp/api/posts/feature';
import { NestFactory } from '@nestjs/core';
import { CoreModule } from '../core.module';

export const getAllPosts = functions.https.onCall(async (request: IGetAllPostsRequest): Promise<IGetAllPostsResponse> => {
  const app = await NestFactory.createApplicationContext(CoreModule);
  const service = app.get(PostsService);
  return service.getAllPosts(request);
});

export const createComment = functions.https.onCall(async (request: ICreateCommentRequest): Promise<ICreateCommentResponse> => {
  console.log('posts.functions.ts:14 ~ request: ', request);
  const app = await NestFactory.createApplicationContext(CoreModule);
  const service = app.get(PostsService);
  return service.createComment(request);
});
