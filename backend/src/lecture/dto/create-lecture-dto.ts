import { IsNotEmpty, IsString, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLectureDto {
  @ApiProperty({ example: 'Intro to TS' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ example: 'https://video.com/intro.mp4' })
  @IsNotEmpty()
  @IsString()
  videoUrl: string;

  @ApiProperty({ example: 300 })
  @IsInt()
  @Min(1)
  duration: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  order: number;
}