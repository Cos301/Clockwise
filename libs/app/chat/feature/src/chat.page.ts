import { Component } from '@angular/core';
import { GetAllChats } from '@mp/app/chat/util';
import { ChatState } from '@mp/app/chat/data-access';
import { Select, Selector, Store } from '@ngxs/store';
import {
  actionsExecuting,
  ActionsExecuting,
} from '@ngxs-labs/actions-executing';
import { Observable } from 'rxjs';
import { IChat } from '@mp/api/chat/util';
@Component({
  selector: 'ms-profile-page',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
  @Select(ChatState.chats) chats$!: Observable<IChat[] | null>;
  @Select(actionsExecuting([GetAllChats]))
  busy$!: Observable<ActionsExecuting>;
  //This variable is being used for test purposes
  chats!: IChat[];
  currentUser = 'John';
  // chat = [
  //   {
  //     username: 'John',
  //     message: 'Hello, how are you doing? I hope you are well',
  //     time: '12:00',
  //   },
  //   {
  //     username: 'Doe',
  //     message: 'Hi',
  //     time: '12:01',
  //   },
  //   {
  //     username: 'Doe',
  //     message: 'I am good thanks. Glad to hear are you well',
  //     time: '12:01',
  //   },
  //   {
  //     username: 'John',
  //     message: 'are currently still busy with COS301 mini_project?',
  //     time: '12:01',
  //   },
  //   {
  //     username: 'Doe',
  //     message: 'Yes I am.',
  //     time: '12:01',
  //   },
  // ];
  constructor(private readonly store: Store) {
    setTimeout(() => {
      const a = '';
    }, 2000);
    this.CallAllChats();
    this.chats$.subscribe((chats) => {
      this.chats = chats || [];
      console.log(
        '🚀 ~ file: chat.page.ts:54 ~ ChatPage ~ this.chats$.subscribe ~ this.chats:',
        this.chats
      );
    });
  }
  public CallAllChats() {
    this.store.dispatch(new GetAllChats({ chat: null }));
  }
}
