import { AggregateRoot } from '@nestjs/cqrs';
import { IChat } from '../interfaces/chat.interfaces';
import { IUser } from '@mp/api/users/util';
import { Timestamp } from 'firebase-admin/firestore';
import { ChatCreatedEvent } from '../events/chat-created.event';

export class Chat extends AggregateRoot implements IChat {
  constructor(
    public chat_id: string,
    public messages: {content: string, sender: IUser, time_created: Timestamp}[],
    public participants: IUser[]
   ) {
    super();
  }

  static fromData(chat: IChat): Chat {
    const instance = new Chat(
        chat.chat_id,
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
      chat_id: this.chat_id,
      messages: this.messages,
      participants: this.participants,
    };
  }

}