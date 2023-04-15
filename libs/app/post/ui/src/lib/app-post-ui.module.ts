import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponentComponent } from './post-component/post-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PostComponentComponent], 
  exports: [PostComponentComponent]
})
export class AppPostUiModule {}
