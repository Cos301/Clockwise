import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfileModule as ProfileDataAccessModule } from '@mp/app/profile/data-access';
import { ProfileModule as ProfileUiModule } from '@mp/app/profile/ui';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PostPageComponent } from './post.page';
import { TimeBarComponent } from '@mp/app/global-ui';
import { PostRouting } from './post.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileUiModule,
    ProfileDataAccessModule,
    NgxSkeletonLoaderModule,
    TimeBarComponent,
    PostRouting,
    PostPageComponent
  ],
  declarations: [],
})
export class PostModule {}
