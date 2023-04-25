import { AggregateRoot } from "@nestjs/cqrs";
import { IChat } from "../interfaces";
import { IUser } from "@mp/api/users/util";


export class Chat extends AggregateRoot implements IChat{
    constructor(
        public chat_id: string,
        public messages: {content: string, sender: IUser, time_created: Timestamp}[],
        public participants: string[]


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
}