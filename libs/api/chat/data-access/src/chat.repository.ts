import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IChat, IMessage } from '@mp/api/chat/util';
import { IUser, IUserProfile } from '@mp/api/users/util';

@Injectable()
export class ChatRepository {
  async GetAllChats(): Promise<IChat[]> {
    console.log('GetAllChats in chat.repository.ts');
    const chatsRef = admin.firestore().collectionGroup('chats');
    const chats: IChat[] = [];
    const snapshot = await chatsRef.get();
    const chatPromises = snapshot.docs.map(async (doc) => {
      const chat = doc.data() as IChat;
      const users: IUserProfile[] = [];

      await Promise.all(
        chat.messages.map(async (mes) => {
          const userRef: any = mes.from;
          const user_id = userRef._path.segments[1];

          return {
            message_id: mes.message_id,
            from: user_id,
            timestamp: mes.timestamp,
            content: mes.content,
          };
        })
      );

      await Promise.all(
        chat.users.map(async (user) => {
          const userRef: any = user;
          const user_id = userRef._path.segments[1];
          const newUser = await admin.firestore().collection('users').doc(user_id).get().then(async (doc) => {
            const userData = doc.data() as IUserProfile;
            const user: IUserProfile = {
              user_id: userData.user_id,
              username: userData.username,
              password: userData.password,
              first_name: userData.first_name,
              last_name: userData.last_name,
              email: userData.email,
              bio: userData.bio,
              gen_score: userData.gen_score,
              pfp_url: userData.pfp_url,
              posts: userData.posts,
              time_created: userData.time_created,
              time_remove: userData.time_remove,
            }
            return user;
          });
          users.push(newUser);
        }));

      const newChat: IChat = {
        chat_id: chat.chat_id,
        users: chat.users,
        messages: chat.messages,
      };

      chats.push(newChat);
    });

    await Promise.all(chatPromises);

    return chats;
  }

  async createMessage(chat: IChat, message: IMessage) {
    return await admin
      .firestore()
      .collection('chats')
      .doc(chat.chat_id)
      .collection('messages')
      .add(message);
  }
}
