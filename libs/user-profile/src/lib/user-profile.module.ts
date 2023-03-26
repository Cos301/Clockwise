import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { GlobalUiModule } from '@mp/global-ui';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import { ProfileDemoComponent } from './profile-demo/profile-demo.component';

@NgModule({
  imports: [CommonModule, GlobalUiModule],
  declarations: [
    HeaderComponent,
    PostsContainerComponent,
    ProfileDemoComponent,
  ],
  exports: [
    HeaderComponent, 
    PostsContainerComponent,
    PostsContainerComponent
  ],
})
export class UserProfileModule {}
