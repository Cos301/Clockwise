import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { ICreateMessageRequest } from '@mp/api/chat/util';
import { CreateMessageCommand } from '@mp/api/chat/util';
import { IMessage } from '@mp/api/chat/util';
import { Timestamp } from 'firebase-admin/firestore';
import * as admin from 'firebase-admin';

@CommandHandler(CreateMessageCommand)
export class CreateMessageHandler
  implements ICommandHandler<CreateMessageCommand>
{
  constructor(private publisher: EventPublisher) {}

  async execute(command: CreateMessageCommand) {
    console.log(`${CreateMessageHandler.name}`);
    console.log('create-message.handler.ts ~ command: ', command);
    const { message_id, content, from } = command.request.message;
    const { chat_id } = command.request;

    const chatRef = admin.firestore().doc(`/chats/${command.request.chat_id}`);

    const messagesArray = (await chatRef.get()).get('messages');
    const data: ICreateMessageRequest = {
      chat_id: chat_id,
      message:{
        message_id: message_id,
        from: from,
        timestamp: Timestamp.now(),
        content: content,
      }
    };
    messagesArray.push(data.message);

    return await admin
      .firestore()
      .batch()
      .update(chatRef, { messages: messagesArray })
      .commit();
  }
}
