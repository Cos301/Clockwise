import {
    CreateProfileCommand,
    IProfile,
    // ProfileStatus
} from '@mp/api/profiles/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
// import { Timestamp } from 'firebase-admin/firestore';
import { Profile } from '../models';

@CommandHandler(CreateProfileCommand)
export class CreateProfileHandler
  implements ICommandHandler<CreateProfileCommand>
{
  constructor(private publisher: EventPublisher) {}

  async execute(command: CreateProfileCommand) {
    console.log(`${CreateProfileHandler.name}`);

    const request = command.request;
    const userId = request.user.user_id;
    const first_name = request.user.first_name;
    const followers = request.user.followers;
    const following = request.user.following;
    const last_name = request.user.last_name;
    const gen_score = request.user.gen_score;
    const password = request.user.password;
    const pfp_url = request.user.pfp_url;
    const posts = request.user.posts;
    const username = request.user.username;
    const time_created = request.user.time_created;
    const email = request.user.email;
    const data: IProfile = {
      user_id: userId,
      first_name,
      followers,
      following,
      last_name,
      gen_score,
      password,
      pfp_url,
      posts,
      username,
      time_created,
      email,
      
      // accountDetails: {
      //   displayName,
      //   email,
      //   photoURL,
      //   status: ProfileStatus.INCOMPLETE,
      // },
      // personalDetails: {
      //   age: null,
      //   gender: null,
      //   ethnicity: null,
      //   status: ProfileStatus.INCOMPLETE,
      // },
      // contactDetails: {
      //   cellphone,
      //   status: ProfileStatus.INCOMPLETE,
      // },
      // addressDetails: {
      //   residentialArea: null,
      //   workArea: null,
      //   status: ProfileStatus.INCOMPLETE,
      // },
      // occupationDetails: {
      //   householdIncome: null,
      //   occupation: null,
      //   status: ProfileStatus.INCOMPLETE,
      // },
      // status: ProfileStatus.INCOMPLETE,
      // created: Timestamp.fromDate(new Date()),
    };
    const profile = this.publisher.mergeObjectContext(Profile.fromData(data));

    profile.create();
    profile.commit();
  }
}
