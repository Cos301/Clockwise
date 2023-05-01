import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IPost } from '@mp/api/posts/util';
import { IProfile } from '@mp/api/profiles/util';
import { IUser } from '@mp/api/users/util';
import { PostsState } from '@mp/app/posts/data-access';
import { GetUserData } from '@mp/app/posts/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select, Store } from '@ngxs/store';
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
  
  @Input() profileId!: string;
  posts!: IPost[];
  expired!: boolean;
  userPosts!: IPost[];
  profile!: IProfile;
  users!: IUser[];
  currUser!: IUser | undefined;
  isModalOpen!: boolean;

  constructor(private readonly store: Store, private navController: NavController) {
    this.users$.subscribe((users) => {
      this.profile$.subscribe((profile) => {
        this.profile = profile;
      });
    });

    this.posts$.subscribe((posts) => {
      this.posts = posts;
      this.userPosts = this.posts.filter((post) => post.user_id === this.profile.userId);
    });
  }

  ionViewWillEnter() {
    this.posts$.subscribe((posts) => {
      this.posts = posts;
      this.userPosts = this.posts.filter((post) => post.user_id === this.profile.userId);

    });
  }

  getUsername() {
    
    const username = this.profile?.accountDetails?.displayName;
    if (!username) {
      return this.profile.accountDetails?.email?.split('@')[0];
    }

    return username;
  }
  getPfp() {
    const pfp = this.profile?.accountDetails?.photoURL;
  return pfp;
  }

  getUserData() {
    this.store.dispatch(new GetUserData({}));
  }



}

