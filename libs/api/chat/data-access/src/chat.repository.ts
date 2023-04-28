import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IChat, IMessage } from '@mp/api/chat/util';
import { IUser, IUserProfile } from '@mp/api/users/util';
import { clearGlobalAppDefaultCred } from 'firebase-admin/lib/app/credential-factory';

@Injectable()
export class ChatRepository {
  async GetAllChats(): Promise<IChat[]> {
    console.log('GetAllChats in chat.repository.ts');
    const chatsRef = admin.firestore().collectionGroup('chats');
    const chats: IChat[] = [];
    const snapshot = await chatsRef.get();
    const chatPromises = snapshot.docs.map(async (doc) => {
      const chat = doc.data() as IChat;
      const users: IUser[] = [];

      //   console.log('Jason chat.message: ', chat.messages);

      if (chat.users != null) {
        await Promise.all(
          chat.users.map(async (user) => {
            const userRef: any = user;
            const user_id = userRef._path.segments[1];
            const newUser = await admin
              .firestore()
              .collection('users')
              .doc(user_id)
              .get()
              .then(async (doc) => {
                const userData = doc.data() as IUser;
                if (userData.userProfile != null) {
                  userData.userProfile.posts = [];
                }
                console.log('Jason - test', userData);

                return userData;
              });

            if (newUser.userProfile) {
              users.push(newUser);
            }
          })
        );
      }

      const newChat: IChat = {
        chat_id: chat.chat_id,
        users: users,
        messages: chat.messages,
      };
      // console.log('Jason - newChat', newChat);

      chats.push(newChat);
    });

    await Promise.all(chatPromises);
    // console.log('Jason - chats', chats);
    return chats;
  }

  async createChat(chat: IChat) {
    return await admin
      .firestore()
      .collection('chats')
      .doc(chat.chat_id)
      .create(chat);
  }
}
