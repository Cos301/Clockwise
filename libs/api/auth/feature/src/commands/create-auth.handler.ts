import { CreateAuthCommand, IAuth } from '@mp/api/auth/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { Auth } from '../models';

@CommandHandler(CreateAuthCommand)
export class CreateAuthHandler implements ICommandHandler<CreateAuthCommand> {
  constructor(private publisher: EventPublisher) {}

  async execute(command: CreateAuthCommand) {
    console.log(`${CreateAuthHandler.name}`);

    const request = command.request;
    const data: IAuth = {
      id: request.userRecord.user_id,
      email: request.userRecord.email,
      displayName: request.userRecord.username,
      photoURL: request.userRecord.pfp_url,
      customClaims: request.userRecord.customClaims,
      created: Timestamp.fromDate(new Date()),
    };
    const auth = this.publisher.mergeObjectContext(Auth.fromData(data));

    auth.create();
    auth.commit();
  }
}
