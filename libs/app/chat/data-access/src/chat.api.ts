import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';

import { IGetAllChatsRequest, IGetAllChatsResponse, ICreateChatRequest, ICreateChatResponse, ICreateMessageRequest, ICreateMessageResponse} from '@mp/api/chat/util';

@Injectable()
export class ChatApi {
    constructor(
        private readonly firestore: Firestore,
        private readonly functions: Functions
    ) { }

    async getAllChats(request : IGetAllChatsRequest) {
        return await httpsCallable<IGetAllChatsRequest, IGetAllChatsResponse>(
            this.functions,
            'getAllChats'
        )(request);
    }

    async createChat(request : ICreateChatRequest) {
        return await httpsCallable<ICreateChatRequest, ICreateChatResponse>(
            this.functions,
            'createChat'
        )(request);
    }

    async createMessage(request : ICreateMessageRequest) {
        return await httpsCallable<ICreateMessageRequest, ICreateMessageResponse>(
            this.functions,
            'createMessage'
        )(request);
    }
}
