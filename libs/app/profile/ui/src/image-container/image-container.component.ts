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
}
