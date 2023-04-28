import { PostsRepository } from '@mp/api/posts/data-access';
import {
  GetUserDataQuery,
  IGetUserDataResponse,
} from '@mp/api/posts/util';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetUserDataQuery)
export class GetUserDataHandler implements IQueryHandler<GetUserDataQuery> {
  constructor(private readonly repository: PostsRepository) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async execute(query: GetUserDataQuery): Promise<IGetUserDataResponse> {
    console.log(`${GetUserDataHandler.name}`);
    const data = await this.repository.getUserData();
    return {users: data};
  }
}
