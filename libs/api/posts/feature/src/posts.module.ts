import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { PostsModule as PostsDataAccessModule } from "@mp/api/posts/data-access";
import { PostsService } from "./posts.service";
import { GetAllPostsHandler } from "./queries";
import { CreateCommentHandler, CreatePostHandler } from "./commands";
import { PostCreatedHandler } from "./events";

export const CommandHandlers = [CreatePostHandler, CreateCommentHandler];
export const EventHandlers = [PostCreatedHandler];
export const QueryHandlers = [GetAllPostsHandler];

@Module({
  imports: [CqrsModule, PostsDataAccessModule],
  providers: [PostsService, ...QueryHandlers, ...CommandHandlers, ...EventHandlers],
  exports: [PostsService]
})
export class PostsModule { }
