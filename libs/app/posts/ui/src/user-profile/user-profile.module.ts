import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserProfileComponent } from './user-profile.component';
import { ImageContainerModule } from '@mp/app/profile/ui';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageContainerModule,
    
  ],
  declarations: [UserProfileComponent],
  exports: [UserProfileComponent]
})
export class UserProfileModule { }
