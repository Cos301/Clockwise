import { Component } from '@angular/core';
import { TimeBarComponent } from '@mp/global-ui';
import { HeaderComponent } from '../header/header.component';
import { PostsContainerComponent } from '../posts-container/posts-container.component';

@Component({
  selector: 'mp-profile-demo',
  templateUrl: './profile-demo.component.html',
  styleUrls: ['./profile-demo.component.scss'],
  imports: [
    HeaderComponent,
    PostsContainerComponent, 
    TimeBarComponent
  ]
})
export class ProfileDemoComponent {}