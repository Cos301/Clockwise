import { IChat } from '@mp/api/chat/util';

export class GetAllChats {
    static readonly type = '[Chat] GetAllChat';
    constructor() {
        console.log('GetAllChats in chat.actions.ts');
    }
}

export class SetAllChats {
    static readonly type = '[Chat] SetAllChats';
    constructor(public readonly chats: IChat[]) { }
}