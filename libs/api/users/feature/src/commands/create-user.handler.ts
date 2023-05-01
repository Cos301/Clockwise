import { CreateUserCommand, IUser } from '@mp/api/users/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { User } from '../models';
import { Timestamp } from 'firebase-admin/firestore';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private publisher: EventPublisher) {}

  async execute(command: CreateUserCommand) {
    console.log(`${CreateUserHandler.name}`);

    //Create a Date object for a week from now
    const oneWeekFromNow = Date.now() + 7 * 24 * 60 * 60 * 1000; // Add one week in milliseconds

    // Create a new Timestamp object for one week from now
    const remove = Timestamp.fromMillis(oneWeekFromNow);

    const request = command.request;
    const data: IUser = {
      id: request.auth.id,
      email: request.auth.email,
      displayName: request.auth.displayName,
      photoURL: request.auth.photoURL,
      phoneNumber: request.auth.phoneNumber,
      customClaims: request.auth.customClaims,
      created: request.auth.created,
      userProfile: {
        bio: '',
        email: request.auth.email,
        first_name: '',
        gen_score: 0,
        last_name: '',
        password: '',
        pfp_url: request.auth.photoURL,
        time_created: request.auth.created,
        time_remove: remove,
        user_id: request.auth.id,
        username: '',
      }
    };
    const user = this.publisher.mergeObjectContext(User.fromData(data));

    user.create();
    user.commit();
  }
}
