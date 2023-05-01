import { Component, Input } from '@angular/core';
import { IPost } from '@mp/api/posts/util';


@Component({
  selector: 'mp-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss'],
})
export class ImageContainerComponent {
  @Input() posts!: IPost[];
  expired!: boolean;

  isExpired(post: IPost): boolean {
    this.expired = false;
    const now = new Date();
    const remove: any = post.time_remove;
    const timeRemove = new Date(remove._seconds * 1000); 
    if (now > timeRemove) {
      this.expired = true;
    }
    return this.expired;
  }
}
