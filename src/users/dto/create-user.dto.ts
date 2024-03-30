import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {

  @ApiProperty({example: 'user@ukr.net', description: 'email adress'})
  @IsString({message: 'Should be a string'})
  @IsEmail({}, {message: 'wrong email'})
  readonly email: string;

  @ApiProperty({example: 'pAsSW0rD!', description: 'user password'})
  @IsString({message: 'Should be a string'})
  @Length(4, 16, {message: 'Not less than 4 and more than 16 symbols'})
  readonly password: string;
}