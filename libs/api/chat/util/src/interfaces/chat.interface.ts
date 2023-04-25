import { IUser } from '@mp/api/users/util';
// import { IMessage } from './message.interfaces'

export interface IChat {
    chat_id: string
    users: IUser[]
    // messages: IMessage[]
}