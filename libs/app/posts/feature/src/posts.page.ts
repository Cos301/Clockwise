import { Component } from '@angular/core';
import { Select, Selector, Store } from '@ngxs/store';
import {GetAllPosts  } from '@mp/app/posts/util';

@Component({
  selector: 'ms-profile-page',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage {
  constructor(
    private readonly store: Store
  ) {}
  @Selector()
  private getAllPosts(){
    return this.store.select(state => state.posts.posts)
  }

  public callAllPosts(){
    const StartingTo = "";
    console.log("🚀 ~ file: posts.page.ts:21 ~ PostsPage ~ callAllPosts ~ StartingTo:")
    this.store.dispatch(new GetAllPosts());
    
   
  }
}
