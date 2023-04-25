import { QueryBus } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import {
    GetAllChatsQuery,
    IGetAllChatsRequest,
    IGetAllChatsResponse,
} from '@mp/api/chat/util';

@Injectable()
export class ChatService {
    constructor(private readonly queryBus: QueryBus) { }

    async getAllPosts(
        request: IGetAllChatsRequest
    ): Promise<IGetAllChatsResponse> {
        return await this.queryBus.execute<GetAllChatsQuery, IGetAllChatsResponse>(
            new GetAllChatsQuery(request)
        );
    }
}
