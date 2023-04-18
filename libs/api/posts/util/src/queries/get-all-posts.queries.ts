import {IPost} from '../interfaces'

export class GetAllPostsQuery {
    constructor(public readonly post: IPost) {}
}