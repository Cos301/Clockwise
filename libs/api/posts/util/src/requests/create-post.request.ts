import { IPost } from "../interfaces";

export interface ICreatePostRequest{
    caption: string;
    img_url: string;
    user_id: string;
    postLife: number;
    post_id: string;
}