import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-profile-page',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  isModalOpen!: boolean;

  constructor(
    private store: Store
  ) {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
