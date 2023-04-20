import { Injectable } from "@angular/core";
import { Action, State } from "@ngxs/store";


export interface MyProfileStateModel {
    username: string | null;
}

@State<MyProfileStateModel>({
    name: 'profile',
    defaults: {
        username: null
    },
})
@Injectable()
export class MyProfileState {
    @Action(SetUsername)
    async setError(ctx: StateContext<MyProfileStateModel>, { username }: SetUsername) {
        
    }
}