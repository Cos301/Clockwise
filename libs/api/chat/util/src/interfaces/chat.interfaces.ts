import { IUser } from "@mp/api/users/util"
import { Timestamp } from 'firebase-admin/firestore';

export interface IChat {
    chat_id: string;
    messages: {content: string, sender: IUser, time_created: Timestamp}[];
    participants: IUser[];
}