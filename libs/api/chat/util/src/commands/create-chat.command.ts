import { ICreateChatRequest } from "../requests";

export class CreateChatCommand {
    constructor(public readonly request: ICreateChatRequest){

    }
}