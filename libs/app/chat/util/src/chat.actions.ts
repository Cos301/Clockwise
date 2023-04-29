import { IChat, IGetAllChatsRequest, ICreateMessageRequest } from '@mp/api/chat/util';


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

export class CreateMessage {
    static readonly type = '[Chat] CreateMessage';
    constructor(public readonly message: ICreateMessageRequest) { 
        console.log("message created");
    }
}

export class CreateChat {
    static readonly type = '[Chat] CreateChat';
    constructor() { 
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