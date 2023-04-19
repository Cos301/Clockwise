import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { UserProfileState } from './user-profile.state';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([UserProfileState])]
})
export class UserProfileModule {}