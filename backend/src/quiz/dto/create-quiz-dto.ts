import { IsArray, IsString, IsNotEmpty } from 'class-validator';

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  question: string;

  @IsArray()
  @IsNotEmpty({ each: true })
  options: string[];

  @IsString()
  @IsNotEmpty()
  answer: string;
}
