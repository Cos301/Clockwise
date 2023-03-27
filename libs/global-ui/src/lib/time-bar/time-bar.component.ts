import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

//IMPORTANT NOTE: minutes can't go over 30

@Component({
  selector: 'mp-time-bar',
  templateUrl: './time-bar.component.html',
  styleUrls: ['./time-bar.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class TimeBarComponent implements OnInit, OnDestroy {
  @Input() startMinutes: number;
  
  //for visual elements
  private progress: number;
  private height: string;
  public lowTime: boolean;
  private expandedHeight: string; 
  private collapsedHeight: string; 
  public isExpanded: boolean;
  public showTime: boolean;
  private timerInterval: any; 
  private startDate: Date;
  private totalSeconds: number;
  private startSeconds: number;
  private endSeconds: number;

  //for timer functions
  //private subscription: Subscription;
  public currDate: Date = new Date();
  public endDate: Date = new Date();
  public minutes: number;
  public seconds: number;
  public dispMinutes: string;
  public dispSeconds: string;


  constructor() {
    //visual elements 
    this.collapsedHeight = '11px';
    this.expandedHeight = '23px';
    this.height = this.collapsedHeight;
    this.isExpanded = false;
    this.showTime = true;
    this.lowTime = false;
    this.progress = 0; 
    this.startMinutes = 1.3; 

    //set a 10 minute timer and set the progress to 100
    this.startDate = new Date(); 
    this.endDate = this.addMinutes(this.startDate, this.startMinutes);
    this.setProgress(100);
    this.minutes = 0;
    this.seconds = 0; 
    this.dispMinutes = "00";
    this.dispSeconds = "00";
    
    this.startSeconds = (this.startDate.getMinutes() * 60) + this.startDate.getSeconds();
    this.endSeconds = (this.endDate.getMinutes() * 60) + this.endDate.getSeconds();
    this.totalSeconds = this.endSeconds - this.startSeconds;
  }

  format(minutes: number, seconds: number) : void {
    let newMinutes: string = minutes.toString();
    let newSeconds: string = seconds.toString();

    if (newMinutes.length < 2)
      newMinutes = "0" + newMinutes;
    if (newSeconds.length < 2)
      newSeconds = "0" + newSeconds;

    this.dispMinutes = newMinutes;
    this.dispSeconds = newSeconds;
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

      this.format(this.minutes, this.seconds);

      this.setProgress((this.minutes * 60 + this.seconds)/this.totalSeconds * 100);
      if (this.progress <= 0) {
        clearInterval(this.timerInterval);
        this.dispMinutes = "";
        this.dispSeconds = "TIME'S UP!";
        this.showTime = false;
      }

    }, 1000)
  }

  addMinutes(date: Date, minutes: number) {
    return new Date(date.getTime() + minutes*60000);
  }

  setProgress(newVal: number) {
    this.progress = newVal;
    if (this.minutes < 1) {
      this.lowTime = true;
    }
    //update the progress bar
    this.progress = newVal;
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
