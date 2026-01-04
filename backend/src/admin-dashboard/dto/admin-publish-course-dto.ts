import { IsNumber, IsOptional, IsUrl } from 'class-validator';

export class AdminPublishCourseDto {
  @IsNumber()
  @IsOptional()
  price?: number;

  @IsUrl()
  @IsOptional()
  thumbnail?: string;
}
