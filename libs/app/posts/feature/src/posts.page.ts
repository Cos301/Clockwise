import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'ms-profile-page',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage {
  creatPostShown: boolean;
  public callBack: any;

  constructor(
    private readonly store: Store
  ) {
    this.creatPostShown = false;
    this.callBack = null;
  }

  public ngOnInit() {
    this.callBack = this.hideCreatePost.bind(this);
  }

  showCreatePost(): void {
    this.creatPostShown = true;
  }

  hideCreatePost(): void {
    this.creatPostShown = false;
  }
  
}
