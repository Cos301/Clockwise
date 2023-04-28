import { Timestamp } from 'firebase-admin/firestore';
import { IUserProfile } from './userprofile.interface';

export interface IUser {
  id: string;
  email?: string | null | undefined;
  displayName?: string | null | undefined;
  photoURL?: string | null | undefined;
  phoneNumber?: string | null | undefined;
  customClaims?: { [key: string]: any | null | undefined} | null | undefined;
  created?: Timestamp | null | undefined;
  userProfile?: IUserProfile | null | undefined;
}