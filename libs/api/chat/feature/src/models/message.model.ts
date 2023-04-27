import { AggregateRoot } from "@nestjs/cqrs";
import { IMessage } from "@mp/api/chat/util";
import { Timestamp } from 'firebase-admin/firestore';
import { Reference } from "firebase-admin/database";

export class Message extends AggregateRoot implements IMessage {
    constructor(
        public message_id: string,
        public from: Reference,
        public timestamp: Timestamp,
        public content: string,
    ) {
        super();
    }

    static fromData(message: IMessage): Message {
        return new Message(message.message_id, message.from, message.timestamp, message.content);
    }
}
