import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostsModule } from '@mp/app/posts/data-access';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SinglePostComponent } from './single-post.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { TimeBarComponent } from 'libs/global-ui/src/lib/time-bar/time-bar.component';
import { UserProfileModule } from '../user-profile';
@NgModule({
  declarations: [SinglePostComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    NgxsFormPluginModule,
    PostsModule,
    TimeBarComponent,
    UserProfileModule
  ],
  exports: [SinglePostComponent],
})
export class SinglePost {}