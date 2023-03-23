import { Component, Input } from '@angular/core';

@Component({
  selector: 'mp-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.scss'],
})
export class ChatHeaderComponent {
  @Input() chatName: string;
  @Input() profilePhotoUrl: string;
  @Input() msgPreview: string;
  @Input() time: string;
  @Input() unreadCount: number;
  constructor() {
    this.chatName = '<Chat Name>';
    this.profilePhotoUrl = 'profile-photo.png';
    this.msgPreview = "Hi... I am a message preview and I will be displayed..... I want it to overflowl.................";
    this.time = "14:45";
    this.unreadCount = 1;
  }
  
}
