import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'

export class CreateCourseDto {
  @ApiProperty({ example: 'Learn Fullstack Development'})
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'This course takes your from zero to hero in 2 days'})
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'https://link-to-thumbnail.png', required: false })
  @IsString()
  @IsOptional()
  thumbnail?: string;

//   @ApiProperty({ example: 'user-id-uuid' })
//   @IsString()
//   @IsNotEmpty()
//   instructorId: string;
}