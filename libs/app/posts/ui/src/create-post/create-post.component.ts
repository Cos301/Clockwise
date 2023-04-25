import { Component, HostListener } from '@angular/core';
import { actionsExecuting, ActionsExecuting } from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { CreatePostState, PostStateModel } from '@mp/app/posts/data-access';
import { CreatePost, DecrementCounter, IncrementCounter } from '@mp/app/posts/util';
import { IPost } from '@mp/api/posts/util';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  @Select(CreatePostState.post) post!: Observable<IPost | null>;
  @Select(CreatePostState) count$!: Observable<PostStateModel>;

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

  public file: File | null = null;
  public count: number;


  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: Function | null = null;

  postLife: number;
  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
  ) { 
    this.postLife = 10;
    this.count = 1;
  }
  // post_id: string;
  //   caption: string;
  //   comments: IComment[];
  //   img_url: string;
  //   time_created: Timestamp;
  //   time_remove: Timestamp;
  //   user_id: string;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
      const file = event && event.item(0);
      if (this.onChange)
        this.onChange(file);
      this.file = file;
    }

  // eslint-disable-next-line @typescript-eslint/ban-types
  registerOnChange( fn: Function) {
    this.onChange = fn;
  }
  
  public increment() {
    this.count++;
    this.store.dispatch(new IncrementCounter());
  }

  public decrement() {
    this.count--;
    this.store.dispatch(new DecrementCounter());
  }
  
  public createPost() {
    console.log("🚀 ~ file: create-post.component.ts:42 ~ CreatePostComponent ~ createPost ~ CreatePost:")

    this.store.dispatch(new CreatePost());
  }
}
