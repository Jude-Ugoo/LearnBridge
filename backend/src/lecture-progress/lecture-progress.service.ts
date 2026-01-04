import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLectureProgressDto } from './dto';

@Injectable()
export class LectureProgressService {
  constructor(private prisma: PrismaService) {}

  async markProgress(studentId: string, dto: CreateLectureProgressDto) {
    // Get the lecture and its courseId (through section)
    const lecture = await this.prisma.lecture.findUnique({
      where: { id: dto.lectureId },
      select: {
        section: {
          select: {
            courseId: true,
          },
        },
      },
    });

    if (!lecture) {
      throw new NotFoundException('Lecture not found');
    }

    const courseId = lecture.section.courseId;

    // Check if student is enrolled in that course
    const enrollment = await this.prisma.enrollment.findUnique({
      where: {
        studentId_courseId: {
          studentId,
          courseId,
        },
      },
    });

    if (!enrollment) {
      throw new ForbiddenException('You are not enrolled in this course');
    }

    // Upsert progress if authorized
    return this.prisma.lectureProgress.upsert({
      where: {
        studentId_lectureId: {
          studentId,
          lectureId: dto.lectureId,
        },
      },
      update: {
        completed: dto.completed,
        watchedAt: new Date(),
      },
      create: {
        studentId,
        lectureId: dto.lectureId,
        completed: dto.completed,
      },
    });
  }

  async getProgress(studentId: string, courseId: string) {
    // Check if student is enrolled in that course
    const enrollment = await this.prisma.enrollment.findUnique({
      where: {
        studentId_courseId: {
          studentId,
          courseId,
        },
      },
    });

    if (!enrollment) {
      throw new ForbiddenException('You are not enrolled in this course');
    }

    return this.prisma.lectureProgress.findMany({
      where: {
        studentId,
        lecture: {
          section: {
            courseId,
          },
        },
      },
      include: {
        lecture: {
          include: {
            section: true,
          },
        },
      },
    });
  }

  async getCourseProgressPercentage(studentId: string, courseId: string) {
    // Check if student is enrolled in that course
    const enrollment = await this.prisma.enrollment.findUnique({
      where: {
        studentId_courseId: {
          studentId,
          courseId,
        },
      },
    });

    if (!enrollment) {
      throw new ForbiddenException('You are not enrolled in this course');
    }

    const totalLectures = await this.prisma.lecture.count({
      where: {
        section: {
          courseId,
        },
      },
    });

    if (totalLectures === 0) {
      return { progress: 0 };
    }

    const completedLectures = await this.prisma.lectureProgress.count({
      where: {
        studentId,
        completed: true,
        lecture: {
          section: {
            courseId,
          },
        },
      },
    });

    const progress = (completedLectures / totalLectures) * 100;

    return { progress: Number(progress.toFixed(2)) }; // rounded to 2 decimal places
  }

  async getLastWatchedLecture(studentId: string, courseId: string) {
    // Check if student is enrolled in that course
    const enrollment = await this.prisma.enrollment.findUnique({
      where: {
        studentId_courseId: {
          studentId,
          courseId,
        },
      },
    });

    if (!enrollment) {
      throw new ForbiddenException('You are not enrolled in this course');
    }

    const lastWatched = await this.prisma.lectureProgress.findFirst({
      where: {
        studentId,
        lecture: {
          section: {
            courseId,
          },
        },
      },
      orderBy: {
        watchedAt: 'desc',
      },
      include: {
        lecture: {
          include: {
            section: true,
          },
        },
      },
    });

    if (!lastWatched) {
      return { message: 'No watched lectures yet.' };
    }

    return {
      lectureId: lastWatched.lectureId,
      title: lastWatched.lecture.title,
      sectionTitle: lastWatched.lecture.section.title,
      watcedAt: lastWatched.watchedAt,
    };
  }
}
