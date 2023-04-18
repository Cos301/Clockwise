import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { appMyProfileFeatureRoutes } from './lib.routes';
import { ProfileTestComponent } from './profile-test/profile-test.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ProfileTestComponent],
  exports: [ProfileTestComponent],
})
export class AppMyProfileFeatureModule {}
