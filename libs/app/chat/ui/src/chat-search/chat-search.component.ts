import { Component } from '@angular/core';

@Component({
  selector: 'mp-chat-search',
  templateUrl: './chat-search.component.html',
  styleUrls: ['./chat-search.component.scss'],
})
export class ChatSearchComponent {
  searchQuery="";
  constructor() {
    this.searchQuery = "";
  }
  clearText() {
    this.searchQuery = "";
  }
  hasChanged(e: Event) {
    const target = e.target as HTMLInputElement;
    this.searchQuery = target.value;
  }
}
