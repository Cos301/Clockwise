import { Component, EventEmitter, Output } from '@angular/core';
import { actionsExecuting, ActionsExecuting } from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { CreatePostState } from '@mp/app/posts/data-access';
import { CreatePost, DecrementCounter, IncrementCounter } from '@mp/app/posts/util';
import { IPost } from '@mp/api/posts/util';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent {
  @Select(CreatePostState.post) post$!: Observable<IPost | null>;
  @Select(actionsExecuting([CreatePost]))
  busy$!: Observable<ActionsExecuting>;
  @Select(CreatePostState.count) count$!: Observable<CreatePostState>;
  
  @Output() close = new EventEmitter();
  

  createPostForm = this.fb.group({
    postLife: [10, [Validators.minLength(1), Validators.maxLength(24)]],
    caption: ['', [Validators.minLength(5), Validators.maxLength(100)]],
    img_url: ['example_image.com', [Validators.minLength(1), Validators.maxLength(300)]],
    fileSource: new FormControl('', [Validators.required])
  });

  
  
  // postDataForm = {
  //   post_id: "dsaasd5a5648ads",
  //   caption: "This is a caption",
  //   comments: [],
  //   img_url: "https://www.google.com",
  //   time_created: Timestamp.fromDate(new Date()),
  //   time_remove: new Date(),
  //   user_id: "asdasd5a5648ads",
  // }

  public file: File | null = null;
  public count: number;
  public imageSrc: string | null;


  // eslint-disable-next-line @typescript-eslint/ban-types
  onChange: Function | null = null;

  postLife: number;
  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
  ) { 
    this.postLife = 10;
    this.count = 1;
    this.imageSrc = null;
  }
  // post_id: string;
  //   caption: string;
  //   comments: IComment[];
  //   img_url: string;
  //   time_created: Timestamp;
  //   time_remove: Timestamp;
  //   user_id: string;

  onFileChange(event : any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;

        this.createPostForm.patchValue({
          fileSource: reader.result as string
        })
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  registerOnChange( fn: Function) {
    this.onChange = fn;
  }

  public cancel() {
    this.close.emit();
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
    this.createPostForm
    this.store.dispatch(new CreatePost());
  }
}
