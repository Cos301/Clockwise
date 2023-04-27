import { Component, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { EventEmitter } from 'stream';
import { CreatePostState } from '@mp/app/posts/data-access';
import { IPost } from '@mp/api/posts/util';
import { Observable } from 'rxjs';
import { ShowCreatePost } from '@mp/app/posts/util';
import { PostsState } from '@mp/app/posts/data-access';

@Component({
  selector: 'ms-profile-page',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage {
  isModalOpen!: boolean;

  constructor(
    private store: Store
  ) {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
