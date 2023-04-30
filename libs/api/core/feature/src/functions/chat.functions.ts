import * as functions from 'firebase-functions';
import {
  ICreateMessageRequest,
  ICreateMessageResponse,
  ICreateChatRequest,
  ICreateChatResponse,
  IGetAllChatsRequest,
  IGetAllChatsResponse,
} from '@mp/api/chat/util';
import { ChatService } from '@mp/api/chat/feature';
import { NestFactory } from '@nestjs/core';
import { CoreModule } from '../core.module';

export const getAllChats = functions.https.onCall(
  async (request: IGetAllChatsRequest): Promise<IGetAllChatsResponse> => {
    console.log('getAllChats in chat.functions.ts (core feature)');
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ChatService);
    return service.getAllChats(request);
  }
);

export const createMessage = functions.https.onCall(
  async (request: ICreateMessageRequest): Promise<ICreateMessageResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ChatService);
    return service.createMessage(request);
  }
);

export const createChat = functions.https.onCall(
  async (request: ICreateChatRequest): Promise<ICreateChatResponse> => {
    const app = await NestFactory.createApplicationContext(CoreModule);
    const service = app.get(ChatService);
    return service.createChat(request);
  }
);