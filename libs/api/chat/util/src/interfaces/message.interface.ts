import { Timestamp } from 'firebase-admin/firestore';


export interface IMessage {
  message_id: string;
  from: string;
  timestamp: Timestamp;
  content: string;
}
