import {Post} from '../interfaces'

export class GetAllPostsQuery {
    constructor(public readonly post: Post) {}
}