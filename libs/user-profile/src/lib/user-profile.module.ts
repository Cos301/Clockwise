import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TimeBarComponent } from '@mp/global-ui';
import { PostsContainerComponent } from './posts-container/posts-container.component';

@NgModule({
  imports: [CommonModule, TimeBarComponent],
  declarations: [HeaderComponent, PostsContainerComponent],
  exports: [HeaderComponent, PostsContainerComponent],
})
export class UserProfileModule {}
