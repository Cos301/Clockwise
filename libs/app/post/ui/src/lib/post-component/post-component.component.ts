import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mp-post-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss'],
})
export class PostComponentComponent {
  @Input() minutes: number;
  @Input() minutesLeft: number;
  private progress: number;
  constructor() {
    this.minutes = 10;
    this.progress = 60;
    this.minutesLeft = 5;
    this.progress = Math.trunc((this.minutesLeft/this.minutes) * 100)
  }
  getBarStyle() {
    return {
      'height': '19px',
      'padding': '1px',
      'padding-left': '5px',
      'border-radius': '9px',
      'position': 'absolute',
      'width': 'calc(' + this.progress + '% - 5px)'
    }
  }
}
