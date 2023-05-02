import { Component } from '@angular/core';
import { actionsExecuting, ActionsExecuting } from '@ngxs-labs/actions-executing';
import { Select, Selector, Store } from '@ngxs/store';
import { ChatState } from '@mp/app/chat/data-access';
import { GetAllChats } from '@mp/app/chat/util';
import { IChat } from '@mp/api/chat/util';

import { Observable } from 'rxjs';
// import { SingleChat } from '../single-chat';

type ChatType = {
    username: string,
    //  unread : boolean,
}

@Component({
    selector: 'mp-get-all-chats',
    templateUrl: './get-all-chats.component.html',
    styleUrls: ['./get-all-chats.component.scss'],
})
export class GetAllChatsComponent {
    @Select(ChatState.chats) chats$!: Observable<IChat[] | null>;
    @Select(actionsExecuting([GetAllChats]))
    busy$!: Observable<ActionsExecuting>;

    chats: ChatType[]

    constructor(private readonly store: Store) {
        this.chats = [
            {
                username: 'user1',
            },
            {
                username: 'user2',
            },
            {
                username: 'user3',
            }
        ]
    }

    

    public CallAllChats() {
        this.store.dispatch(new GetAllChats({chat:null}));
    }
}
