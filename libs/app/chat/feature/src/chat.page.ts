import { Component } from '@angular/core';
import { GetAllChats } from '@mp/app/chat/util';
import { ChatState } from '@mp/app/chat/data-access';
import { Select, Selector, Store } from '@ngxs/store';
import {
  actionsExecuting,
  ActionsExecuting,
} from '@ngxs-labs/actions-executing';
import { Observable } from 'rxjs';
import { IChat,  IMessage  } from '@mp/api/chat/util';

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
  currentChatMessages: IMessage[] | null | undefined;

  isChatPageOpen: boolean;
  searchQuery: string;

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
    this.searchQuery = "";
  }

  public populateChatPage(messages: IMessage[] | null | undefined) {
    //set the state of the messages
    console.log('here are the messages: ', messages);

    if (messages) 
      this.currentChatMessages = messages;
     
    
    this.isChatPageOpen = true;
  }

  public CallAllChats() {
    this.store.dispatch(new GetAllChats({ chat: null }));
  }

  public test(chat: any) : boolean {
    
    const name = chat.users[1]?.userProfile.first_name + " " + chat.users[0]?.userProfile.last_name;
    console.log("Jesse is here: ", chat , name, " query: ", this.searchQuery)
    if (name.toUpperCase().indexOf(this.searchQuery.toUpperCase()) !== -1)
      return true;
      
    return false;
  }

  clearText() {
    this.searchQuery = "";
  }
  hasChanged(e: Event) {
    const target = e.target as HTMLInputElement;
    this.searchQuery = target.value;
  }

}
