import {
  // AccountDetailsUpdatedEvent,
  // AddressDetailsUpdatedEvent,
  // ContactDetailsUpdatedEvent,
  // IAccountDetails,
  // IAddressDetails,
  // IContactDetails,
  // IOccupationDetails,
  // IPersonalDetails,
  IProfile,
  // OccupationDetailsUpdatedEvent,
  // PersonalDetailsUpdatedEvent,
  ProfileCreatedEvent,
  // ProfileStatus,
  // ProfileStatusUpdatedEvent,
  IUserProfile
} from '@mp/api/profiles/util';
import { AggregateRoot } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { IPost } from '@mp/api/posts/util';


export class Profile extends AggregateRoot implements IUserProfile {
  constructor(
    public user_id: string,
    public username: string,
    public password: string,
    public first_name: string,
    public last_name: string,
    public email: string,
    public bio: string,
    public gen_score: number,
    public pfp_url: string,
    public posts: IPost[],
    public time_created: Timestamp,
    public time_remove: Timestamp
  ) {
    super();
  }

  static fromData(profile: IProfile): Profile {
    const instance = new Profile(
      profile.user_id,
      profile.username,
      profile.password,
      profile.first_name,
      profile.last_name,
      profile.email,
      profile.bio,
      profile.gen_score,
      profile.pfp_url,
      profile.posts,
      profile.time_created,
      profile.time_remove
    );
    return instance;
  }

  create() {
    this.apply(new ProfileCreatedEvent(this.toJSON()));
  }

  // updateAddressDetails(addressDetails: IAddressDetails) {
  //   if (!this.addressDetails) this.addressDetails = {};
  //   this.addressDetails.residentialArea = addressDetails.residentialArea
  //     ? addressDetails.residentialArea
  //     : this.addressDetails.residentialArea;
  //   this.addressDetails.workArea = addressDetails.workArea
  //     ? addressDetails.workArea
  //     : this.addressDetails.workArea;
  //   this.apply(new AddressDetailsUpdatedEvent(this.toJSON()));
  // }

  // updateContactDetails(contactDetails: IContactDetails) {
  //   if (!this.contactDetails) this.contactDetails = {};
  //   this.contactDetails.cellphone = contactDetails.cellphone
  //     ? contactDetails.cellphone
  //     : this.contactDetails.cellphone;
  //   this.apply(new ContactDetailsUpdatedEvent(this.toJSON()));
  // }

  // updatePersonalDetails(personalDetails: IPersonalDetails) {
  //   if (!this.personalDetails) this.personalDetails = {};
  //   this.personalDetails.age = personalDetails.age
  //     ? personalDetails.age
  //     : this.personalDetails.age;
  //   this.personalDetails.gender = personalDetails.gender
  //     ? personalDetails.gender
  //     : this.personalDetails.gender;
  //   this.personalDetails.ethnicity = personalDetails.ethnicity
  //     ? personalDetails.ethnicity
  //     : this.personalDetails.ethnicity;
  //   this.apply(new PersonalDetailsUpdatedEvent(this.toJSON()));
  // }

  // updateOccupationDetails(occupationDetails: IOccupationDetails) {
  //   if (!this.occupationDetails) this.occupationDetails = {};
  //   this.occupationDetails.householdIncome = occupationDetails.householdIncome
  //     ? occupationDetails.householdIncome
  //     : this.occupationDetails.householdIncome;
  //   this.occupationDetails.occupation = occupationDetails.occupation
  //     ? occupationDetails.occupation
  //     : this.occupationDetails.occupation;
  //   this.apply(new OccupationDetailsUpdatedEvent(this.toJSON()));
  // }

  // updateAccountDetails(accountDetails: IAccountDetails) {
  //   if (!this.accountDetails) this.accountDetails = {};
  //   this.accountDetails.displayName = accountDetails.displayName
  //     ? accountDetails.displayName
  //     : this.accountDetails.displayName;
  //   this.accountDetails.email = accountDetails.email
  //     ? accountDetails.email
  //     : this.accountDetails.email;
  //   this.accountDetails.photoURL = accountDetails.photoURL
  //     ? accountDetails.photoURL
  //     : this.accountDetails.photoURL;
  //   this.accountDetails.password = accountDetails.password
  //     ? accountDetails.password
  //     : this.accountDetails.password;
  //   this.apply(new AccountDetailsUpdatedEvent(this.toJSON()));
  // }

  // private updateAccountDetailsStatus() {
  //   if (!this.accountDetails) {
  //     this.accountDetails = {};
  //     this.accountDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   if (!this.accountDetails.displayName || !this.accountDetails.email) {
  //     this.accountDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   this.accountDetails.status = ProfileStatus.COMPLETE;
  //   return;
  // }

  // private updateAddressDetailsStatus() {
  //   if (!this.addressDetails) {
  //     this.addressDetails = {};
  //     this.addressDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   if (!this.addressDetails.residentialArea || !this.addressDetails.workArea) {
  //     this.addressDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   this.addressDetails.status = ProfileStatus.COMPLETE;
  //   return;
  // }

  // private updateContactDetailsStatus() {
  //   if (!this.contactDetails) {
  //     this.contactDetails = {};
  //     this.contactDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   if (!this.contactDetails.cellphone) {
  //     this.contactDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   this.contactDetails.status = ProfileStatus.COMPLETE;
  //   return;
  // }

  // private updatePersonalDetailsStatus() {
  //   if (!this.personalDetails) {
  //     this.personalDetails = {};
  //     this.personalDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   if (
  //     !this.personalDetails.age ||
  //     !this.personalDetails.gender ||
  //     !this.personalDetails.ethnicity
  //   ) {
  //     this.personalDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   this.personalDetails.status = ProfileStatus.COMPLETE;
  //   return;
  // }

  // private updateOccupationDetailsStatus() {
  //   if (!this.occupationDetails) {
  //     this.occupationDetails = {};
  //     this.occupationDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   if (
  //     !this.occupationDetails.householdIncome ||
  //     !this.occupationDetails.occupation
  //   ) {
  //     this.occupationDetails.status = ProfileStatus.INCOMPLETE;
  //     this.status = ProfileStatus.INCOMPLETE;
  //     return;
  //   }

  //   this.occupationDetails.status = ProfileStatus.COMPLETE;
  //   return;
  // }

  // updateStatus() {
  //   this.updateAccountDetailsStatus();
  //   this.updateAddressDetailsStatus();
  //   this.updateContactDetailsStatus();
  //   this.updatePersonalDetailsStatus();
  //   this.updateOccupationDetailsStatus();

  //   if (
  //     this.accountDetails?.status === ProfileStatus.COMPLETE &&
  //     this.addressDetails?.status === ProfileStatus.COMPLETE &&
  //     this.contactDetails?.status === ProfileStatus.COMPLETE &&
  //     this.personalDetails?.status === ProfileStatus.COMPLETE &&
  //     this.occupationDetails?.status === ProfileStatus.COMPLETE
  //   ) {
  //     this.status = ProfileStatus.COMPLETE;
  //   }

  //   this.apply(new ProfileStatusUpdatedEvent(this.toJSON()));
  // }

  toJSON(): IProfile {
    return {
      user_id: this.user_id,
      username: this.username,
      password: this.password,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      bio: this.bio,
      gen_score: this.gen_score,
      pfp_url: this.pfp_url,
      posts: this.posts,
      time_created: this.time_created,
      time_remove: this.time_remove
    };
  }
}
