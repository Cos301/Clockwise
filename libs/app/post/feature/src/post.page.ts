import { Component } from "@angular/core";
import { TimeBarComponent } from "@mp/app/global-ui";
import { Action, Select, Selector, State, StateContext, Store } from "@ngxs/store";
import { Observable, map } from "rxjs";

//---------------------- INTERFACE ------------------------//

//define the interface for the post state
export interface PostState {
    username: string, 
    caption: string, 
    minutesLeft: number,
    imageUrl: string,
    datePosted: string,
    timePosted: string
}

//----------------------- ACTIONS -------------------------//

//define the actions that can be peformed, which uses a post state

//set the post info
export class SetPostInfo {
    static readonly type = '[post] SetPostInfo';
    constructor(public payload: PostState) {}
}

//get the post info
export class GetPostInfo {
    static readonly type = "[post] GetPostInfo";

     //the payload is the url for the post
    constructor(public payload: string) {}
}

//------------------------ STATE MODEL --------------------------//

//define the state
@State<PostStateModel>({
    name: 'post', 
    defaults: {
        username: 'default username', 
        caption: 'default caption',
        minutesLeft: 0,
        imageUrl: 'https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg',
        datePosted: '12 March 2022',
        timePosted: '13:32'
    }
})
export class PostState {
    @Selector()
    static getPostInfo(state: PostStateModel) {
        return {
            ...state    
        }
    }
    @Action(SetPostInfo)
    setPostInfo(ctx: StateContext<PostStateModel>) {
        
        //get the current state of the post (will initially contain defualt values)
        const state = ctx.getState();

        //set the new state
        ctx.setState({
            ...state, 
            username: 'new username'
        })

    }
}

@Component({
  selector: 'mp-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'], 
  standalone: true,
  imports: [TimeBarComponent]
})
export class PostPageComponent {
    @Select(PostState) post$: Observable<GetPostInfo>;

    constructor(private store: Store) {
        this.post$ = this.store.select(PostState.getPostInfo)
    }

    @Action(SetPostInfo)
    setPostInfo() {
        this.post$.pipe(
            map()
        )
    }
}
