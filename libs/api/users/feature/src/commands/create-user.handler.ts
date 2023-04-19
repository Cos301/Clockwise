import { CreateUserCommand, IUser } from '@mp/api/users/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { User } from '../models';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private publisher: EventPublisher) {}

  async execute(command: CreateUserCommand) {
    console.log(`${CreateUserHandler.name}`);

    const request = command.request;
    const data: IUser = {
      // id: request.auth.id,
      // email: request.auth.email,
      // displayName: request.auth.displayName,
      // photoURL: request.auth.photoURL,
      // phoneNumber: request.auth.phoneNumber,
      // customClaims: request.auth.customClaims,
      // created: request.auth.created,
      user_id: request.auth.user_id,
      first_name: request.auth.first_name,
      followers: [],
      following: [],
      last_name: request.auth.last_name,
      gen_score: 0,
      password: request.auth.password,
      pfp_url: request.auth.pfp_url,
      posts: [],
      username: request.auth.username,
      time_created: request.auth.time_created,
      email: request.auth.email,
    };
    const user = this.publisher.mergeObjectContext(User.fromData(data));

    user.create();
    user.commit();
  }
}
