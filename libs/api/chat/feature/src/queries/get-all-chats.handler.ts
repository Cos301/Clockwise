import { ChatRepository } from '@mp/api/chat/data-access';
import {
  GetAllChatsQuery,
  IChat,
  IGetAllChatsResponse,
} from '@mp/api/chat/util';
import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';

@QueryHandler(GetAllChatsQuery)
export class GetAllChatsHandler implements IQueryHandler<GetAllChatsQuery> {
  constructor(private readonly repository: ChatRepository) {}

  async execute(query: GetAllChatsQuery) {
    console.log('GetAllChatsHandler in get-all-chats.handler.ts');
    const data = await this.repository.GetAllChats();
    // const chats: IChat[] = [];
    // data.forEach((x) => chats.push(x as IChat))
    return data;
  }
}
