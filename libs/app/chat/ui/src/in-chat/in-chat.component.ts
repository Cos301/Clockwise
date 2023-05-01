import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IChat, ICreateChatRequest, ICreateMessageRequest, IMessage } from '@mp/api/chat/util';
import { Select, Store } from '@ngxs/store';
import { AuthState } from '@mp/app/auth/data-access';
import { ProfileState } from '@mp/app/profile/data-access';
import { Location } from '@angular/common';
import { Timestamp } from '@angular/fire/firestore';
import { CreateChat, CreateMessage, GetAllChats, IncrementCounter, SetCurrentChatId } from '@mp/app/chat/util';
import { Observable } from 'rxjs';
import { actionsExecuting, ActionsExecuting } from '@ngxs-labs/actions-executing';
import { ChatState } from '@mp/app/chat/data-access';
import { MessageBubbleComponent } from '../message-bubble/message-bubble.component';



@Component({
  selector: 'mp-in-chat',
  templateUrl: './in-chat.component.html',
  styleUrls: ['./in-chat.component.scss']
})
export class InChatComponent {
  @Select(ChatState.currentChatId) currentChatId$!: Observable<string | null>;
  @Select(ChatState.chats) chats$!: Observable<IChat[] | null | undefined>;
  @Select(actionsExecuting([SetCurrentChatId])) busy$!: Observable<ActionsExecuting>;
  // @Input() chatHistory: IMessage[] | null | undefined;
  @Input() chat!: IChat[];
  @Input() currentUser!: string | null | undefined;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  messageContent = "";

  chatId!: string | null;
  chats!: IChat[] | null | undefined;
  chatHistory!: IMessage[] | null | undefined;
  constructor(private readonly store: Store, private location: Location) {
    this.currentChatId$.subscribe((chatId) => {
      this.chatId = chatId;
    });
    this.chats$.subscribe((chats) => {
      this.chats = chats;
      this.chatHistory = chats?.find((chat) => chat.chat_id === this.chatId)?.messages;
    })
    console.log('Chat history: ', this.chatHistory);

  }


  createChat() {
    console.log('createChat');
    const chatObj: IChat = {
      chat_id: "15",
      users: [],
      messages: [],
    };
    const req: ICreateChatRequest = {
      chat: chatObj,
    }

    this.store.dispatch(new CreateChat(req));
  }

  public getTime(timestamp: any) {

    const minutes = Math.floor(timestamp._seconds / 36000000);
    const hours = Math.floor(timestamp._nanoseconds / 36000000);

    return hours + ":" + minutes;
  }

  async sendMessage() {
    const req: ICreateMessageRequest = {
      chat_id: this.chatId,
      message: {
        message_id: "ASDsda21ddGSALMKds13adSD@",
        from: this.store.selectSnapshot(AuthState.user)?.uid,
        timestamp: Timestamp.now(),
        content: this.messageContent,
      }
    }

    if (this.messageContent != "") {
      console.log('wilco chat id:', this.chatId);

      this.store.dispatch(new CreateMessage(req));
      console.log('sent Message: ', req.message.message_id);
      this.store.dispatch(new GetAllChats({ chat: null }));
      this.store.dispatch(new GetAllChats({ chat: null }));
      this.store.dispatch(new GetAllChats({ chat: null }));

      this.messageContent = "";
    }
  }

  getCurrentUserId() {
    return this.store.selectSnapshot(AuthState.user)?.uid
  }

  goBack() {
    //set the location to /home
    this.closeModal.emit();
    console.log('Calling close in child');
  }
}
