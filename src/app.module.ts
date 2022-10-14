import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { TodoModule } from './todo/todo.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [PremierModule, TodoModule,
  TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host:'localhost',
        port:5432,
        username:'postgres',
        password:'monmon',
        database:'DB',
        entities:[],
        synchronize:true,
        logging: true
      }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
