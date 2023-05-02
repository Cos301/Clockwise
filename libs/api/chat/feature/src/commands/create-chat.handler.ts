import { CreateChatCommand, IMessage, IChat } from "@mp/api/chat/util"
import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs"
import { Timestamp } from "firebase-admin/firestore"
import { Chat } from "../models"

@CommandHandler(CreateChatCommand)
export class CreateChatHandler implements ICommandHandler<CreateChatCommand> {
    constructor(private readonly publisher: EventPublisher) {
        console.log(`${CreateChatHandler.name} constructor`)
    }

    async execute(command: CreateChatCommand){

        console.log("create chat handler");

        const request = command.request;
        const chat_id = request.chat.chat_id;
        const users = request.chat.users;
        const messages = null;

        const data: IChat = {
            chat_id,
            users,
            messages
        };

        console.log("Jason message to be created:", data)
        const chat = this.publisher.mergeObjectContext(Chat.fromData(data));
        console.log(`${CreateChatHandler.name} post`, chat);

        chat.create();
        chat.commit();

    }
}