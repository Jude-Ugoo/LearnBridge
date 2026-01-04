import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AttemptQuizDto, CreateQuizDto } from './dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class QuizService {
  constructor(private prisma: PrismaService) {}

  async createQuiz(lectureId: string, dto: CreateQuizDto) {
    const lecture = await this.prisma.lecture.findUnique({
      where: { id: lectureId },
    });

    if (!lecture) {
      throw new NotFoundException('Lecture not found');
    }

    return this.prisma.quiz.create({
      data: {
        ...dto,
        lectureId,
      },
    });
  }

  async getLectureQuizzes(lectureId: string) {
    return this.prisma.quiz.findMany({
      where: { lectureId },
    });
  }

  async attemptQuiz(studentId: string, quizId: string, dto: AttemptQuizDto) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { id: quizId },
    });

    if (!quiz) {
      throw new ForbiddenException('Quiz not found!');
    }

    const correct = dto.selected === quiz.answer;

    return this.prisma.quizAttempt.create({
      data: {
        studentId,
        quizId,
        selected: dto.selected,
        correct,
      },
    });
  }

  async getCourseQuizSummary(studentId: string, courseId: string) {
    return this.prisma.quizAttempt.findMany({
      where: {
        studentId,
        quiz: {
          lecture: {
            section: {
              courseId,
            },
          },
        },
      },
      include: {
        quiz: true,
      },
    });
  }

  async geStudentsQuizAttempts(studentId: string, quizId: string) {
    return this.prisma.quizAttempt.findMany({
      where: { studentId, quizId },
      include: {
        quiz: {
          select: {
            question: true,
            options: true,
            answer: true,
          },
        },
      },
    });
  }

  async getQuizSummaryForCourse(studentId: string, courseId: string) {
    const attempts = await this.prisma.quizAttempt.findMany({
      where: {
        studentId,
        quiz: {
          lecture: {
            section: {
              courseId,
            },
          },
        },
      },
    });

    const total = attempts.length;
    const correct = attempts.filter((attempt) => attempt.correct).length;
    const incorrect = total - correct;
    const scorePercent = total > 0 ? Math.round((correct / total) * 100) : 0;

    return {
      totalAttempts: total,
      correctAnswers: correct,
      incorrectAnswers: incorrect,
      scorePercent,
    };
  }
}
