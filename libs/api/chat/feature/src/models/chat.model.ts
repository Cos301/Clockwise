
import { AggregateRoot } from '@nestjs/cqrs';
import { IChat, IMessage } from '@mp/api/chat/util';
import { IUser } from '@mp/api/users/util';
import { Timestamp } from 'firebase-admin/firestore';

export class Chat extends AggregateRoot implements IChat {
    constructor(
        public chat_id: string,
        public users: IUser[],
        public messages: IMessage[],
    ) {
        super();
    }

    static fromData(chat: IChat): Chat {
        const instance = new Chat(
            chat.chat_id,
            chat.users,
            chat.messages,
        );
        return instance;
    }
}
