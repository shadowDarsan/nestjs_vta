import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserDetailsModule } from './user-details/user-details.module';

@Module({
  imports: [UserDetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
