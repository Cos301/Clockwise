import { IPost } from "@mp/api/posts/util";
import { AggregateRoot } from "@nestjs/cqrs";
import { Timestamp } from "firebase-admin/firestore";

export interface IUserProfile {
    user_id: string;
    username: string | null | undefined;
    password: string | null | undefined;
    first_name: string | null | undefined;
    last_name: string | null | undefined;
    email: string | null | undefined;
    bio: string | null | undefined;
    gen_score: number | null | undefined;
    pfp_url: string | null | undefined;
    posts: IPost[] | null | undefined;
    time_created: Timestamp | null | undefined;
    time_remove: Timestamp | null | undefined;
}