import { Component, Input } from '@angular/core';

@Component({
  selector: 'single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent {
  @Input() myUsername : string;
  @Input() minutesLeft: number;
  @Input() datePosted: string;
  @Input() timePosted: string;
  constructor() {
    this.myUsername = "username";
    this.minutesLeft = 10;
    this.datePosted = "12 March";
    this.timePosted = "13:23";
  }
}
