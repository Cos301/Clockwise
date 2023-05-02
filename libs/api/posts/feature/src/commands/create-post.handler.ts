import { CreatePostCommand, IComment, IPost } from "@mp/api/posts/util";
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { Post } from '../models';
import { PostsState } from "@mp/app/posts/data-access";

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
    const img_url = request.img_url;
    const time_created = Timestamp.now();

    const user_id = request.user_id;
    const postLife = request.postLife;

    const dateRemoved = new Date();
    dateRemoved.setHours(postLife);
      
    const time_remove = Timestamp.fromDate(dateRemoved);

    const data: IPost = {
        post_id,
        caption,
        comments : [],
        img_url : img_url,
        time_created: time_created,
        time_remove,
        user_id
    };

    
    const post = this.publisher.mergeObjectContext(Post.fromData(data));

    post.create();
    post.commit();
  }
}
