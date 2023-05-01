import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ImageContainerComponent } from './image-container.component';



@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule
  ],
  declarations: [ImageContainerComponent],
  exports: [ImageContainerComponent]
})
export class ImageContainerModule { }
