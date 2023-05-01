import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {GetAllPostsModule , CreatePostModule} from '@mp/app/posts/ui';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { PostsPage } from './posts.page';
import { PostsRouting } from './posts.routing'
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { TimeBarComponent } from 'libs/global-ui/src/lib/time-bar/time-bar.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsRouting,
    GetAllPostsModule,
    CreatePostModule,
    NgxSkeletonLoaderModule,
    TimeBarComponent,
  ],
  declarations: [PostsPage],
})
export class PostsModule {}
