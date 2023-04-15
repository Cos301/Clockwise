import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponentComponent } from './post-component/post-component.component';
import { TimeBarComponent } from '@mp/app/global-ui';

@NgModule({
  imports: [CommonModule, TimeBarComponent],
  declarations: [PostComponentComponent], 
  exports: [PostComponentComponent]
})
export class AppPostUiModule {}
