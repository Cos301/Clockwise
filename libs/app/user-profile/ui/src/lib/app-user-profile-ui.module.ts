import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PostsContainerComponent } from './posts-container/posts-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, PostsContainerComponent]
})
export class AppUserProfileUiModule {}
