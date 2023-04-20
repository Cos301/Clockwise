import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type PostType = {
  src: string, 
  expired: boolean
}

@Component({
  selector: 'mp-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ImageContainerComponent {
  @Input() posts : PostType[];
  constructor() {
    this.posts = [
      { 
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: false
      }, 
      { 
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: false
      }, 
      { 
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: false
      }, 
      { 
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: false
       }, 
      { 
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: false
       },
      { 
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: true
       }, 
      { 
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: true
      }, 
      { 
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: true
      }, 
      { 
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: true
      }, 
      { 
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: true
      }, 
      { 
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: true
      }, 
      { 
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: true
      },
      {
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: true
      }, 
      { 
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: true
      }, 
      {
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: true
      }, 
      {
        src: "assets/placeholderAssets/post-template.jpg", 
        expired: true
      }
    ]
  }
}
