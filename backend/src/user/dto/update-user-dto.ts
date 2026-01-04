import { Role } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: 'John Doe' })
  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  email?: string;

  @ApiProperty({ example: 'password' })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  hash?: string;

//   @IsString()
//   @IsNotEmpty()
//   @IsOptional()
//   secret?: string;

//   @IsEnum(Role)
//   @IsOptional()
//   role?: Role;
}
