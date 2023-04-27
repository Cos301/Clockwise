import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

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
