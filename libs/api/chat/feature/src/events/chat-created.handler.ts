import { ChatRepository } from '@mp/api/chat/data-access';
import { MessageCreatedEvent } from '@mp/api/chat/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(MessageCreatedEvent)
export class MessageCreatedHandler implements IEventHandler<MessageCreatedEvent> {
  constructor(private readonly repository: ChatRepository) {}

  async handle(event: MessageCreatedEvent) {
    await this.repository.createMessage(event.chat, event.message);
  }
}
