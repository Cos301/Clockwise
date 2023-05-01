import { IMessage } from '../interfaces';

export interface ICreateMessageResponse {
  chatId: string;
  messages: IMessage[];
}
