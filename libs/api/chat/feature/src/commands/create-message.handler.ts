import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { IMessage } from '@mp/api/chat/util';
import { CreateMessageCommand } from '@mp/api/chat/util';
import { Timestamp } from 'firebase-admin/firestore';
import * as admin from 'firebase-admin';
import * as crypto from 'crypto';

@CommandHandler(CreateMessageCommand)
export class CreateMessageHandler
  implements ICommandHandler<CreateMessageCommand>
{
  constructor(private publisher: EventPublisher) {}

  async execute(command: CreateMessageCommand) {
    console.log(`${CreateMessageHandler.name}`);
    console.log('create-message.handler.ts ~ command: ', command);
    const { message_id, content, from } = command.request;

    const chatRef = admin.firestore().doc(`/chats/${command.request.chat_id}`);
    const messagesArray = (await chatRef.get()).get('messages');

    const data: IMessage = {
      message_id: message_id,
      from: from,
      timestamp: Timestamp.now(),
      content: content,
    };

    let newMessageId = crypto.randomBytes(16).toString('hex');
    let newMessageRef = admin.firestore().doc(`/chats/messages/${newMessageId}`);

    messagesArray.push(newMessageRef);
    admin
      .firestore()
      .batch()
      .create(newMessageRef, data)
      .update(chatRef, { messages: messagesArray })
      .commit();
  }
}
