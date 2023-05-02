import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IPost } from '@mp/api/posts/util';
import { IProfile } from '@mp/api/profiles/util';
import { IUser } from '@mp/api/users/util';
import { PostsState } from '@mp/app/posts/data-access';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  @Select(PostsState.posts) posts$!: Observable<IPost[]>;
  @Select(PostsState.user) users$!: Observable<IUser[]>;
  @Select(ProfileState.profile) profile$!: Observable<IProfile>;
  @Input() profileId = '2';

  @Output() public close = new EventEmitter();
  
  posts!: IPost[];
  expired!: boolean;
  userPosts!: IPost[];
  profile!: IProfile;
  users!: IUser[];
  currUser!: IUser | undefined;
  isModalOpen!: boolean;
  username!: string | undefined | null;
  pfp!: string | undefined | null;

  constructor(private readonly store: Store, private navController: NavController) {
    this.users$.subscribe((users) => {
      this.profile$.subscribe((profile) => {
        this.profile = profile;
      });

      this.users$.subscribe((users) => {
        this.users = users;
        this.currUser = this.users.find((user) => user.id === this.profileId);
        this.username = this.currUser?.userProfile?.username;
        this.pfp = this.currUser?.userProfile?.pfp_url;
        console.log('Francois', this.profileId);
      });
    });

    this.posts$.subscribe((posts) => {
      this.posts = posts;
      this.userPosts = this.posts.filter((post) => post.user_id === this.profileId);
      console.log('Francoi - this.userPosts',this.userPosts);
    });
  }

  ionViewWillEnter() {
    this.posts$.subscribe((posts) => {
      this.posts = posts;
      this.userPosts = this.posts.filter((post) => post.user_id === this.profileId);

    });
  }

  public openModal() {
    this.isModalOpen = true;
  }

  public closeModal() {
    this.isModalOpen = false;
    this.close.emit();
  }
}
