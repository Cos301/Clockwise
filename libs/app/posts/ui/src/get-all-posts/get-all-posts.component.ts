import { Component } from '@angular/core';
import { actionsExecuting, ActionsExecuting } from '@ngxs-labs/actions-executing';
import { Select, Selector, Store } from '@ngxs/store';
import { PostsState } from '@mp/app/posts/data-access';
import { GetAllPosts } from '@mp/app/posts/util';
import { IPost } from '@mp/api/posts/util';
import { Observable } from 'rxjs';
import { SinglePost } from '../single-post';

type PostType = {
  username: string, 
  caption: string, 
  minutesLeft: number,
  imageUrl: string,
  datePosted: string,
  timePosted: string
}

@Component({
  selector: 'get-all-posts',
  templateUrl: './get-all-posts.component.html',
  styleUrls: ['./get-all-posts.component.scss'],
})
export class GetAllPostsComponent {
  @Select(PostsState.posts) posts$!: Observable<IPost[] | null>;
  @Select(actionsExecuting([GetAllPosts]))
  busy$!: Observable<ActionsExecuting>;

  posts: PostType[]

  constructor(private readonly store: Store) {
    this.posts = [
      {
        username: 'user', 
        caption: 'I am a caption', 
        minutesLeft: 12,
        imageUrl: 'imageUrl',
        datePosted: '12 March',
        timePosted: '12:34'
      }, 
      {
        username: 'user', 
        caption: 'I am a caption', 
        minutesLeft: 12,
        imageUrl: 'imageUrl',
        datePosted: '12 March',
        timePosted: '12:34'
      },
      {
        username: 'user', 
        caption: 'I am a caption', 
        minutesLeft: 12,
        imageUrl: 'imageUrl',
        datePosted: '12 March',
        timePosted: '12:34'
      }
    ]
  }

  @Selector()
  private getAllPosts() {
    return this.store.select(state => state.posts.posts)
  }

  public callAllPosts() {
    console.log("🚀 ~ file: posts.page.ts:21 ~ PostsPage ~ callAllPosts ~ StartingTo:", this.store)
    this.store.dispatch(new GetAllPosts());
  }
}
