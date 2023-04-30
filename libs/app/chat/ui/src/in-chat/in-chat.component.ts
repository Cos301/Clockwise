import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'mp-in-chat',
  templateUrl: './in-chat.component.html',
  styleUrls: ['./in-chat.component.scss']
})
export class InChatComponent {
  @Input() chatHistory: any | undefined;
  currentUser = "John";


  sendMessage() {
    alert("Message sent");
  }

  constructor(private location: Location) {
  }

  goBack() {
    //set the location to /home
    this.location.go('/home/chat');

  }
}
