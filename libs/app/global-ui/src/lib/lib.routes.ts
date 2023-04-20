import { Route } from '@angular/router';
import { ChatsDemoComponent } from '@mp/chats';

export const appChatsFeatureRoutes: Route[] = [
  /* {path: '', pathMatch:'full', component: InsertYourComponentHere} */
  {
    path: 'chats',  
    component: ChatsDemoComponent
  }
];