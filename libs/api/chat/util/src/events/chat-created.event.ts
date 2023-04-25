import { IChat } from '../interfaces';

export class ChatCreatedEvent {
  constructor(public readonly user: IChat) {}
}