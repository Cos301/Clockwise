import { apiPostsFeature } from './api-posts-feature';
import { CqrsModule, EventPublisher } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from '../posts.service';
//Import all the handlers
import { CreatePostHandler, CreateCommentHandler } from '../commands';
import { GetAllPostsHandler, GetUserDataHandler } from '../queries';
import { PostCreatedHandler } from '../events';
import { Post } from '../models';
import { PostsRepository } from '@mp/api/posts/data-access';
import { IPost, GetUserDataQuery, GetAllPostsQuery } from '@mp/api/posts/util';
import { Timestamp } from 'firebase-admin/firestore';
import * as admin from 'firebase-admin';
describe('apiPostsFeature', () => {
  let createPostHandler: CreatePostHandler;
  let createCommentHandler: CreateCommentHandler;
  let getAllPostsHandler: GetAllPostsHandler;
  let getUserDataHandler: GetUserDataHandler;
  let postsService: PostsService;
  let postsRepository: PostsRepository;
  let publisher: EventPublisher;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [
        PostsService,
        PostsRepository,
        CreatePostHandler,
        CreateCommentHandler,
        GetAllPostsHandler,
        GetUserDataHandler,
        EventPublisher,
      ],
    }).compile();

    createPostHandler = module.get<CreatePostHandler>(CreatePostHandler);
    createCommentHandler =
      module.get<CreateCommentHandler>(CreateCommentHandler);

    getUserDataHandler = module.get<GetUserDataHandler>(GetUserDataHandler);
    postsService = module.get<PostsService>(PostsService);
    postsRepository = module.get<PostsRepository>(PostsRepository);
    publisher = module.get<EventPublisher>(EventPublisher);
    getAllPostsHandler = new GetAllPostsHandler(postsRepository);
  });

  it('Create Post Handler defined', () => {
    expect(createPostHandler).toBeDefined();
  });
  it('Create Comment Handler defined', () => {
    expect(createCommentHandler).toBeDefined();
  });
  it('Get All Posts Handler defined', () => {
    expect(getAllPostsHandler).toBeDefined();
  });
  it('Get User Data Handler defined', () => {
    expect(getUserDataHandler).toBeDefined();
  });
  it('Posts Service defined', () => {
    expect(postsService).toBeDefined();
  });
  it('Posts Repository defined', () => {
    expect(postsRepository).toBeDefined();
  });

  //Create post command
  it('Create Post', async () => {
    const postTest: IPost = {
      user_id: '1',
      caption: 'test',
      comments: [],
      img_url: 'test',
      post_id: '1',
      time_created: Timestamp.now(),
      time_remove: Timestamp.now(),
    };
    const fixture = new Post(
      postTest.post_id,
      postTest.caption,
      postTest.comments,
      postTest.img_url,
      postTest.time_created,
      postTest.time_remove,
      postTest.user_id
    );

    fixture.create = jest.fn();
    fixture.commit = jest.fn();
    publisher.mergeObjectContext = jest.fn((fixture) => fixture);
    postsRepository.createPost = jest.fn();

    // const createPostCommand = new PostCreatedHandler(postsRepository);
    // const result = await createPostHandler.execute(createPostCommand);
    // expect(result).toBeUndefined();
    // expect(result.create).toHaveBeenCalled();
  });

  //Get all Posts
  it('Get All Posts', async () => {
    const postTest: IPost = {
      user_id: '1',
      caption: 'test',
      comments: [],
      img_url: 'test',
      post_id: '1',
      time_created: Timestamp.now(),
      time_remove: Timestamp.now(),
    };
    postsRepository.fetchAllPosts = jest.fn(() => Promise.resolve([postTest]));

    const result = await getAllPostsHandler.execute(new GetAllPostsQuery({}));
    console.log(
      '🚀 ~ file: api-posts-feature.spec.ts:113 ~ it ~ result:',
      result
    );

    expect(result).toBeDefined();
    expect(postsRepository.fetchAllPosts).toHaveBeenCalled();
    expect(result.posts.length).toBe(1);
    result.posts.forEach((x) => {
      expect(x.caption).toBe(postTest.caption);
      expect(x.comments).toBe(postTest.comments);
      expect(x.img_url).toBe(postTest.img_url);
      expect(x.post_id).toBe(postTest.post_id);
      expect(x.time_created).toBe(postTest.time_created);
      expect(x.time_remove).toBe(postTest.time_remove);
      expect(x.user_id).toBe(postTest.user_id);
    });


  });

  //Get User Data
  it('Get User Data', async () => {
    postsRepository.getUserData = jest.fn(() => Promise.resolve([]));
    const result = await getUserDataHandler.execute(
      new GetUserDataQuery({})
    );
    expect(result).toBeDefined();
    expect(postsRepository.getUserData).toHaveBeenCalled();
    expect(result.users.length).toBe(0);
  });
});
