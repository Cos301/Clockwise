import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { IComment } from '@mp/api/posts/util';
import { CreateCommentCommand } from '@mp/api/posts/util';
import { Timestamp } from 'firebase-admin/firestore';
import * as admin from 'firebase-admin';
import * as crypto from 'crypto';

@CommandHandler(CreateCommentCommand)
export class CreateCommentHandler implements ICommandHandler<CreateCommentCommand> {
  constructor(private publisher: EventPublisher) { }

  async execute(command: CreateCommentCommand) {
    console.log(`${CreateCommentHandler.name}`);
    console.log('create-comment.handler.ts ~ command: ', command);
    const { userId, text } = command.request;

    const postRef = admin.firestore().doc(`/posts/${command.request.postId}`);
    const commentsArray = (await postRef.get()).get('comments');

    const data: IComment = {
      user_id: userId, text, time_created: Timestamp.now(), comment_id: 'some_random_text', comment_children: []
    }

    const newCommentId = crypto.randomBytes(16).toString('hex');
    const newCommentRef = admin.firestore().doc(`/comments/${newCommentId}`);

    commentsArray.push(newCommentRef);
    admin.firestore().batch().create(newCommentRef, data).update(postRef, { comments: commentsArray }).commit();
  }
}
