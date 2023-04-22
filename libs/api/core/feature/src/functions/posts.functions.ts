import * as functions from 'firebase-functions';
import { IGetAllPostsRequest, IGetAllPostsResponse } from '@mp/api/posts/util';
import { PostsService } from '@mp/api/posts/feature';
import { NestFactory } from '@nestjs/core';
import { CoreModule } from '../core.module';

export const getAllUsers = functions.https.onCall(async (request: IGetAllPostsRequest): Promise<IGetAllPostsResponse> => {
  const app = await NestFactory.createApplicationContext(CoreModule);
  const service = app.get(PostsService);
  return service.getAllPosts(request);
});
