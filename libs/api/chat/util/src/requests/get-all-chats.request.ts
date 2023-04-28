import { IChat } from '../interfaces';

export interface IGetAllChatsRequest {
    chat: IChat[] | null | undefined;
}
