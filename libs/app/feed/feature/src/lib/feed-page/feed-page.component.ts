import {Component, Input} from '@angular/core';

export type PostType = {
  src: string,
  expired: boolean
}
type CommentType = {
  username: string,
  comment: string
}

@Component({
  selector: 'mp-feed-page',
  templateUrl: './feed-page.component.html',
  styleUrls: ['./feed-page.component.scss'],
})
export class FeedPageComponent {

  @Input() posts : PostType[];
  @Input() myUsername: string;
  @Input() minutesLeft: number;
  @Input() datePosted: string;
  @Input() timePosted: string;
  @Input() caption: string;
  @Input() comments: CommentType[];
  @Input() totalMinutes: number;

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
    //End of post initialisation
    this.myUsername = 'Username';
    this.minutesLeft = 10;
    this.totalMinutes = 15;
    this.datePosted = '23 March 2023';
    this.timePosted = '15:05';
    this.caption = 'What an incredible view. At an amazing park in South Africa.';
    this.comments = [
      {
        username: 'Username',
        comment: 'Looks great!'
      },
      {
        username: 'Username',
        comment: 'I want to be there!'
      }
    ]
  }
}
