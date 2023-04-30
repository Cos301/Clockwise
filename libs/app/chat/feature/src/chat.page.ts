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

  isChatPageOpen: boolean;

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
    this.isChatPageOpen = false;
  }

  public chatPageOpen(event: any) {
    this.isChatPageOpen = true;
  }

  public CallAllChats() {
    this.store.dispatch(new GetAllChats({ chat: null }));
  }
}
