import { Component } from '@angular/core';
import { actionsExecuting, ActionsExecuting } from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { CreatePostState } from '@mp/app/posts/data-access';
import { CreatePost } from '@mp/app/posts/util';
import { IPost } from '@mp/api/posts/util';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  @Select(CreatePostState.post) post$!: Observable<IPost | null>;
  @Select(actionsExecuting([CreatePost]))
  busy$!: Observable<ActionsExecuting>;
  postDataForm = {
    post_id: "dsaasd5a5648ads",
    caption: "This is a caption",
    comments: [],
    img_url: "https://www.google.com",
    time_created: new Date(),
    time_remove: new Date(),
    user_id: "asdasd5a5648ads",
  }


  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
  ) { }
  // post_id: string;
  //   caption: string;
  //   comments: IComment[];
  //   img_url: string;
  //   time_created: Timestamp;
  //   time_remove: Timestamp;
  //   user_id: string;

  

  
  public createPost() {
    console.log("🚀 ~ file: create-post.component.ts:42 ~ CreatePostComponent ~ createPost ~ CreatePost:")

    this.store.dispatch(new CreatePost());
  }
}
