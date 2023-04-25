import { IChat } from '../interfaces'
import { IGetAllChatsRequest } from '../requests';

export class GetAllChatsQuery {
    constructor(public readonly request: IGetAllChatsRequest) { }
}

