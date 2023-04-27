import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { CreatePostState } from '@mp/app/posts/data-access';
import { IPost } from '@mp/api/posts/util';
import { Observable } from 'rxjs';
import { ShowCreatePost } from '@mp/app/posts/util';
import { PostsState } from '@mp/app/posts/data-access';

@Component({
  selector: 'ms-profile-page',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage {

  createPostShown$!: Observable<boolean>;

  constructor(
    private store: Store
  ) {
    // this.store.dispatch(new HideCreatePost())
    this.createPostShown$ = this.store.select(CreatePostState.createPostShown);
    console.log('create post shown...', this.createPostShown$);
  }

  showCreatePost(): void {
    this.store.dispatch(new ShowCreatePost())
  }
  
}
