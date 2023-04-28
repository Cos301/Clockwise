import { IGetUserDataRequest } from '../requests/get-user-data.request';

export class GetUserDataQuery {
  constructor(public readonly request: IGetUserDataRequest) { }
}

