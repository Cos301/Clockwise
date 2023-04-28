import { Component, Input } from '@angular/core';
import { IPost } from '@mp/api/posts/util';
import { IUser } from '@mp/api/users/util';
import { GetAllPosts, GetUserData } from '@mp/app/posts/util';
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
  @Input() users!: IUser[];
  @Select(actionsExecuting([GetAllPosts]))
  busy$!: Observable<ActionsExecuting>;
  constructor(private readonly store: Store) {
  }

  getUsername(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (user?.userProfile) {
      return user.userProfile.username;
    }
    return '';
  }

  getPfp(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (user?.userProfile) {
      return user.userProfile.pfp_url;
    }
    return '';
  }

  getDateCreated() {
    const date = this.post.time_created.toDate();
    return date.toString();
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
