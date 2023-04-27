import { Reference } from "firebase-admin/database";
import { Timestamp } from "firebase-admin/firestore";

export interface ICreateMessageRequest {
    message_id: string;
    from: Reference;
    timestamp: Timestamp;
    content: string;
}