import { Timestamp } from "firebase-admin/firestore";
import { Reference } from "firebase-admin/database";

export interface IMessage {
    message_id: string;
    from: Reference;
    timestamp: Timestamp;
    content: string;
}