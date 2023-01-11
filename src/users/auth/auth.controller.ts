import { Controller, Post, Body } from '@nestjs/common';
import { LoginUserDto } from '../dto/login-user.dto';

import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() user: LoginUserDto) {
    return this.authService.login(user);
  }
}
