import { IPost } from '@mp/api/posts/util';
import { IUser, UserCreatedEvent } from '@mp/api/users/util';
import { AggregateRoot } from '@nestjs/cqrs';

export class User extends AggregateRoot implements IUser {
  constructor(
    // public id: string,
    // public email?: string | null | undefined,
    // public displayName?: string | null | undefined,
    // public photoURL?: string | null | undefined,
    // public phoneNumber?: string | null | undefined,
    // public customClaims?: { [key: string]: any } | null | undefined,
    // public created?: Timestamp | null | undefined
    public user_id: string,
    public email: string,
    public first_name: string,
    public followers: IUser[],
    public following: IUser[],
    public last_name: string,
    public gen_score: number,
    public password: string,
    public pfp_url: string,
    public posts: IPost[],
    public username: string,
    public time_created: FirebaseFirestore.Timestamp,
  ) {
    super();
  }

  static fromData(user: IUser): User {
    const instance = new User(
      user.user_id,
      user.email,
      user.first_name,
      user.followers,
      user.following,
      user.last_name,
      user.gen_score,
      user.password,
      user.pfp_url,
      user.posts,
      user.username,
      user.time_created,

    );
    return instance;
  }

  create() {
    this.apply(new UserCreatedEvent(this.toJSON()));
  }

  toJSON(): IUser {
    return {
      // id: this.id,
      // email: this.email,
      // displayName: this.displayName,
      // photoURL: this.photoURL,
      // phoneNumber: this.phoneNumber,
      // customClaims: this.customClaims,
      // created: this.created,
      user_id: this.user_id,
      email: this.email,
      first_name: this.first_name,
      followers: this.followers,
      following: this.following,
      last_name: this.last_name,
      gen_score: this.gen_score,
      password: this.password,
      pfp_url: this.pfp_url,
      posts: this.posts,
      username: this.username,
      time_created: this.time_created,
    };
  }
}
