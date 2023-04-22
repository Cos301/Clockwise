import { PostsRepository } from '@mp/api/posts/data-access';
import { IGetAllPostsQuery } from '@mp/api/posts/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(IGetAllPostsQuery)
export class GetAllPostsHandler implements IEventHandler<IGetAllPostsQuery> {
  constructor(private readonly repository: PostsRepository) {}

  async handle(event: IGetAllPostsQuery) {
    console.log(`${GetAllPostsHandler.name}`);
    const data  = await this.repository.fetchAllPosts();
    console.log("🚀 ~ file: get-all-posts.handler.ts:12 ~ GetAllPostsHandler ~ handle ~ data:", data)
    return data;
  }
}