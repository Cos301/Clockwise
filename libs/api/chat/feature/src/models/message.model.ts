import { AggregateRoot } from "@nestjs/cqrs";
import { IMessage } from "@mp/api/chat/util";
import { Timestamp } from 'firebase-admin/firestore';
import { Reference } from "firebase-admin/database";

export class Message extends AggregateRoot implements IMessage {
    constructor(
        // public chat_id: string | null | undefined,
        public message_id: string | null | undefined,
        public from: string | null | undefined,
        public timestamp: Timestamp | null | undefined,
        public content: string | null | undefined,
    ) {
        super();
    }

    static fromData(message: IMessage): Message {
        return new Message( message.message_id, message.from, message.timestamp, message.content);
    }
}
