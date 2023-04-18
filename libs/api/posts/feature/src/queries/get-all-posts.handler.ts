import { PostsRepository } from '@mp/api/posts/data-access';
import { GetAllPostsQuery } from '@mp/api/posts/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(GetAllPostsQuery)
export class GetAllPostsHandler implements IEventHandler<GetAllPostsQuery> {
  constructor(private readonly repository: PostsRepository) {}

  async handle(event: GetAllPostsQuery) {
    console.log(`${GetAllPostsHandler.name}`);
    await this.repository.fetchAllPosts();
  }
}
