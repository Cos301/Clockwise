import { Timestamp } from 'firebase-admin/firestore';

export interface ICreateMessageRequest {
  chat_id: string | null | undefined;
  message: {
    message_id: string | null | undefined;
    from: string | null | undefined;
    timestamp: Timestamp | null | undefined;
    content: string | null | undefined;
  }
}
