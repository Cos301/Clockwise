import { IPost } from '@mp/api/posts/util';
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
    // ProfileStatusUpdatedEvent
} from '@mp/api/profiles/util';
import { AggregateRoot } from '@nestjs/cqrs';

export class Profile extends AggregateRoot implements IProfile {
  constructor(
    public user_id: string,
    public email: string,
    public first_name: string,
    public followers: IProfile[],
    public following: IProfile[],
    public last_name: string,
    public gen_score: number,
    public password: string,
    public pfp_url: string,
    public posts: IPost[],
    public username: string,
    public time_created: FirebaseFirestore.Timestamp,
  
    // public accountDetails?: IAccountDetails | null | undefined,
    // public personalDetails?: IPersonalDetails | null | undefined,
    // public contactDetails?: IContactDetails | null | undefined,
    // public addressDetails?: IAddressDetails | null | undefined,
    // public occupationDetails?: IOccupationDetails | null | undefined,
    // public status?: ProfileStatus | null | undefined,
    // public created?: FirebaseFirestore.Timestamp | null | undefined
  ) {
    super();
  }

  static fromData(profile: IProfile): Profile {
    const instance = new Profile(
      profile.user_id,
      profile.email,
      profile.first_name,
      profile.followers,
      profile.following,
      profile.last_name,
      profile.gen_score,
      profile.password,
      profile.pfp_url,
      profile.posts,
      profile.username,
      profile.time_created,


      // profile.personalDetails,
      // profile.contactDetails,
      // profile.addressDetails,
      // profile.occupationDetails,
      // profile.status,
      // profile.created
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
      email: this.email,
      first_name: this.first_name,
      followers: this.followers,
      following: this.following,
      last_name: this.last_name,
      gen_score: this.gen_score,
      password: this.password,
      pfp_url: this.pfp_url,
      posts: this.posts,
      username: this.username,
      time_created: this.time_created,
      
      // accountDetails: this.accountDetails,
      // personalDetails: this.personalDetails,
      // contactDetails: this.contactDetails,
      // addressDetails: this.addressDetails,
      // occupationDetails: this.occupationDetails,
      // status: this.status,
      // created: this.created,
    };
  }
}
