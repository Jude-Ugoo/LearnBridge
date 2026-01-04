import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { QuizService } from './quiz.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards';
import { AttemptQuizDto, CreateQuizDto } from './dto';
import { Role } from '@prisma/client';
import { GetUser } from 'src/auth/decorator/get-user-decorator';
import { LectureService } from 'src/lecture/lecture.service';

@ApiTags('Quiz')
@UseGuards(JwtGuard)
@Controller('quiz')
export class QuizController {
  constructor(
    private quizService: QuizService,
    private lectureService: LectureService,
  ) {}

  @Post('/lectures/:id/quizzes')
  @ApiOperation({ summary: 'Instructor creates quiz for a lecture' })
  async createQuiz(
    @Param('id', new ParseUUIDPipe()) lectureId,
    @GetUser('role') role: Role,
    @GetUser('id') instructorId: string,
    @Body() dto: CreateQuizDto,
  ) {
    const lecture = await this.lectureService.getLectureWithCourse(lectureId);

    if (role !== Role.INSTRUCTOR) {
      throw new Error('Only instructors can add quizzes');
    }

    if (lecture?.section.course.instructorId !== instructorId) {
      throw new ForbiddenException(
        'You can only add quizzes to your own courses',
      );
    }

    return this.quizService.createQuiz(lectureId, dto);
  }

  @Get('/lectures/:id/quizzes')
  @ApiOperation({ summary: 'Get all quizzes for a lecture' })
  async getLectureQuizzes(@Param('id', ParseUUIDPipe) lectureId: string) {
    return this.quizService.getLectureQuizzes(lectureId);
  }

  @Post('/:id/attempt')
  @ApiOperation({ summary: 'Student attempts a quiz' })
  async attemptQuiz(
    @Param('id', ParseUUIDPipe) quizId: string,
    @GetUser('id') studentId: string,
    @GetUser('role') role: Role,
    @Body() dto: AttemptQuizDto,
  ) {
    if (role !== Role.STUDENT) {
      throw new Error('Only students can attempt quizzes');
    }

    return this.quizService.attemptQuiz(studentId, quizId, dto);
  }

//   @Get('/course/:id/summary')
//   @ApiOperation({ summary: 'Get quiz summary for student by course' })
//   async getSummary(
//     @Param('id', ParseUUIDPipe) courseId: string,
//     @GetUser('id') studentId: string,
//   ) {
//     return this.quizService.getCourseQuizSummary(studentId, courseId);
//   }

  @Get('/:id/attempts')
  @ApiOperation({ summary: "Get student's attempts for a specific quiz" })
  async getStudentQuizAttempts(
    @Param('id', new ParseUUIDPipe()) quizId: string,
    @GetUser('id') studentId: string,
    @GetUser('role') role: Role,
  ) {
    if (role !== Role.STUDENT) {
      throw new ForbiddenException(
        'Only students can view their quiz attempts',
      );
    }

    return this.quizService.geStudentsQuizAttempts(studentId, quizId);
  }

  @Get('/course/:id/summary')
  @ApiOperation({ summary: 'Quiz performance summary for student in a course' })
  async getQuizSummary(
    @Param('id', new ParseUUIDPipe()) courseId: string,
    @GetUser('id') studentId: string,
    @GetUser('role') role: Role,
  ) {
    if (role !== Role.STUDENT) {
      throw new ForbiddenException('Only students can view quiz summary');
    }

    return this.quizService.getQuizSummaryForCourse(studentId, courseId);
  }
}
