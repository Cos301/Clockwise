import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AccountDetailsModule } from './account-details';
import { AddressDetailsModule } from './address-details';
import { ContactDetailsModule } from './contact-details';
import { OccupationDetailsModule } from './occupation-details';
import { PersonalDetailsModule } from './personal-details';
import { ProfileStatusModule } from './profile-status';
import { ImageContainerModule } from './image-container';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AccountDetailsModule,
    AddressDetailsModule,
    ContactDetailsModule,
    OccupationDetailsModule,
    PersonalDetailsModule,
    ProfileStatusModule,
    ImageContainerModule
  ],
  exports: [
    AccountDetailsModule,
    AddressDetailsModule,
    ContactDetailsModule,
    OccupationDetailsModule,
    PersonalDetailsModule,
    ProfileStatusModule,
    ImageContainerModule
  ],
})
export class ProfileModule {}
