import { Component, Input } from '@angular/core';
import { TimeBarComponent } from '@mp/app/global-ui';

type CommentType = {
    username: string,
    comment: string
}

@Component({
  selector: 'mp-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'], 
  standalone: true,
  imports: [TimeBarComponent]
})
export class PostPageComponent {
    @Input() myUsername: string;
    @Input() minutesLeft: number;
    @Input() datePosted: string;
    @Input() timePosted: string;
    @Input() caption: string;
    @Input() comments: CommentType[];
    @Input() totalMinutes: number;

    constructor() {
        this.myUsername = 'Username';
        this.minutesLeft = 10;
        this.totalMinutes = 15;
        this.datePosted = '23 March 2023';
        this.timePosted = '15:05';
        this.caption = 'What an incredible view. At an amazing park in South Africa.';
        this.comments = [
            {
                username: 'Username', 
                comment: 'Looks great!'
            }, 
            {
                username: 'Username', 
                comment: 'I want to be there!'
            }
        ]
    }
}
