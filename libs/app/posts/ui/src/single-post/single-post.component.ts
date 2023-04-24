import { Component, Input } from '@angular/core';

@Component({
  selector: 'single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent {
  @Input() myUsername : string;
  @Input() minutesLeft: number;
  @Input() totalMinutes: 10;
  @Input() datePosted: string;
  @Input() timePosted: string;
  @Input() caption: string;
  constructor() {
    this.myUsername = "username";
    this.minutesLeft = 5;
    this.totalMinutes = 10;
    this.datePosted = "12 March";
    this.caption = "I am a caption";
    this.timePosted = "13:23";
  }
  getTimebarStyle() {
    return {
      "width":"50%",
      "height": "15px",
      "padding": "0",
      "background-color":"green"
    }
  }
}
