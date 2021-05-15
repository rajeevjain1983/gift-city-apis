import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NavigationModule } from './navigation/navigation.module';

@Module({
  imports: [NavigationModule, NavigationModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
