import * as functions from 'firebase-functions';
import { IGetAllPostsRequest, IGetAllPostsResponse } from '@mp/api/posts/util';

export const getAllUsers = functions.https.onCall(async (request: IGetAllPostsRequest): Promise<IGetAllPostsResponse> => {
  console.log('Get all users function (posts.functions.ts)');
  return { posts: [] };
});
