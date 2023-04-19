import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { SetName } from '@mp/app/user-profile/util'
import { UserProfilePage as ProfilePage} from '../../feature/src/user-profile.page';

//state interface
export interface UserProfileStateModel {
    username: string | null
}

//injectable type
export class UpdateUserProfile {
  static readonly type = '[user-profile] update userprofile';
}

//defines the state, name is used to refer to it
@State<UserProfileStateModel>({
    name: 'userprofile', 
    defaults: {
      username: 'USERNAME'
    }
})

//create  injectible state class
@Injectable()
export class UserProfileState {
  @Action(SetName)
  setName(ctx: StateContext<UserProfileStateModel>) {
    return ctx.dispatch(
      new SetName(new ProfilePage())
    )
  }
}