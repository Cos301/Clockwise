import {
    IComment,
    IPost    
} from '@mp/api/posts/util';
import { Timestamp } from 'firebase-admin/firestore';
import { IUser } from '@mp/api/users/util';

import { AggregateRoot } from '@nestjs/cqrs';

export class Post extends AggregateRoot implements IPost {
  constructor(
    public post_id: string,
    public img_url: string,
    public caption: string,
    public comments: IComment[],
    public time_created: FirebaseFirestore.Timestamp,
    public time_remove: FirebaseFirestore.Timestamp,
    public user: IUser
   ) {
    super();
  }

  static fromData(post: IPost): Post {
    const instance = new Post(
        post.post_id,
        post.img_url,
        post.caption,
        post.comments,
        post.time_created,
        post.time_remove,
        post.user
    );
    return instance;
  }



}

