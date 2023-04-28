import { Reference } from 'firebase-admin/database';
import { Timestamp } from 'firebase-admin/firestore';

export interface ICreateMessageRequest {
  chat_id: string;
  message_id: string;
  from: string;
  timestamp: Timestamp;
  content: string;
}
