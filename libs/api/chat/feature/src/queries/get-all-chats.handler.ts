import { ChatRepository } from '@mp/api/chat/data-access';
import { GetAllChatsQuery } from '@mp/api/chat/util';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetAllChatsQuery)
export class GetAllChatsHandler implements IQueryHandler<GetAllChatsQuery> {
    constructor(private readonly repository: ChatRepository) { }

    async execute(query: GetAllChatsQuery) {
        const data = await this.repository.GetAllChats();
        return data;
    }
}
