import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProfileModule } from '@mp/app/profile/ui';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { DashboardPage } from './dashboard.page';
import { DashboardRouting } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DashboardRouting,
    ProfileModule,
    NgxSkeletonLoaderModule,
  ],
  declarations: [DashboardPage],
})
export class DashboardModule {}
