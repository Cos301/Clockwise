import { Component, Input } from '@angular/core';

type PostType = {
  src: string
}

@Component({
  selector: 'mp-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss'],
})
export class PostsContainerComponent {
  @Input() posts : PostType[];
  constructor() {
    this.posts = [
      { src: "post-template.jpg" }, 
      { src: "post-template.jpg" }, 
      { src: "post-template.jpg" }, 
      { src: "post-template.jpg" }, 
      { src: "post-template.jpg" },
      { src: "post-template.jpg" }, 
      { src: "post-template.jpg" }, 
      { src: "post-template.jpg" }, 
      { src: "post-template.jpg" }
    ]
  }
}
