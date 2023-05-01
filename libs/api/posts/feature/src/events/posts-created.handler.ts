import { PostsRepository } from '@mp/api/posts/data-access';
import { PostCreatedEvent } from '@mp/api/posts/util';
import { PostsState } from '@mp/app/posts/data-access';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(PostCreatedEvent)
export class PostCreatedHandler implements IEventHandler<PostCreatedEvent> {
  constructor(private readonly repository: PostsRepository) {}

  async handle(event: PostCreatedEvent) {
    console.log(`${PostCreatedHandler.name} create post event/handler`);
    await this.repository.createPost(event.post);
  }
}
