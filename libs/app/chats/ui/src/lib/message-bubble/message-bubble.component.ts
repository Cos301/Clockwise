import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mp-message-bubble',
  templateUrl: './message-bubble.component.html',
  styleUrls: ['./message-bubble.component.scss'],
  standalone: true, 
  imports: [CommonModule]
})
export class MessageBubbleComponent {
  @Input() chatName: string;
  @Input() profilePhotoUrl: string;
  @Input() msgPreview: string;
  @Input() time: string;
  @Input() unread: boolean;
  constructor() {
    this.chatName = 'Chat Name';
    this.profilePhotoUrl = 'profile-photo.png';
    this.msgPreview = "Hi... I am a message preview and I will be displayed I want it to overflowl and displayer over two lines. Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah ";
    this.time = "14:45";
    this.unread = true;
  }
}
