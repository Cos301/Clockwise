import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ChatModule as ChatsDataAccessModule } from '@mp/api/chat/data-access';
import { ChatService } from './chat.service';
import { GetAllChatsHandler } from './queries';
import { CreateMessageHandler, CreateChatHandler } from './commands';
import { ChatCreatedHandler } from './events';

export const QueryHandlers = [GetAllChatsHandler];
export const CommandHandlers = [CreateMessageHandler, CreateChatHandler];
export const EventHandlers = [ChatCreatedHandler];

@Module({
  imports: [CqrsModule, ChatsDataAccessModule],
  providers: [
    ChatService,
    ...QueryHandlers,
    ...CommandHandlers,
    ...EventHandlers,
  ],
  exports: [ChatService],
})
export class ChatModule {}
