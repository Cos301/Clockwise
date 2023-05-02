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
                return userData;
              });

            if (newUser.userProfile) {
              // console.log("Jason - newUser", newUser.userProfile?.user_id);
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

      console.log("Jason - newChat", newChat.chat_id, newChat.messages);
      if (newChat.users != null) {
        newChat.users.forEach((user) => {
          console.log("Jason - user", user.userProfile?.user_id);
        });
      }
      chats.push(newChat);
    });

    await Promise.all(chatPromises);
    return chats;
  }

  async createMessage(chat_id: string | null | undefined, data: IMessage) {
    if (chat_id == null) {
      return;
    }
    const chatRef = admin.firestore().collection('chats').doc(chat_id);
    return await chatRef.update({
      messages: admin.firestore.FieldValue.arrayUnion(data),
    });
  }

  async createChat(chat: IChat) {
    return await admin
      .firestore()
      .collection('chats')
      .doc(chat.chat_id)
      .create(chat);
  }
}
