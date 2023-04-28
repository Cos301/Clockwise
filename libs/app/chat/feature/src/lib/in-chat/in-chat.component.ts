import { Component, Input } from '@angular/core';

@Component({
  selector: 'in-chat',
  templateUrl: './in-chat.component.html',
  styleUrls: ['./in-chat.component.scss'],
})
export class InChatComponent {
  @Input() chatHistory: any | undefined;
  currentUser = "John";


  sendMessage() {
    alert("Message sent");
  }
}
