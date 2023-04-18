import { Timestamp } from 'firebase-admin/firestore';
import {Comment} from './comments.interface';
import { IUser } from '@mp/api/users/util';
import { ITimeRemaining } from './timeRemaining.interface';

export interface IPost{
    post_id: string;
    caption: string;
    comments: Comment[];
    img_url: string;
    time_created: Timestamp;
    time_remaining: ITimeRemaining;
    user: IUser;
}