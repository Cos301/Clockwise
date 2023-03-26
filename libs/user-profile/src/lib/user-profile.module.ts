import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TimeBarComponent } from 'libs/global-ui/src/lib/time-bar/time-bar.component';

@NgModule({
  imports: [CommonModule, TimeBarComponent],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class UserProfileModule {}
