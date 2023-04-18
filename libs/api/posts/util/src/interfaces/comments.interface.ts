import { Timestamp } from 'firebase-admin/firestore';
import { User } from './user.interface';

export interface Comment {
    comment_id: string;
    text: string;
    time_created: Timestamp;
    user_ref: User;
}