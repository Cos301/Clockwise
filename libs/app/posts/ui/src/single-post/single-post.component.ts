import { Component, Input } from '@angular/core';
import { IPost } from '@mp/api/posts/util';
import { GetAllPosts } from '@mp/app/posts/util';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent {
  @Input() post!: IPost;
  @Select(actionsExecuting([GetAllPosts]))
  busy$!: Observable<ActionsExecuting>;
  constructor(private readonly store: Store) {

  }

  getDateCreated() {
    const date = this.post.time_created.toDate();
    return date.toString();
  }

  async getUserData() {
    console.log('Francois', 'Get user data');
    this.store.dispatch(new GetAllPosts({}));
  }

  getTimebarStyle() {
    return {
      "width":"50%",
      "height": "15px",
      "padding": "0",
      "background-color":"green"
    }
  }
}
