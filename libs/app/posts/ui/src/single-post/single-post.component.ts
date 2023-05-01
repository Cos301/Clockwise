import { Component, Input } from '@angular/core';
import { IPost } from '@mp/api/posts/util';
import { IUser } from '@mp/api/users/util';
import { GetAllPosts } from '@mp/app/posts/util';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable, Timestamp } from 'rxjs';

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
    const user = this.users.find((user) => user.userProfile?.user_id === id);
    if (user?.userProfile) {
      //console.log('Francois',user.userProfile.username);
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
    const time: any = this.post.time_created;
    const date = new Date(time._seconds * 1000);

    const fullDate: string = date.getDay() + ' ' + this.getMonth(date.getMonth()) + ' ' + date.getFullYear();
    return fullDate;
  }

  getTimebarStyle() {
    return {
      "width":"50%",
      "height": "15px",
      "padding": "0",
      "background-color":"green"
    }
  }

  getMonth(month: number) {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return months[month];
  }

  expire(event: any) {
    console.log('Francois',event.target);
    }
}
