import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { SetUsername } from "../../util/src/setusername.action"
import { SetPosts } from  "../../util/src/setposts.action"

type postType = {
    username: string, 
    caption: string
}

export interface MyProfileStateModel {
    username: string | null;
    posts: postType;
}

@State<MyProfileStateModel>({
    name: 'profile'
})
@Injectable()
export class MyProfileState {
    @Action(SetUsername)
    async setUsername(ctx: StateContext<MyProfileStateModel>, { username }: SetUsername) {
        const state = ctx.getState();
        state.username = username;
    }

    @Action(SetPosts)
    async setPosts(ctx: StateContext<MyProfileStateModel>) {
        const state = ctx.getState();
        
        //TODO: make an API call to get the posts for the userprofile
    }
}

/*
 @Action(UpdateContactDetails)
  async updateContactDetails(ctx: StateContext<ProfileStateModel>) {
    try {
      const state = ctx.getState();
      const userId = state.profile?.userId;
      const cellphone = state.contactDetailsForm.model.cellphone;

      if (!userId || !cellphone)
        return ctx.dispatch(new SetError('UserId or cellphone not set'));

      const request: IUpdateContactDetailsRequest = {
        profile: {
          userId,
          contactDetails: {
            cellphone,
          },
        },
      };
      const responseRef = await this.profileApi.updateContactDetails(request);
      const response = responseRef.data;
      return ctx.dispatch(new SetProfile(response.profile));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }
*/