import { PostsRepository } from '@mp/api/posts/data-access';
import { GetAllPostsQuery } from '@mp/api/posts/util';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetAllPostsQuery)
export class GetAllPostsHandler implements IQueryHandler<GetAllPostsQuery> {
  constructor(private readonly repository: PostsRepository) { }

  async execute(query: GetAllPostsQuery): Promise<any> {
    console.log(`${GetAllPostsHandler.name} hello`);
    const data = await this.repository.fetchAllPosts();
    console.log("🚀 ~ file: get-all-posts.handler.ts:12 ~ GetAllPostsHandler ~ handle ~ data:", data)
    return data;
  }
}
