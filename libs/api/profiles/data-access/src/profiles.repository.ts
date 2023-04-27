import { IProfile } from '@mp/api/profiles/util';
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class ProfilesRepository {
  async findOne(profile: IProfile) {
    return await admin
      .firestore()
      .collection('profiles')
      .withConverter<IProfile>({
        fromFirestore: (snapshot) => {
          return snapshot.data() as IProfile;
        },
        toFirestore: (it: IProfile) => it,
      })
      .doc(profile.user_id)
      .get();
  }

  async createProfile(profile: IProfile) {
    // Remove password field if present
    delete profile.password;
    return await admin
      .firestore()
      .collection('profiles')
      .doc(profile.user_id)
      .create(profile);
  }

  async updateProfile(profile: IProfile) {
    // Remove password field if present
    delete profile.password;
    return await admin
      .firestore()
      .collection('profiles')
      .doc(profile.user_id)
      .set(profile, { merge: true });
  }
}
