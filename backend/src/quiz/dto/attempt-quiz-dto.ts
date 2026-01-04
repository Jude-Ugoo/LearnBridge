import { IsString, IsNotEmpty } from 'class-validator';

export class AttemptQuizDto {
  @IsString()
  @IsNotEmpty()
  selected: string;
}
