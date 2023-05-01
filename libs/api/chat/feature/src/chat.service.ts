import { QueryBus, CommandBus } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import {
    GetAllChatsQuery,
    IGetAllChatsRequest,
    IGetAllChatsResponse,
    ICreateMessageRequest,
    ICreateMessageResponse,
    ICreateChatRequest,
    ICreateChatResponse,
    CreateMessageCommand,
    CreateChatCommand
} from '@mp/api/chat/util';

@Injectable()
export class ChatService {
    constructor(private readonly queryBus: QueryBus, private readonly cmdbus: CommandBus) { }

    async getAllChats(
        request: IGetAllChatsRequest
    ): Promise<IGetAllChatsResponse> {
        return await this.queryBus.execute<GetAllChatsQuery, IGetAllChatsResponse>(
            new GetAllChatsQuery(request)
        );
    }

    async createMessage(request: ICreateMessageRequest): Promise<ICreateMessageResponse> {
        return await this.cmdbus.execute<CreateMessageCommand, ICreateMessageResponse>(
            new CreateMessageCommand(request)
        );
    }

    async createChat(request: ICreateChatRequest): Promise<ICreateChatResponse> {
        return await this.cmdbus.execute<CreateChatCommand, ICreateChatResponse>(
            new CreateChatCommand(request)
        );
    }

}
