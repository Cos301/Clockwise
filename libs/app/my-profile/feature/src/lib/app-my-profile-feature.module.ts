import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { appMyProfileFeatureRoutes } from './lib.routes';
import { ProfileMainPageComponent } from './profile-main-page/profile-main-page.component';
import { HeaderComponent } from './header/header.component';
import { ImageContainerComponent } from './image-container/image-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ProfileMainPageComponent,
    HeaderComponent,
    ImageContainerComponent
  ],
  declarations: [],
  exports: [],
})
export class AppMyProfileFeatureModule {}
