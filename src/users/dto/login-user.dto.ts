import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class LoginUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty({ message: 'Email Must not be empty' })
  @IsEmail({ message: 'Email should be valid' })
  email: string;

  @IsNotEmpty({ message: 'Password must not be empty' })
  password?: string;
}
