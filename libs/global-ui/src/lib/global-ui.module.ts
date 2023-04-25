import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeBarComponent } from './time-bar/time-bar.component';

@NgModule({
  imports: [CommonModule, TimeBarComponent],
  declarations: [],
  exports: [TimeBarComponent],
})
export class GlobalUiModule {}
