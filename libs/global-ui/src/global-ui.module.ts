import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeBarComponent } from './lib/time-bar/time-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TimeBarComponent],
  exports: [TimeBarComponent]
})
export class GlobalUiModule {}
