import { Timestamp } from 'firebase-admin/firestore';

export interface IComment {
  comment_id: string;
  text: string;
  time_created: Timestamp;
  user_id: string;
}
