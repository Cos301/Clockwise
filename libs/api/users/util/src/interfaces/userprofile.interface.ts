// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { IPost } from '@mp/api/posts/util';
import { Timestamp } from 'firebase-admin/firestore';

export interface IUserProfile {
  user_id?: string;
  username?: string;
  password?: string;
  first_name?: string;
  last_name?: string;
  email?: string | null | undefined;
  bio?: string;
  gen_score?: number;
  pfp_url?: string | null | undefined;
  posts?: IPost[];
  time_created?: Timestamp | null | undefined;
  time_remove?: Timestamp;
}
