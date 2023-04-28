import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
    selector: 'ms-profile-page',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
  //This variable is being used for test purposes
  currentUser = "John";
  chat = [
    {
      "username" : "John",
      "message" : "Hello, how are you doing? I hope you are well",
      "time" : "12:00",
    },
    {
      "username" : "Doe",
      "message" : "Hi",
      "time" : "12:01",
    },
    {
      "username" : "Doe",
      "message" : "I am good thanks. Glad to hear are you well",
      "time" : "12:01",
    },
    {
      "username" : "John",
      "message" : "are currently still busy with COS301 mini_project?",
      "time" : "12:01",
    },
    {
      "username" : "Doe",
      "message" : "Yes I am.",
      "time" : "12:01",
    },



  ] ;
    constructor(
        private readonly store: Store
    ) { }

}
