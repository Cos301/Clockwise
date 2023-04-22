import { Injectable } from '@angular/core';
import {
    collection,
    doc,
    docData,
    Firestore,
    getDocs,
} from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import { firstValueFrom, from, map, Observable } from 'rxjs';
import { IChat } from '@mp/api/chat/util';

@Injectable()
export class ChatApi {
    constructor(
        private readonly firestore: Firestore,
        private readonly functions: Functions
    ) { }

    async getRecentChats$(users: string) {
        const profileRef = collection(this.firestore, 'profiles');
        const selectedChat = from(getDocs(profileRef)).pipe(
            map((querySnapshot) =>
                querySnapshot.docs
                    .filter((doc) => users.includes(doc.id))
                    .map((doc) => ({
                        user_id: doc.id,
                        username: doc.data()['username'],
                        password: doc.data()['password'],
                        profilePic: doc.data()['profilePic'],
                        email: doc.data()['email'],
                    }))
            )
        );

        const chats = await firstValueFrom(selectedChat);
    }
}

