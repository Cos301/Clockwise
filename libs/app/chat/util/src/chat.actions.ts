import { IChat, IGetAllChatsRequest, ICreateMessageRequest, ICreateChatRequest, IMessage } from '@mp/api/chat/util';



export class GetAllChats {
    static readonly type = '[Chat] GetAllChats';
    constructor(public readonly request: IGetAllChatsRequest) {
        console.log('GetAllChats in chat.actions.ts');
    }
}

export class SetAllChats {
    static readonly type = '[Chat] SetAllChats';
    constructor(public readonly chats: IChat[]) { 
        console.log("set all chats");
    }
}
export class SetCurrentChatId {
    static readonly type = '[CurrentChatId] setCurrentChatId';
    constructor(public readonly currentChatId: string) {
        console.log("Set current chat Id");
    }
}

export class CreateMessage {
    static readonly type = '[Chat] CreateMessage';
    constructor(public readonly message: ICreateMessageRequest) { 
        console.log("message created");
    }
}

export class CreateChat {
    static readonly type = '[Chat] CreateChat';
    constructor(public readonly chat: ICreateChatRequest) { 
        console.log("chat created");
    }
}

export class SetCreatedChat {
    static readonly type = '[Chat] SetCreatedChat';
    constructor(public readonly chat: IChat | null) { }   
}

export class IncrementCounter {
    static readonly type = '[Chats] Increment Counter';
}

export class DecrementCounter {
    static readonly type = '[Chats] Decrement Counter';
}

export class SetMessages {
    static readonly type = '[Chat] SetMessages';
    constructor(public readonly messages: IMessage[]) { }
}