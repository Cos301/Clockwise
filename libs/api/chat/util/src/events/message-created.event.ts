import { IMessage, IChat } from "../interfaces";

export class MessageCreatedEvent {
    constructor(public readonly chat: IChat, public readonly message: IMessage) { }
}
