import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../dto/login-user.dto';
import { HelperService } from '../helper/helper.service';
import { UsersService } from '../users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private helperService: HelperService,
  ) {}
  async validateUser(userName: string, password: string) {
    const userData = await this.userService.getUser(userName);
    if (!userData) {
      throw new NotAcceptableException('User not found');
    }
    const isPasswordValid = await this.helperService.comparePassword(
      userData.password,
      password,
    );
    if (!isPasswordValid) {
      throw new NotAcceptableException('Password invalid');
    }
    return userData;
  }
  async login(userData: LoginUserDto) {
    const user = await this.validateUser(userData.email, userData.password);
    const payload = { name: user.name, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
