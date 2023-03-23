import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'mp-time-bar',
  templateUrl: './time-bar.component.html',
  styleUrls: ['./time-bar.component.scss'],
})
export class TimeBarComponent implements OnInit, OnDestroy {
  
  //for visual elements
  private progress: number;
  private height: string;
  private lowTime: boolean;
  private expandedHeight: string; 
  private collapsedHeight: string; 
  private isExpanded: boolean;
  private timerInterval: any; 

  //for timer functions
  //private subscription: Subscription;
  public currDate: Date = new Date();
  public endDate: Date = new Date();
  public minutes: number;
  public seconds: number;

  constructor() {
    //visual elements 
    this.collapsedHeight = '11px';
    this.expandedHeight = '23px';
    this.height = this.collapsedHeight;
    this.isExpanded = false;
    this.lowTime = false;
    this.progress = 0; 

    //set a 10 minute timer and set the progress to 100
    this.endDate = this.addMinutes(new Date(), 10);
    this.setProgress(100);
    this.minutes = 10;
    this.seconds = 0; 
  }


  ngOnInit() {
    console.log(this.endDate);

    this.timerInterval = setInterval(() => {
      const currTime = new Date();
      const timeLeft = new Date(); 
      timeLeft.setMinutes(this.endDate.getMinutes() - currTime.getMinutes());
      timeLeft.setSeconds(this.endDate.getSeconds() - currTime.getSeconds());

      //update the timer
      this.minutes = timeLeft.getMinutes();  
      this.seconds = timeLeft.getSeconds();
    }, 300)
  }

  addMinutes(date: Date, minutes: number) {
    date.setMinutes(date.getMinutes() + minutes);
    return date;
  }

  setProgress(newVal: number) {
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

  ngOnDestroy(): void {
      console.log('destroy me!!!');
  }

}
