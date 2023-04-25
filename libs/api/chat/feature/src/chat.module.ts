import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { ChatModule as ChatsDataAccessModule } from "@mp/api/chat/data-access";
import { ChatService } from "./chat.service";
import { GetAllChatsHandler } from "./queries";

export const QueryHandlers = [GetAllChatsHandler];

@Module({
    imports: [CqrsModule, ChatsDataAccessModule],
    providers: [ChatService, ...QueryHandlers],
    exports: [ChatService]
})
export class ChatModule { }
