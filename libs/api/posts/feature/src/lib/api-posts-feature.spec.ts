import { apiPostsFeature } from './api-posts-feature';
import { CqrsModule, EventPublisher } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from '../posts.service';
//Import all the handlers
import { CreatePostHandler, CreateCommentHandler } from '../commands';
import { GetAllPostsHandler, GetUserDataHandler } from '../queries';
import { PostsRepository } from '@mp/api/posts/data-access';
describe('apiPostsFeature', () => {
  let createPostHandler: CreatePostHandler;
  let createCommentHandler: CreateCommentHandler;
  let getAllPostsHandler: GetAllPostsHandler;
  let getUserDataHandler: GetUserDataHandler;
  let postsService: PostsService;
  let postsRepository: PostsRepository;

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
    getAllPostsHandler = module.get<GetAllPostsHandler>(GetAllPostsHandler);
    getUserDataHandler = module.get<GetUserDataHandler>(GetUserDataHandler);
    postsService = module.get<PostsService>(PostsService);
    postsRepository = module.get<PostsRepository>(PostsRepository);
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


  
});
