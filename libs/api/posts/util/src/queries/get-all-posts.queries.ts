import { IPost } from '../interfaces'
import { IGetAllPostsRequest } from '../requests';

export class GetAllPostsQuery {
  constructor(public readonly request: IGetAllPostsRequest) { }
}

