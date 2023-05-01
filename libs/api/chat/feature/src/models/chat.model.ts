import { AggregateRoot } from '@nestjs/cqrs';
import { IChat, IMessage, ChatCreatedEvent } from '@mp/api/chat/util';
import { IUser } from '@mp/api/users/util';
import { Timestamp } from 'firebase-admin/firestore';

export class Chat extends AggregateRoot implements IChat {
  constructor(
    public chat_id: string,
    public users: IUser[] | null | undefined,
    public messages: IMessage[] | null | undefined
  ) {
    super();
  }

  static fromData(chat: IChat): Chat {
    const instance = new Chat(chat.chat_id, chat.users, chat.messages);
    return instance;
  }

  create() {
    this.apply(new ChatCreatedEvent(this.toJSON()));
  }

  toJSON(): IChat {
    return {
      chat_id: this.chat_id,
      users: this.users,
      messages: this.messages,
    };
  }
}
