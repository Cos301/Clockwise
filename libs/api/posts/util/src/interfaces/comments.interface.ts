import { Timestamp } from 'firebase-admin/firestore';
import { IUser } from '@mp/api/users/util';

export interface Comment {
    comment_id: string;
    text: string;
    time_created: Timestamp;
    user_ref: IUser;
}