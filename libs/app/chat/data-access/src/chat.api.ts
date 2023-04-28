import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';

import { IGetAllChatsRequest, IGetAllChatsResponse, } from '@mp/api/chat/util';

@Injectable()
export class ChatApi {
    constructor(
        private readonly firestore: Firestore,
        private readonly functions: Functions
    ) { }

    async GetAllChats() {
        console.log('GetAllChats in chat.api.ts');
        return await httpsCallable<IGetAllChatsRequest, IGetAllChatsResponse>(
            this.functions,
            'getAllChats'
        )();
    }
}


