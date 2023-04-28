import { Injectable } from '@angular/core';
import { IChat, IMessage, ICreateChatRequest} from '@mp/api/chat/util';
import { GetAllChats, SetAllChats, CreateMessage, IncrementCounter, SetCreatedChat } from '@mp/app/chat/util';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { ChatApi } from './chat.api';
import { IUser } from '@mp/api/users/util';
import produce from 'immer';

export interface ChatsStateModel {
    chats: IChat[];
    count: number;
}

@State<ChatsStateModel>({
    name: 'chats',
    defaults: {
        chats: [],
        count: 0
    },
    
})

@Injectable()
export class ChatState {
    constructor(
        private readonly chatApi: ChatApi,
        private readonly store: Store

    ) { }

    @Selector()
    static chats(state: ChatsStateModel) {
        return state.chats;
    }

    @Selector()
    static count(StateContext: ChatsStateModel) {
        return StateContext.count;
    }

    @Action(SetAllChats)
    setAllChats(ctx: StateContext<ChatsStateModel>, { chats }: SetAllChats) {
        return ctx.setState(
            produce((draft) => {
                draft.chats = chats;
            })
        );
    }

    @Action(GetAllChats)
    async getAllChats(ctx: StateContext<ChatsStateModel>, action: GetAllChats) {
        try {
            const responseRef = await this.chatApi.getAllChats(action.request);
            const response = responseRef.data;
            console.log("response: " + response);
            return ctx.dispatch(new SetAllChats(response.chats));
        } catch (error) {
            return error;
        }
    }
    
    @Action(CreateMessage)
    async createMessage(ctx: StateContext<ChatsStateModel>, action: CreateMessage) {
        console.log("send message");
        try {
            console.log("action: " + action);
            const responseRef = await this.chatApi.createMessage(action.message);
            const response = responseRef.data;

            console.log("response: " + response);

            return null;
        } catch (error) {
            return error;
        }
    } 

}

export interface ChatStateModel {
    chat: IChat | null;
    createChatForm: {
        model: {
            chat_id: string | null;
            users: IUser[] | null;
            messages: IMessage[] | null;


        };
        dirty: boolean;
        status: string;
        errors: object;
    };
    count: number;
}

@State<ChatStateModel>({
    name: 'chat',
    defaults: {
        chat: null,
        createChatForm: {
            model: {
                chat_id: null,
                users: null,
                messages: null
            },
            dirty: false,
            status: '',
            errors: {}
        },
        count: 0
    }
})

@Injectable()
export class CreateChatState {
    constructor(
        private readonly chatApi: ChatApi,
        private readonly store: Store
    ){}

    @Selector()
    static chat(state: ChatStateModel) {
        return state.chat;
    }

    @Selector()
    static count(state: ChatStateModel) {
        return state.count;
    }

    @Action(IncrementCounter)
    async incrementCounter(ctx: StateContext<ChatStateModel>) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            count: state.count + 1
        });

    }

    @Action(CreateMessage)
    async createChat(ctx: StateContext<ChatStateModel>) {

        try {
            const state = ctx.getState();
            const chat_id = state.createChatForm.model.chat_id;
            const users = state.createChatForm.model.users;
            const messages = state.createChatForm.model.messages;
            if(!chat_id || !users || !messages) {
                return;
            }
            const request: ICreateChatRequest = {
                chat: {
                    chat_id: chat_id,
                    users: users,
                    messages: messages
                },


            };
            const responseRef = await this.chatApi.createChat(request);
            const response = responseRef.data;

            return ctx.dispatch(new SetCreatedChat(response.chat));
        } catch (error) {
            return error;
        }
    }

}

