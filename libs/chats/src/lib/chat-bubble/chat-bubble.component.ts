import { Component, Input } from '@angular/core';

@Component({
  selector: 'mp-chat-bubble',
  templateUrl: './chat-bubble.component.html',
  styleUrls: ['./chat-bubble.component.scss'],
})
export class ChatBubbleComponent {
  @Input() chatName: string;
  @Input() profilePhotoUrl: string;
  @Input() msgPreview: string;
  @Input() time: string;
  @Input() unreadCount: number;
  constructor() {
    this.chatName = 'Chat Name>';
    this.profilePhotoUrl = 'profile-photo.png';
    this.msgPreview = "Hi... I am a message preview and I will be displayed I want it to overflowl and displayer over two lines. Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah  Blah ";
    this.time = "14:45";
    this.unreadCount = 1;
  }
}
