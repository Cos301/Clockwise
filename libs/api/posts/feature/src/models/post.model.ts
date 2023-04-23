import { AggregateRoot } from '@nestjs/cqrs';
import { PostCreatedEvent, IPost, IComment } from '@mp/api/posts/util';
import { Timestamp } from 'firebase-admin/firestore';

export class Post extends AggregateRoot implements IPost {
  constructor(
    public post_id: string,
    public caption: string,
    public comments: IComment[],
    public img_url: string,
    public time_created: Timestamp,
    public time_remove: Timestamp,
    public user_id: string
  ) {
    super();
  }

  static fromData(post: IPost): Post {
    const instance = new Post(
        post.post_id,
        post.caption,
        post.comments,
        post.img_url,
        post.time_created,
        post.time_remove,
        post.user_id
    );
    return instance;
  }

  create() {
    this.apply(new PostCreatedEvent(this.toJSON()));
  }

  toJSON(): IPost {
    return {
      post_id: this.post_id,
      caption: this.caption,
      comments: this.comments,
      img_url: this.img_url,
      time_created: this.time_created,
      time_remove: this.time_remove,
      user_id: this.user_id
    };
  }
}
