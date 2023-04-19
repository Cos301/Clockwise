import { UserProfilePage } from "@mp/app/user-profile/feature";

//defines the interface for the setname action
export class SetName {
    static readonly type = '[user-profile] SetName';
    constructor(public readonly userprofile: UserProfilePage | null) {}
}