import { IPost } from "@mp/api/posts/util";
import { AggregateRoot } from "@nestjs/cqrs";
import { Timestamp } from "firebase-admin/firestore";

// export interface IUserProfile {
//     user_id: string;
//     username: string;
//     password: string;
//     first_name: string;
//     last_name: string;
//     email: string;
//     bio: string;
//     gen_score: number;
//     pfp_url: string;
//     posts: IPost[];
//     time_created: Timestamp;
//     time_remove: Timestamp;
// }