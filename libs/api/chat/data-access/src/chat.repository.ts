import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { IChat, IMessage } from '@mp/api/chat/util';
import { IUser } from '@mp/api/users/util';

@Injectable()
export class ChatRepository {
    async GetAllChats(): Promise<IChat[]> {
        const chatsRef = admin.firestore().collectionGroup('chats');
        const chats: IChat[] = [];
        const data = await chatsRef.get().then((snapshot) => {
            snapshot.forEach((doc) => {
                const chat = doc.data() as IChat;
                const messages: IMessage[] = [];
                chat.messages.forEach((mes) => {
                    messages.push({
                        message_id: mes.message_id,
                        from: mes.from,
                        timestamp: mes.timestamp,
                        content: mes.content,
                    });
                });
                // const users: IUser[] = [];
                // chat.users.forEach((user) => {
                //     users.push({
                //         user_id: user.user_id,
                //         username: user.username,
                //         password: user.password,
                //         first_name: user.first_name,
                //         last_name: user.last_name,
                //         email: user.email,
                //         bio: user.bio,
                //         gen_score: user.gen_score,
                //         pfp_url: user.pfp_url,
                //         posts: user.posts,
                //         time_created: user.time_created,
                //         time_remove: user.time_remove,
                //     });
                // });
                const newChat: IChat = {
                    chat_id: chat.chat_id,
                    users: chat.users,
                    messages: chat.messages,
                }
                chats.push(newChat);
            });
        });
        return chats;
    }

    async createMessage(chat: IChat, message: IMessage) {
        return await admin.firestore().collection('chats').doc(chat.chat_id).collection('messages').add(message);

    }
}
