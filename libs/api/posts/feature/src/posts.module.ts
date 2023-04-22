import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { PostsModule as PostsDataAccessModule } from "../../data-access/src/posts.module";
import { PostsService } from "./posts.service";
import { GetAllPostsHandler } from "./queries";

export const QueryHandlers = [GetAllPostsHandler];

@Module({
  imports: [CqrsModule, PostsDataAccessModule],
  providers: [PostsService, ...QueryHandlers],
  exports: [PostsService]
})
export class PostsModule { }
