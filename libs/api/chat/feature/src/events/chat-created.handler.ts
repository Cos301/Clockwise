import { ChatRepository } from '@mp/api/chat/data-access';
import { ChatCreatedEvent } from '@mp/api/chat/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(ChatCreatedEvent)
export class ChatCreatedHandler implements IEventHandler<ChatCreatedEvent> {
  constructor(private readonly repository: ChatRepository) {}

  async handle(event: ChatCreatedEvent) {
    await this.repository.createChat(event.chat);
  }
}
