import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';

import {
  IGetAllChatsRequest,
  IGetAllChatsResponse,
  ICreateChatRequest,
  ICreateChatResponse,
  ICreateMessageRequest,
  ICreateMessageResponse,
} from '@mp/api/chat/util';

@Injectable()
export class ChatApi {
  constructor(
    private readonly firestore: Firestore,
    private readonly functions: Functions
  ) {}

  async getAllChats(request: IGetAllChatsRequest) {
    console.log('getAllChats callable');
    return await httpsCallable<IGetAllChatsRequest, IGetAllChatsResponse>(
      this.functions,
      'getAllChats'
    )(request);
  }

  async createChat(request: ICreateChatRequest) {
    console.log('createChat callable');
    return await httpsCallable<ICreateChatRequest, ICreateChatResponse>(
      this.functions,
      'createChat'
    )(request);
  }

  async createMessage(request: ICreateMessageRequest) {
    console.log('createMessage callable');
    return await httpsCallable<ICreateMessageRequest, ICreateMessageResponse>(
      this.functions,
      'createMessage'
    )(request);
  }
}
