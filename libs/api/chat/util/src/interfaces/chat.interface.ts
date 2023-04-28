import { IUser } from '@mp/api/users/util';
import { IMessage } from './message.interface';

export interface IChat {
  chat_id: string;
  users: IUser[] | null | undefined;
  messages: IMessage[] | null | undefined;
}
