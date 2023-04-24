//the set username type used in the set username action

export class SetUsername {
    static readonly type = '[my-profile] SetUsername';
    constructor(
        public readonly username: string
    ){}
}