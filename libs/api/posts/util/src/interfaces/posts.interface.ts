import { Timestamp } from 'firebase-admin/firestore';
import { Comment } from './comments.interface';

export interface IPost{
    post_id: string;
    caption: string;
    comments: Comment[];
    img_url: string;
    time_created: Timestamp;
    time_remove: Timestamp;
    user_id: string;
}