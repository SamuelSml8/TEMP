import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  @Length(3, 50)
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @ApiProperty()
  name: string;

  @IsString()
  @Length(3, 50)
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @ApiProperty()
  lastName: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate({ message: 'The birthDate must be a valid date' })
  @ApiProperty()
  birthDate: Date;

  @Length(1, 50)
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase())
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8, { message: 'The password must be at least 8 characters long' })
  @MaxLength(50, {
    message: 'The password must have maximum of 50 characters ',
  })
  @ApiProperty()
  password: string;
}
