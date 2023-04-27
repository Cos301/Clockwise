import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { IMessage } from '@mp/api/chat/util';
import { CreateMessageCommand } from '@mp/api/chat/util';
import { Timestamp } from 'firebase-admin/firestore';

@CommandHandler(CreateMessageCommand)
export class CreateMessageHandler implements ICommandHandler<CreateMessageCommand> {
    constructor(private publisher: EventPublisher) { }

    async execute(command: CreateMessageCommand) {
        const { from, message_id, content } = command.request;
        const data: IMessage = {
            message_id: message_id, from: from, timestamp: Timestamp.fromDate(new Date()), content: content
        }
    }
}
