import { apiChatFeature } from './api-chat-feature';
import { GetAllChatsHandler } from '../queries';
import { Test, TestingModule } from '@nestjs/testing';
import { CqrsModule, EventPublisher } from '@nestjs/cqrs';
import { CreateChatHandler } from '../commands';
import { ChatRepository } from '@mp/api/chat/data-access';
import { IChat } from '@mp/api/chat/util';
import { GetAllChatsQuery, IGetAllChatsRequest } from '@mp/api/chat/util';
import { CreateChatCommand, ICreateChatRequest } from '@mp/api/chat/util';
import { Chat } from '../models';
describe('apiChatFeature', () => {
  let getAllChatsHandler: GetAllChatsHandler;
  let chatRepository: ChatRepository;
  let createChatHandler: CreateChatHandler;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [GetAllChatsHandler, ChatRepository, CreateChatHandler],
    }).compile();

    chatRepository = module.get<ChatRepository>(ChatRepository);
    createChatHandler = module.get<CreateChatHandler>(CreateChatHandler);
    getAllChatsHandler = new GetAllChatsHandler(chatRepository);
  });

  it('Get All Chats Handler defined', () => {
    expect(GetAllChatsHandler).toBeDefined();
  });
  it('Chat Repository defined', () => {
    expect(chatRepository).toBeDefined();
  });
  it('Create Chat Handler defined', () => {
    expect(createChatHandler).toBeDefined();
  });

  it('should work', () => {
    expect(apiChatFeature()).toEqual('api-chat-feature');
  });
  let result: any;
  it('Get All Chats', async () => {
    const chatTest: IChat = {
      chat_id: '1',
      users: [],
      messages: [],
    };
    chatRepository.GetAllChats = jest.fn(() => Promise.resolve([chatTest]));
    const test: IGetAllChatsRequest = {
      chat: [chatTest],
    };
    result = await getAllChatsHandler.execute(new GetAllChatsQuery(test));
    expect(result).toBeDefined();
    expect(result).toEqual([chatTest]);
    expect(chatRepository.GetAllChats).toHaveBeenCalled();
  });

  it('Get All Chats', async () => {
    result.forEach((x: any) => {
      expect(x.chat_id).toEqual('1');
      expect(x.messages).toEqual([]);
      expect(x.users).toEqual([]);
    });
  });
  it('Create Chat', async () => {
    const chatTest: IChat = {
      chat_id: '1',
      users: [],
      messages: [],
    };
    const chatRequest: ICreateChatRequest = {
      chat: chatTest,
    };
    const chatModel = new Chat('1', [], []);
    chatModel.create = jest.fn(() => chatModel);
    chatModel.commit = jest.fn(() => Promise.resolve(chatModel));
    chatRepository.createChat = jest.fn(() =>
      Promise.resolve(chatModel as any)
    );
    result = await createChatHandler.execute(
      new CreateChatCommand(chatRequest)
    );
    expect(chatRepository.createChat).toBeDefined();

    // chatRepository.createChat = jest.fn(() => Promise.resolve(chatTest as any));
    // result = await createChatHandler.execute(new CreateChatCommand(chatRequest));
    // expect(chatRepository.createChat).toHaveBeenCalled();
  });
});
