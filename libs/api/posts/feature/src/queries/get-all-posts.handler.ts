import { PostsRepository } from '@mp/api/posts/data-access';
import { GetAllPostsQuery, IComment, IPost } from '@mp/api/posts/util';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetAllPostsQuery)
export class GetAllPostsHandler implements IQueryHandler<GetAllPostsQuery> {
  constructor(private readonly repository: PostsRepository) {}

  async execute(query: GetAllPostsQuery): Promise<any> {
    console.log(`${GetAllPostsHandler.name} hello`);
    const data = await this.repository.fetchAllPosts();
    
    // const posts: IPost[] = [];
    // data.forEach((post) => {
    //   console.log("Comments: ", post.comments);
    //   const commentRef: IComment[] = post.comments as IComment[];
    //   const comments: IComment[] = [];
    //   commentRef.forEach((com) => {
    //     comments.push({
    //       comment_id: com.comment_id,
    //       text: com.text,
    //       time_created: com.time_created,
    //       user_id: com.user_id,
    //       comment_children: com.comment_children,
    //     });
       
    //   });

    //   const newPost: IPost = {
    //     post_id: post.post_id,
    //     caption: post.caption,
    //     comments: comments,
    //     img_url: post.img_url,
    //     time_created: post.time_created,
    //     time_remove: post.time_remove,
    //     user_id: post.user_id,
    //   };
    //   posts.push(newPost);
    //   return newPost;
    // });
    // console.log(
    //   '🚀 ~ file: get-all-posts.handler.ts:40 ~ GetAllPostsHandler ~ data.forEach ~ posts:',
    //   posts
    // );

    return data;
  }
}
