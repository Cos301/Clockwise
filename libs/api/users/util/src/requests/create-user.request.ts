// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { IAuth } from '@mp/api/auth/util';

export interface ICreateUserRequest {
  auth: IAuth;
}
