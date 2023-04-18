import { Timestamp } from "firebase-admin/firestore";
import { Post } from "./posts.interface";

export interface User {
    user_id: string;
    email: string;
    first_name: string;
    follwers: User[];
    following: User[];
    last_name: string;
    gen_score: number;
    password: string;
    pfp_url: string;
    posts: Post[];
    username: string;
    time_created: Timestamp;
}