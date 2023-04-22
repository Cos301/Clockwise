import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { IChat } from '@mp/api/chat/util';
import { ChatApi } from './chat.api';
import { IGetChatRequest } from '@mp/api/chat/util';

export interface ChatStateModel {
    recent_chats: Promise<IChat[]>;
}

@State<ChatStateModel>({
    name: 'chat',
    defaults: {
        recent_chats: Promise.resolve([]),
    },
})
@Injectable()
export class ChatState {
    constructor(
        private readonly chatApi: ChatApi,
        private readonly store: Store
    ) { }

    @Selector()
    static chats(state: ChatStateModel) {
        return state.recent_chats;
    }

    @Action(IGetChatRequest)
    async setChats(ctx: StateContext<ChatStateModel>, { profile }: SetChats) {
        ctx.patchState({ recent_chats: this.chatApi.getRecentChats$("") });
    }
}

