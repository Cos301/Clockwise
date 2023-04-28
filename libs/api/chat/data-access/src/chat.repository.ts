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


            // await Promise.all(
            //     chat.messages.map(async (mes) => {
            //         const userRef: any = mes.from;
            //         const user_id = userRef._path.segments[1];
            //         const newMessage: IMessage = {
            //             message_id: mes.message_id,
            //             from: user_id,
            //             timestamp: mes.timestamp,
            //             content: mes.content,
            //         };
            //         return newMessage;
            //     }));
            console.log('Jason chat.message: ', chat.messages);

            await Promise.all(
                chat.users.map(async (user) => {
                    const userRef: any = user;
                    const user_id = userRef._path.segments[1];
                    const newUser = await admin.firestore().collection('users').doc(user_id).get().then(async (doc) => {
                        const userData = doc.data() as IUser;
                        // if (userData.userProfile != null && userData.userProfile != undefined) {
                        //     const user = {
                        //         user_id: userData.userProfile.user_id,
                        //         username: userData.userProfile.username,
                        //         password: userData.userProfile.password,
                        //         first_name: userData.userProfile.first_name,
                        //         last_name: userData.userProfile.last_name,
                        //         email: userData.userProfile.email,
                        //         bio: userData.userProfile.bio,
                        //         gen_score: userData.userProfile.gen_score,
                        //         pfp_url: userData.userProfile.pfp_url,
                        //         posts: [],
                        //         time_created: userData.userProfile.time_created,
                        //         time_remove: userData.userProfile.time_remove,
                        //     }
                        // console.log('Jason - test', user);
                        //     return user;
                        // }
                        // console.log('Jason - test', userData);

                        return userData;
                    });

                    // const usersProf =

                    if (newUser.userProfile) {
                        users.push(newUser);
                    }
                }));

            const newChat: IChat = {
                chat_id: chat.chat_id,
                users: users,
                messages: chat.messages,
            };
            // console.log('Jason - newChat', newChat);

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
