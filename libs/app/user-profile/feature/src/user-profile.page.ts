import { Component } from "@angular/core";
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IProfile } from '@mp/api/profiles/util';

import { UserProfileState } from '@mp/app/user-profile/data-access'

@Component({
    selector: 'mp-user-profile',
    templateUrl: './user-profile.page.html',
    styleUrls: ['./user-profile.page.scss'],
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class UserProfilePage {
    @Select(UserProfileState.name) profile$!: Observable<IProfile | null>;
    username: string;
    constructor() {
        this.username = "new Name!"
    }
    setName(newName: string) : void {
        this.username = newName;
    }
}

