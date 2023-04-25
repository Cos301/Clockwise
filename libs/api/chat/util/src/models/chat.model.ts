import { AggregateRoot } from '@nestjs/cqrs';
import { IChat } from '../interfaces/chat.interfaces';
import { IUser } from '@mp/api/users/util';
import { Timestamp } from 'firebase-admin/firestore';
import { ChatCreatedEvent } from '../events/chat-created.event';

export class Chat extends AggregateRoot implements IChat {
  constructor(
    public chatId: string,
    public messages: {content: string, sender: IUser, time_created: Timestamp}[],
    public participants: IUser[]
   ) {
    super();
  }

  static fromData(chat: IChat): Chat {
    const instance = new Chat(
        chat.chatId,
        chat.messages,
        chat.participants
    );
    return instance;
  }

  create() {
    this.apply(new ChatCreatedEvent(this.toJSON()));
  }

  // space for update functions

  toJSON(): IChat {
    return {
      chatId: this.chatId,
      messages: this.messages,
      participants: this.participants,
    };
  }

}