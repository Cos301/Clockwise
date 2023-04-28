import { IChat, IMessage } from '../interfaces';
import { IUser } from '@mp/api/users/util';

import { AggregateRoot } from '@nestjs/cqrs';

export class Chat extends AggregateRoot implements IChat {
    constructor(
        public chat_id: string,
        public users: IUser[] | null | undefined,
        public messages: IMessage[] | null | undefined
    ) {
        super();
    }

    static fromData(chat: IChat): Chat {
        const instance = new Chat(
            chat.chat_id,
            chat.users,
            chat.messages
        );
        return instance;
    }



}

