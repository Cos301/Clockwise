import { Timestamp } from 'firebase-admin/firestore';
import {IPost} from '@mp/api/posts/util';

export interface IUser {
    user_id: string;
    email: string;
    first_name: string;
    followers: IUser[];
    following: IUser[];
    last_name: string;
    gen_score: number;
    password: string;
    pfp_url: string;
    posts: IPost[];
    username: string;
    time_created: Timestamp;
}