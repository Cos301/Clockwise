import { Injectable } from '@angular/core';
import { IChat, /*IMessage */ } from '@mp/api/chat/util';
import { GetAllChats, SetAllChats } from '@mp/app/chat/util';

import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { ChatApi } from './chat.api';
import { Timestamp } from '@angular/fire/firestore';

export interface ChatStateModel {
    chats: IChat[];
}

@State<ChatStateModel>({
    name: 'chats',
    defaults: {
        chats: [],
    },
})

@Injectable()
export class ChatState {
    constructor(
        private readonly chatApi: ChatApi,
        private readonly store: Store
    ) { }

    @Selector()
    static posts(state: ChatStateModel) {
        return state.chats;
    }

    @Action(GetAllChats)
    async getAllPosts(ctx: StateContext<ChatStateModel>) {
        try {
            const responseRef = await this.chatApi.GetAllPosts();
            const response = responseRef.data;
            return ctx.dispatch(new SetAllChats(response.chats));
        } catch (error) {
            return error;
        }
    }
}

