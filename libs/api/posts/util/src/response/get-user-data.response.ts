// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { IUser } from "@mp/api/users/util";


export interface IGetUserDataResponse {
    users: IUser[];
}
