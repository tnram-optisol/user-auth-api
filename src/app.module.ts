import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { HelperService } from './users/helper/helper.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './users/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017',
      database: 'nestjs-mongo-sample',
      entities: [User],
      synchronize: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, HelperService],
})
export class AppModule {}
