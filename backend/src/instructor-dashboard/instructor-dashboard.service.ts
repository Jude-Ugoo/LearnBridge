import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstructorDashboardService {
  constructor(private prisma: PrismaService) {}

  async getInstructorStats(instructorId: string) {
    const courses = await this.prisma.course.findMany({
      where: { instructorId },
      include: {
        enrollments: true,
        sections: {
          include: {
            lectures: {
              include: {
                quiz: {
                  include: {
                    quizAttempt: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return courses.map((course) => {
      const totalEnrolled = course.enrollments.length;

      const allAttempts = course.sections.flatMap((section) =>
        section.lectures.flatMap((lecture) =>
          lecture.quiz.flatMap((q) => q.quizAttempt),
        ),
      );

      const totalAttempts = allAttempts.length;
      const correctAttempts = allAttempts.filter((a) => a.correct).length;

      const averageScore =
        totalAttempts > 0
          ? Number(((correctAttempts / totalAttempts) * 100).toFixed(2))
          : 0;

      return {
        courseId: course.id,
        title: course.title,
        enrolled: totalEnrolled,
        averageQuizScore: averageScore,
      };
    });
  }
}
