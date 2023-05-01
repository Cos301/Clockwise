import { Component } from '@angular/core';
import { IPost } from '@mp/api/posts/util';
import { IProfile } from '@mp/api/profiles/util';
import { IUser, IUserProfile } from '@mp/api/users/util';
import { PostsState } from '@mp/app/posts/data-access';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-profile-page',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  @Select(PostsState.posts) posts$!: Observable<IPost[]>;
  @Select(PostsState.user) users$!: Observable<IUser[]>;
  @Select(ProfileState.profile) profile$!: Observable<IProfile>;
  posts!: IPost[];
  expired!: boolean;
  userPosts!: any;
  profile!: IProfile;
  users!: IUser[];
  currUser!: IUser | undefined;

  constructor() {
    this.posts$.subscribe((posts) => {
      this.posts = posts;
      this.userPosts = this.posts.filter((post) => post.user_id === this.profile.userId);
    });
  }

  async getUsername() {
    this.users$.subscribe((users) => {

      this.profile$.subscribe((profile) => {
        this.profile = profile;
        console.log('Francois: ', users);
        this.currUser = users.find((user) => user.id === this.profile.userId);
        console.log('Francois - currUser: ', this.currUser);
      });
    });
  }

}

