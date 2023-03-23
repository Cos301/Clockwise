import { Component, OnInit } from '@angular/core';
import { LargeNumberLike } from 'crypto';

@Component({
  selector: 'mp-time-bar',
  templateUrl: './time-bar.component.html',
  styleUrls: ['./time-bar.component.scss'],
})
export class TimeBarComponent implements OnInit {
  progress: number;
  height: string;
  lowTime: boolean;
  expandedHeight: string; 
  collapsedHeight: string; 
  isExpanded: boolean;

  constructor() {
    this.collapsedHeight = '11px';
    this.height = this.collapsedHeight;
    this.expandedHeight = '20px';
    this.isExpanded = false;
    this.lowTime = false;
    this.progress = 0; 
  }

  ngOnInit() {
    this.setProgress(30);
  }

  setProgress(newVal: number) : void {
    this.progress = newVal;
    if (newVal < 20) {
      this.lowTime = true;
    }
  }

  expand() {
    this.height = this.expandedHeight;
    this.isExpanded = true;
  }

  collapse() {
    this.height = this.collapsedHeight; 
    this.isExpanded = false;
  }

  getBackgroundStyle() {
    return {
      'height' : this.height
    }
  }

  getStyle() {
    return {
      'width': this.progress + '%',
      'height' : this.height
    }
  }

}
