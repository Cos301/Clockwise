import { Timestamp } from 'firebase-admin/firestore';
import {Comment} from './comments.interface';
import { User } from './user.interface';

export interface Post{
    post_id: string;
    caption: string;
    comments: Comment[];
    img_url: string;
    time_created: Timestamp;
    time_remaining: Map<string, number>;
    user_id: User;
}