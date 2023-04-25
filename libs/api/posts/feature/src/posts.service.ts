import { QueryBus } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import {
  GetAllPostsQuery,
  IComment,
  IGetAllPostsRequest,
  IGetAllPostsResponse,
  IPost,
} from '@mp/api/posts/util';

@Injectable()
export class PostsService {
  constructor(private readonly queryBus: QueryBus) {}

  async getAllPosts(
    request: IGetAllPostsRequest
  ): Promise<IGetAllPostsResponse> {
    const response = await this.queryBus.execute<
    
      GetAllPostsQuery,
      IGetAllPostsResponse
    >(new GetAllPostsQuery(request));
    return response;
  }
}
