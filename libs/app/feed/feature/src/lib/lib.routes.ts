import { Route } from '@angular/router';
import { FeedPageComponent } from './feed-page/feed-page.component';

export const appFeedFeatureRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: FeedPageComponent} 
];
