import { PostsRepository } from '@mp/api/posts/data-access';
import { GetAllPostsQuery, IGetAllPostsResponse } from '@mp/api/posts/util';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { Post } from '../models';

@QueryHandler(GetAllPostsQuery)
export class GetAllPostsHandler implements IQueryHandler<GetAllPostsQuery> {
  constructor(private readonly repository: PostsRepository) {}

  async execute(query: GetAllPostsQuery): Promise<IGetAllPostsResponse> {
    console.log(`${GetAllPostsHandler.name}`);
    const data = await this.repository.fetchAllPosts();
    console.log("🚀 ~ file: get-all-posts.handler.ts:12 ~ GetAllPostsHandler ~ handle ~ data:", data)
    let posts: any[] = [];
    data.forEach(x => posts.push(x as Post));

    console.log('get-all-posts.handler.ts:17 ~ posts: ', posts);

    return { posts: (posts as Post[]) };
  }
}
