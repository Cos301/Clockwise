import { Timestamp } from 'firebase-admin/firestore';

export interface IAuth {
  // id: string;
  // email?: string | null | undefined;
  // displayName?: string | null | undefined;
  // photoURL?: string | null | undefined;
  // phoneNumber?: string | null | undefined;
  // customClaims?: { [key: string]: any } | null | undefined;
  // password?: string | null | undefined;
  // created?: Timestamp | null | undefined;
    user_id: string;
    email: string;
    first_name: string;
    last_name: string;
    gen_score: number;
    password: string;
    pfp_url: string;
    username: string;
    time_created: Timestamp;
}
