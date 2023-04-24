import { IUser } from "@mp/api/users/util"
import { Timestamp } from 'firebase-admin/firestore';

export interface IChat {
    chatId: string;
    messages: [content: string, sender: IUser, time_created: Timestamp];
    participants: IUser[];
}