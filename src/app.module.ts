import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './modules/libs/persistence/db-config';
import { PersistenceModule } from './modules/libs/persistence/persistence.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [dbConfig],
    }),
    PersistenceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
