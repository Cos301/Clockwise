import { Route } from '@angular/router';
import { ChatPageComponent } from './chat-page/chat-page.component';

export const appChatsFeatureRoutes: Route[] = [
  /* {path: '', pathMatch:'full', component: InsertYourComponentHere} */
  {
    path: '', 
    pathMatch: 'full', 
    component: ChatPageComponent
  }
];
