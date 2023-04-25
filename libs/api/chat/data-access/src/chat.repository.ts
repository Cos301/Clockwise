import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IChat } from '@mp/api/chat/util';

@Injectable()
export class ChatRepository {
    async GetAllChats() {
        const chatsRef = admin.firestore().collectionGroup('chats');
        const data = await chatsRef.get();
        return data;
    }
}
