import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountController } from './account/account.controller';
import { AccountService } from './account/account.service';
import { AccountModule } from './account/account.module';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { ProfileModule } from './profile/profile.module';
import { ExploreController } from './explore/explore.controller';
import { ExploreService } from './explore/explore.service';
import { ExploreModule } from './explore/explore.module';
import { NotifyController } from './notify/notify.controller';
import { NotifyService } from './notify/notify.service';
import { NotifyModule } from './notify/notify.module';
import { ChatController } from './chat/chat.controller';
import { ChatService } from './chat/chat.service';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [AccountModule, ProfileModule, ExploreModule, NotifyModule, ChatModule],
  controllers: [AppController, AccountController, ProfileController, ExploreController, NotifyController, ChatController],
  providers: [AppService, AccountService, ProfileService, ExploreService, NotifyService, ChatService],
})
export class AppModule {}
