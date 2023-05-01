import { Module } from '@nestjs/common';
import { PostsRepository } from './posts.repository';

@Module({
  providers: [PostsRepository],
  exports: [PostsRepository],
})

export class PostsModule { }
