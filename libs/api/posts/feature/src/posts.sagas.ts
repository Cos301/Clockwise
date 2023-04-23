import { CreatePostCommand, PostCreatedEvent } from '@mp/api/posts/util';
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';

@Injectable()
export class PostsSagas {
  @Saga()
  onPostCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(PostCreatedEvent),
      map(
        (event: PostCreatedEvent) => new CreatePostCommand({ post: event.post })
      )
    );
  };
}
