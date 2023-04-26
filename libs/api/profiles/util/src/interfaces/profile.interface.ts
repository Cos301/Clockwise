import { Timestamp } from 'firebase-admin/firestore';
import { ProfileStatus } from '../enums';
import { IAccountDetails } from './account-details.interface';
import { IAddressDetails } from './address-details.interface';
import { IContactDetails } from './contact-details.interface';
import { IOccupationDetails } from './occupation-details.interface';
import { IPersonalDetails } from './personal-details.interface';
import { IPost } from '@mp/api/posts/util';

export interface IProfile {
  user_id: string;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  bio: string;
  gen_score: number;
  pfp_url: string;
  posts: IPost[];
  time_created: Timestamp;
  time_remove: Timestamp;
}
