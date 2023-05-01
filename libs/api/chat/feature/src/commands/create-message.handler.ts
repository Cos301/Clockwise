import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { ICreateMessageRequest } from '@mp/api/chat/util';
import { CreateMessageCommand } from '@mp/api/chat/util';
import { IMessage } from '@mp/api/chat/util';
import { Timestamp } from 'firebase-admin/firestore';
import * as admin from 'firebase-admin';
import { ChatRepository } from '@mp/api/chat/data-access';

@CommandHandler(CreateMessageCommand)
export class CreateMessageHandler
  implements ICommandHandler<CreateMessageCommand>
{
  message_id!: string;
  from!: string;
  timestamp!: Timestamp;
  content!: string;

  constructor(private readonly repository: ChatRepository) { }

  async execute(command: CreateMessageCommand) {
    console.log(`${CreateMessageHandler.name}`);
    console.log('create-message.handler.ts ~ command: ', command);
    const message = command.request.message;
    if (message.message_id && message.from && message.timestamp && message.content) {
      this.message_id = message.message_id;
      this.from = message.from;
      this.timestamp = Timestamp.now();
      this.content = message.content;
    }

    const { chat_id } = command.request;

    const data: IMessage = {
      message_id: this.message_id,
      from: this.from,
      timestamp: this.timestamp,
      content: this.content
    }

    const response = await this.repository.createMessage(chat_id, data);
    return { chat_id: chat_id, message: response }

  }
}
