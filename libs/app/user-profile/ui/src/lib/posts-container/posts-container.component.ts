import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type PostType = {
  src: string, 
  expired: boolean
}

@Component({
  selector: 'mp-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss'],
  standalone: true, 
  //used for ngFor
  imports: [CommonModule]
})
export class PostsContainerComponent {
  @Input() posts : PostType[];
  constructor() {
    this.posts = [
      { 
        src: "post-template.jpg", 
        expired: false
      }, 
      { 
        src: "post-template.jpg", 
        expired: false
      }, 
      { 
        src: "post-template.jpg", 
        expired: false
      }, 
      { 
        src: "post-template.jpg", 
        expired: false
       }, 
      { 
        src: "post-template.jpg", 
        expired: false
       },
      { 
        src: "post-template.jpg", 
        expired: true
       }, 
      { 
        src: "post-template.jpg", 
        expired: true
      }, 
      { 
        src: "post-template.jpg", 
        expired: true
      }, 
      { 
        src: "post-template.jpg", 
        expired: true
      }
    ]
  }
}
