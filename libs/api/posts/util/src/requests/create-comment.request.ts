export interface ICreateCommentRequest {
  ownerId: string;
  userId: string;
  postId: string;
  text: string;
}
