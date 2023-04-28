import { Component } from '@angular/core';
import {
  actionsExecuting,
  ActionsExecuting,
} from '@ngxs-labs/actions-executing';
import { Select, Selector, Store } from '@ngxs/store';
import { PostsState } from '@mp/app/posts/data-access';
import { CreateComment, GetAllPosts, GetUserData } from '@mp/app/posts/util';
import { IPost } from '@mp/api/posts/util';
import { Observable } from 'rxjs';
import { Timestamp } from 'firebase-admin/firestore';
import { IUser } from '@mp/api/users/util';

@Component({
  selector: 'get-all-posts',
  templateUrl: './get-all-posts.component.html',
  styleUrls: ['./get-all-posts.component.scss'],
})
export class GetAllPostsComponent {
  public loaded = false;
  @Select(PostsState.posts) posts$!: Observable<IPost[] | null>;
  @Select(PostsState.user) users$!: Observable<IUser[]>;
  @Select(actionsExecuting([GetAllPosts, GetUserData, CreateComment]))
  busy$!: Observable<ActionsExecuting>;

  posts!: IPost[];
  users!: IUser[];

  constructor(private readonly store: Store) {
    setTimeout(() => {
      this.loaded = true;
      this.showPosts();
    }, 2000);
    this.callAllPosts();
    this.getUserData();
    this.posts$.subscribe((posts) => {
      this.posts = posts || [];
    });

    this.users$.subscribe((users) => {
      this.users = users || [];
    });
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

  public getUserData() {
    this.store.dispatch(new GetUserData({}));
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
  showPosts() {
    const postCards = document.getElementsByTagName('single-post');
    for (let index = 0; index < postCards.length; index++) {
      postCards.item(index)?.classList.remove('hide');
      
    }
  }
}
