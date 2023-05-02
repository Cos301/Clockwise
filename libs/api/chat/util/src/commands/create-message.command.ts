import { ICreateMessageRequest } from '../requests';

export class CreateMessageCommand {
    constructor(public readonly request: ICreateMessageRequest) { }
}
