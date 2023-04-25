import { AggregateRoot } from "@nestjs/cqrs";
import { IComment } from "@mp/api/posts/util";
import { Timestamp } from 'firebase-admin/firestore';

export class Comment extends AggregateRoot implements IComment {
  constructor(
    public comment_id: string,
    public text: string | null,
    public time_created: Timestamp,
    public user_id: string,
  ) {
    super();
  }

  static fromData(comment: IComment): Comment {
    return new Comment(comment.comment_id, comment.text, comment.time_created, comment.user_id);
  }
}
