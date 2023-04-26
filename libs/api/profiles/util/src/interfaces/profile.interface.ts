import { Timestamp } from 'firebase-admin/firestore';
// import { ProfileStatus } from '../enums';
// import { IAccountDetails } from './account-details.interface';
// import { IAddressDetails } from './address-details.interface';
// import { IContactDetails } from './contact-details.interface';
// import { IOccupationDetails } from './occupation-details.interface';
// import { IPersonalDetails } from './personal-details.interface';
import { IPost } from '@mp/api/posts/util';

export interface IProfile {
  user_id: string;
  username: string | null | undefined;
  password: string | null | undefined;
  first_name: string | null | undefined;
  last_name: string | null | undefined;
  email: string | null | undefined;
  bio: string | null | undefined;
  gen_score: number | null | undefined;
  pfp_url: string | null | undefined;
  posts: IPost[] | null | undefined;
  time_created: Timestamp | null | undefined;
  time_remove: Timestamp | null | undefined;
}
