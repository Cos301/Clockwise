import { Component } from '@angular/core';
import { actionsExecuting, ActionsExecuting } from '@ngxs-labs/actions-executing';
import { Select, Selector, Store } from '@ngxs/store';
import { PostsState } from '@mp/app/posts/data-access';
import { CreateComment, GetAllPosts } from '@mp/app/posts/util';
import { IPost } from '@mp/api/posts/util';
import { Observable } from 'rxjs';

@Component({
  selector: 'get-all-posts',
  templateUrl: './get-all-posts.component.html',
  styleUrls: ['./get-all-posts.component.scss'],
})
export class GetAllPostsComponent {
  @Select(PostsState.posts) posts$!: Observable<IPost[] | null>;
  @Select(actionsExecuting([GetAllPosts]))
  busy$!: Observable<ActionsExecuting>;

  constructor(
    private readonly store: Store
  ) { }

  @Selector()
  private getAllPosts() {
    return this.store.select(state => state.posts.posts)
  }

  public callAllPosts() {
    console.log("🚀 ~ file: posts.page.ts:21 ~ PostsPage ~ callAllPosts ~ StartingTo:", this.store)
    this.store.dispatch(new GetAllPosts({}));
  }

  public createComment() {
    console.log('Create comment posts.page.ts:34');
    this.store.dispatch(new CreateComment({
      text: 'some_text',
      ownerId: 'some_owner_id',
      postId: 'some_post_id',
      userId: 'some_user_id'
    }));
  }
}
