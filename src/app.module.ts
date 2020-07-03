import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaratonaModule } from './maratona/maratona.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      synchronize: true,
      logging: false,
      entities: ['dist/**/*.entity.js'],
    }),
    MaratonaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
