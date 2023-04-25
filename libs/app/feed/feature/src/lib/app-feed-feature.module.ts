import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appFeedFeatureRoutes } from './lib.routes';
import { FeedPageComponent } from './feed-page/feed-page.component';
import {NavbarComponent, TimeBarComponent} from '@mp/app/global-ui';
import { SearchComponentComponent } from './search-component/search-component.component';
import { FeedViewComponent } from './feed-view/feed-view.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appFeedFeatureRoutes),
        TimeBarComponent,
        NavbarComponent,
    ],
  declarations: [
    FeedPageComponent,
    SearchComponentComponent,
    FeedViewComponent,
  ],
})
export class AppFeedFeatureModule {}
