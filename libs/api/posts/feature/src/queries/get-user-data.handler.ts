import { PostsRepository } from '@mp/api/posts/data-access';
import {
  GetUserDataQuery,
  IGetUserDataResponse,
  IPost,
} from '@mp/api/posts/util';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetUserDataQuery)
export class GetAllPostsHandler implements IQueryHandler<GetUserDataQuery> {
  constructor(private readonly repository: PostsRepository) {}

  async execute(query: GetUserDataQuery): Promise<IGetUserDataResponse> {
    console.log(`${GetAllPostsHandler.name}`);
    const data = await this.repository.fetchAllPosts();
    console.log(
      '🚀 ~ file: get-all-posts.handler.ts:12 ~ GetAllPostsHandler ~ handle ~ data:',
      data
    );
    const posts: IPost[] = [];
    data.forEach((x) => posts.push(x as IPost));

    console.log('get-all-posts.handler.ts:17 ~ posts: ', posts);

    return { posts: posts as IPost[] };
  }
}
