import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSectionDto {
  @ApiProperty({ example: 'Introduction to TypeScript' })
  @IsNotEmpty()
  @IsString()
  title: string;
}