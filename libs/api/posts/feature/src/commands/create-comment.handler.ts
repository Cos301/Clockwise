import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { IComment } from '@mp/api/posts/util';
import { CreateCommentCommand } from '@mp/api/posts/util';
import { Timestamp } from 'firebase-admin/firestore';

@CommandHandler(CreateCommentCommand)
export class CreateCommentHandler implements ICommandHandler<CreateCommentCommand> {
  constructor(private publisher: EventPublisher) { }

  async execute(command: CreateCommentCommand) {
    console.log(`${CreateCommentHandler.name}`);
    const { userId, text } = command.request;
    const data: IComment = {
      user_id: userId, text, time_created: Timestamp.now(), comment_id: 'some_random_text'
    }
  }
}
