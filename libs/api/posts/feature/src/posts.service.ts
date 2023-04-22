import { CommandBus } from '@nestjs/cqrs';
import { GetAllPostsQuery } from '../../util/src/queries';
import { IGetAllPostsRequest } from '../../util/src/requests';
import { IGetAllPostsResponse } from '../../util/src/response';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  constructor(private readonly commandBus: CommandBus) { }

  async getAllPosts(request: IGetAllPostsRequest): Promise<IGetAllPostsResponse> {
    return await this.commandBus.execute<GetAllPostsQuery, IGetAllPostsResponse>(new GetAllPostsQuery(request));
  }
}

