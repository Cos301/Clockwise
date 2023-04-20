import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appChatsFeatureRoutes } from './lib.routes';
import { ChatPageComponent } from './chat-page/chat-page.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appChatsFeatureRoutes)],
  declarations: [ChatPageComponent],
})
export class AppChatsFeatureModule {}
