import { validate } from '@nestjs/class-validator';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from './entities/user.entity';
import { HelperService } from './helper/helper.service';

@Injectable()
export class UsersService {
  private helperService: HelperService = new HelperService();
  constructor(
    @InjectRepository(User) private userRepo: MongoRepository<User>,
  ) {}
  async register(userData: CreateUserDto) {
    validate(userData).then((error) => {
      return error;
    });
    const hashedPassword = await this.helperService.hashPassword(
      userData.password,
    );
    userData.password = hashedPassword;
    return this.userRepo.save(userData);
  }
  async getUser(username: string) {
    return this.userRepo.findOne({
      where: {
        email: username,
      },
    });
  }
}
