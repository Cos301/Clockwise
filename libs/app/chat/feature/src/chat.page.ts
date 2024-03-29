import { Component } from '@angular/core';
import { GetAllChats, SetCurrentChatId } from '@mp/app/chat/util';
import { ChatState } from '@mp/app/chat/data-access';
import { Select, Selector, Store } from '@ngxs/store';
import {
  actionsExecuting,
  ActionsExecuting,
} from '@ngxs-labs/actions-executing';
import { Observable } from 'rxjs';
import { IChat, IMessage } from '@mp/api/chat/util';
import { AuthState } from '@mp/app/auth/data-access';

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
  currentUser = this.store.selectSnapshot(AuthState.user)?.displayName;
  currentChatMessages: IMessage[] | null | undefined;

  isChatPageOpen: boolean;
  isNewChatOpen: boolean;
  searchQuery: string;

  constructor(private readonly store: Store) {
    console.log('Jason current user', this.currentUser);
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
    this.isNewChatOpen = false;
    this.searchQuery = '';
  }

  public populateChatPage(
    messages: IMessage[] | null | undefined,
    chatId: string
  ) {
    //set the state of the messages
    console.log('here are the messages: ', messages);
    this.store.dispatch(new SetCurrentChatId(chatId));
    if (messages) this.currentChatMessages = messages;

    this.isChatPageOpen = true;
  }

  public CallAllChats() {
    this.store.dispatch(new GetAllChats({ chat: null }));
  }

  // public personList(): IUser[] {
  //get a list of users to choose who to start a chat with
  // }

  public closeModal() {
    console.log('Calling close in parent');
    this.isChatPageOpen = false;
  }

  //searching the chat
  public test(chat: any): boolean {
    const user_id = this.getUserId();
    let name = '';
    if (chat.users[0]?.userProfile.user_id === user_id) {
      name =
        chat.users[1]?.userProfile.first_name +
        ' ' +
        chat.users[1]?.userProfile.last_name;
    } else {
      name =
        chat.users[0]?.userProfile.first_name +
        ' ' +
        chat.users[0]?.userProfile.last_name;
    }
    // console.log('user 0: ', chat.users[0]?.userProfile.first_name);
    // console.log('user 1: ', chat.users[1]?.userProfile.first_name);
    // console.log('name: ', name);

    if (name.toUpperCase().indexOf(this.searchQuery.toUpperCase()) !== -1)
      return true;

    return false;
  }

  getUserId(): string {
    const user_id = this.store.selectSnapshot(AuthState.user)?.uid;
    if (user_id)
    return user_id;
    else return '';
  }
  
  public newChat() {
    //make a call to the api to get the chat list....

    return false;
  }

  public testList(chat: any): boolean {
    const user_id = this.store.selectSnapshot(AuthState.user)?.uid;

    let inChat = false;
    chat.users.forEach((user: any) => {
      if (user.userProfile.user_id === user_id) {
        inChat = true;
      }
    });
    return inChat;
  }

  clearText() {
    this.searchQuery = '';
  }
  hasChanged(e: Event) {
    const target = e.target as HTMLInputElement;
    this.searchQuery = target.value;
  }
}
