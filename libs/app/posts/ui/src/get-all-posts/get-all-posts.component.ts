import { Component } from '@angular/core';
import {
  actionsExecuting,
  ActionsExecuting,
} from '@ngxs-labs/actions-executing';
import { Select, Selector, Store } from '@ngxs/store';
import { PostsState } from '@mp/app/posts/data-access';
import { CreateComment, GetAllPosts } from '@mp/app/posts/util';
import { IPost } from '@mp/api/posts/util';
import { Observable } from 'rxjs';
import { Timestamp } from 'firebase-admin/firestore';

@Component({
  selector: 'get-all-posts',
  templateUrl: './get-all-posts.component.html',
  styleUrls: ['./get-all-posts.component.scss'],
})

export class GetAllPostsComponent {
  @Select(PostsState.posts) posts$!: Observable<IPost[] | null>;
  @Select(actionsExecuting([GetAllPosts]))
  busy$!: Observable<ActionsExecuting>;

  posts!: IPost[];

  constructor(private readonly store: Store) {
    this.callAllPosts();
    this.posts$.subscribe((posts) => {
      this.posts = posts || [];
    });
    console.log('Francois', this.posts);
  }

  @Selector()
  private getAllPosts() {
    return this.store.select((state) => state.posts.posts);
  }

  public callAllPosts() {
    console.log(
      '🚀 ~ file: posts.page.ts:21 ~ PostsPage ~ callAllPosts ~ StartingTo:',
      this.store
    );
    this.store.dispatch(new GetAllPosts({}));
  }

  public createComment() {
    console.log('Create comment posts.page.ts:34');
    this.store.dispatch(
      new CreateComment({
        text: 'some_text',
        ownerId: 'some_owner_id',
        postId: 'post_id_test',
        userId: 'some_user_id',
      })
    );
  }

  calcTotalTIme(created: Timestamp, remove: Timestamp) {
    return remove.toDate().getTime() - created.toDate().getTime();
  }

  calcTimeLeft(created: Timestamp, remove: Timestamp) {
    const timestamp = Date.now();
    console.log('Francois', timestamp);
    const timeLeft: number = remove.toDate().getTime() - timestamp;
    return timeLeft.toString();
  }
}
