import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import {
  GetAllPostsQuery,
  ICreateCommentRequest,
  IGetAllPostsRequest,
  IGetAllPostsResponse,
  ICreateCommentResponse,
  CreateCommentCommand,
  ICreatePostRequest,
  ICreatePostResponse,
  CreatePostCommand,
  IGetUserDataRequest,
  IGetUserDataResponse,
  GetUserDataQuery,
} from '@mp/api/posts/util';

@Injectable()
export class PostsService {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly cmdBus: CommandBus
  ) {}

  async getAllPosts(
    request: IGetAllPostsRequest
  ): Promise<IGetAllPostsResponse> {
    console.log('getAllPosts Service');
    const response = await this.queryBus.execute<
      GetAllPostsQuery,
      IGetAllPostsResponse
    >(new GetAllPostsQuery(request));
    return response;
  }

  async createComment(
    request: ICreateCommentRequest
  ): Promise<ICreateCommentResponse> {
    console.log('createComment Service');
    return await this.cmdBus.execute<
      CreateCommentCommand,
      ICreateCommentResponse
    >(new CreateCommentCommand(request));
  }

  //createPost
  async createPost(request: ICreatePostRequest): Promise<ICreatePostResponse> {
    console.log('createPost Service');
    return await this.cmdBus.execute<CreatePostCommand, ICreatePostResponse>(
      new CreatePostCommand(request)
    );
  }

  async getUserData(request: IGetUserDataRequest): Promise<IGetUserDataResponse> {
    console.log('Francois - getUserData Service', request);
    return await this.queryBus.execute<
    GetUserDataQuery,
    IGetUserDataResponse
    >(new GetUserDataQuery(request));
  }
}
