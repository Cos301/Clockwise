import { CreatePostCommand, IComment, IPost } from "@mp/api/posts/util";
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { Post } from '../models';

@CommandHandler(CreatePostCommand)
export class CreatePostHandler implements ICommandHandler<CreatePostCommand> {
  constructor(private publisher: EventPublisher) {
    console.log("Create Post Handler");
  }

  async execute(command: CreatePostCommand) {
    
    console.log(`${CreatePostHandler.name}`);

    // const request = command.request;
    // const post_id = request.post.post_id;
    // const caption = request.post.caption;
    // const comments = request.post.comments;
    // const img_url = request.post.img_url;
    // const time_created = request.post.time_created;
    // const time_remove = request.post.time_remove;
    // const user_id = request.post.user_id;
    
    const post_id = "post_id_test";
    const caption = "caption_test";
    const comments : IComment[] = [];
    const img_url = "img_url_test";
    
    const time_remove = Timestamp.fromDate(new Date());
    const user_id = "1";
    const data: IPost = {
        post_id,
        caption,
        comments,
        img_url,
        time_created: Timestamp.fromDate(new Date()),
        time_remove,
        user_id
    };
    const post = this.publisher.mergeObjectContext(Post.fromData(data));
    console.log("🚀 ~ file: create-post.handler.ts:42 ~ CreatePostHandler ~ execute ~ post:", post)

    post.create();
    post.commit();
  }
}
