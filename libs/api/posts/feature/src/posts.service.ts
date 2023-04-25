import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import {
  GetAllPostsQuery,
  ICreateCommentRequest,
  IGetAllPostsRequest,
  IGetAllPostsResponse,
  ICreateCommentResponse,
  CreateCommentCommand
} from '@mp/api/posts/util';

@Injectable()
export class PostsService {
  constructor(private readonly queryBus: QueryBus, private readonly cmdBus: CommandBus) { }

  async getAllPosts(
    request: IGetAllPostsRequest
  ): Promise<IGetAllPostsResponse> {
    const response = await this.queryBus.execute<

      GetAllPostsQuery,
      IGetAllPostsResponse
    >(new GetAllPostsQuery(request));
    return response;
  }

  async createComment(request: ICreateCommentRequest): Promise<ICreateCommentResponse> {
    return await this.cmdBus.execute<CreateCommentCommand, ICreateCommentResponse>(new CreateCommentCommand(request));
  }
}
