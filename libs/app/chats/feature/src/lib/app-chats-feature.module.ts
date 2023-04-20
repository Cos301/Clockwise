import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appChatsFeatureRoutes } from './lib.routes';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { TimeBarComponent } from '@mp/app/global-ui';
import { ChatSearchComponent } from '@mp/app/chats/ui';
import { NavbarComponent } from '@mp/app/global-ui';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(appChatsFeatureRoutes), 
    ChatPageComponent, 
    TimeBarComponent, 
    ChatSearchComponent, 
    NavbarComponent
  ],
  declarations: [],
})
export class AppChatsFeatureModule {}
