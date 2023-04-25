import { Timestamp } from 'firebase-admin/firestore';
import { IComment } from './comments.interface';
import { IUser } from '@mp/api/users/util';

export interface IPost{
    post_id: string;
    caption: string;
    comments: IComment[];
    img_url: string;
    time_created: Timestamp;
    time_remove: Timestamp;
    user: IUser;
    

}