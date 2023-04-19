import { State, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';

export interface UserProfileStateModel {
    name: string | null
}

@State<UserProfileStateModel>({
    name: 'userprofile'
})

@Injectable()
export class UserProfileState {
  @Selector()
  static profile(state: UserProfileStateModel) {
    return state.name;
  }
}