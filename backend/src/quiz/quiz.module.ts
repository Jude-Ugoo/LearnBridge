import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { LectureModule } from 'src/lecture/lecture.module';

@Module({
  imports: [LectureModule],
  providers: [QuizService],
  controllers: [QuizController]
})
export class QuizModule {}
