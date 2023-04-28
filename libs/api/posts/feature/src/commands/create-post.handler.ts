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

    const request = command.request;
    const post_id = request.post_id;
    const caption = request.caption;
    // const comments = request.post.comments;
    const img_url = request.img_url;
    const time_created = Timestamp.now();
    // const time_remove = request.post.time_remove;
    const user_id = request.user_id;
    const postLife = request.postLife;
    //const post_id = "post_id_test";
    //const caption = "caption_test";

    //const img_url = "img_url_test";
    const dateRemoved = new Date();
    dateRemoved.setHours(postLife);
      
      const time_remove = Timestamp.fromDate(dateRemoved);
    //const user_id = "1";
    const data: IPost = {
        post_id,
        caption,
        comments : [],
        img_url,
        time_created: time_created,
        time_remove,
        user_id
    };
    const post = this.publisher.mergeObjectContext(Post.fromData(data));
    console.log("🚀 ~ file: create-post.handler.ts:42 ~ CreatePostHandler ~ execute ~ post:", post)

    post.create();
    post.commit();
  }
}
