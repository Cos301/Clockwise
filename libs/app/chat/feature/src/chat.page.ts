import { Component } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
    selector: 'ms-profile-page',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage {
    constructor(
        private readonly store: Store
    ) { }

}
