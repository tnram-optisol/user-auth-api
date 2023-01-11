import {
  IsAlpha,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from '@nestjs/class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name must be required and valid' })
  @IsAlpha()
  @MinLength(3, { message: 'Name must be required and valid' })
  name: string;

  @IsNotEmpty({ message: 'Email must be required and valid' })
  @IsEmail({ message: 'Email must be required and valid' })
  email: string;

  @IsNotEmpty({ message: 'Password must be required and valid' })
  @MinLength(8, { message: 'Password must be required and valid' })
  password: string;

  profilePic?: string;
  createdAt: Date;
  updatedAt: Date;
}
