import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordatoryController } from './recordatory/recordatory.controller';
import { RecordatoryService } from './recordatory/recordatory.service';

@Module({
  imports: [],
  controllers: [AppController, RecordatoryController],
  providers: [AppService, RecordatoryService],
})
export class AppModule {}
