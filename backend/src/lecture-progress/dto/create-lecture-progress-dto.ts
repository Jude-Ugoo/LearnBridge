import { IsUUID, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLectureProgressDto {
  @ApiProperty({ example: 'lecture-id-uuid' })
  @IsUUID()
  lectureId: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  completed: boolean;
}