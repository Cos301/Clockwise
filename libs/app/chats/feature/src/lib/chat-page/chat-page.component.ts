import { Component } from '@angular/core';
import { TimeBarComponent } from '@mp/app/global-ui'
import { NavbarComponent } from '@mp/app/global-ui';
import { ChatSearchComponent } from '@mp/app/chats/ui';
import { MessagesContainerComponent } from '@mp/app/chats/ui';

@Component({
  selector: 'mp-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  imports: [TimeBarComponent, NavbarComponent, ChatSearchComponent, MessagesContainerComponent], 
  standalone: true
})
export class ChatPageComponent {}
