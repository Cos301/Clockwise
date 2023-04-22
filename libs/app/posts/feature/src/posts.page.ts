import { Component } from '@angular/core';
import { Select, Selector, Store } from '@ngxs/store';
import {GetAllPosts  } from '@mp/app/posts/util';
import {
  ActionsExecuting,
  actionsExecuting
} from '@ngxs-labs/actions-executing';

@Component({
  selector: 'ms-profile-page',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage {
  constructor(
    private readonly store: Store
  ) {}
  
}
