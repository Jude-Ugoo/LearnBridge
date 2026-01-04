import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateLectureProgressDto {
  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
