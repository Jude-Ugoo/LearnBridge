import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnrollmentService {
  constructor(private prisma: PrismaService) {}

  async enrollInCourse(courseId: string, studentId: string) {
    const course = await this.prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      throw new NotFoundException('Course not found!');
    }

    // Check if user already enrolled in course
    const alreadyEnrolled = await this.prisma.enrollment.findUnique({
      where: {
        studentId_courseId: {
          studentId,
          courseId,
        },
      },
    });

    if (alreadyEnrolled) {
      throw new ConflictException('Already enrolled');
    }

    const enroll = this.prisma.enrollment.create({
      data: {
        studentId,
        courseId,
      },
    });

    return enroll;
  }

  async getStudentCourses(studentId: string) {
    const studentCourses = await this.prisma.enrollment.findMany({
      where: { studentId },
      include: {
        course: {
          include: {
            instructor: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return studentCourses;
  }

  async getEnrolledStudents(courseId: string) {
    const enrolledStudentsInACourse = await this.prisma.enrollment.findMany({
      where: { courseId },
      include: {
        student: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return enrolledStudentsInACourse;
  }

  async getStudentDashboard(studentId: string) {
	// Fetch enrolled courses for the student
    const enrollments = await this.prisma.enrollment.findMany({
      where: { studentId },
      select: {
        enrolledAt: true,
        course: {
          select: {
            id: true,
            title: true,
            thumbnail: true,
            sections: {
              select: {
                lectures: {
                  select: { id: true },
                },
              },
            },
          },
        },
      },
    });

	// Fetch lecture progress records for this student
    const progressRecords = await this.prisma.lectureProgress.findMany({
      where: { studentId },
      select: { lectureId: true },
    });

    // Convert progress records into a Set for fast lookup
    const completedLectureIds = new Set(
      progressRecords.map((p) => p.lectureId),
    );

    // Calculate progress for each enrolled course
    return enrollments.map((enrollment) => {
      const course = enrollment.course

      const allLectureIds = course.sections.flatMap((s) =>
        s.lectures.map((l) => l.id),
      );

      // Count completed lectures
      const completedCount = allLectureIds.filter((id) =>
        completedLectureIds.has(id),
      ).length;

      // Calculate total lectures and percentage progress
      const totalCount = allLectureIds.length;

      const progress =
        totalCount === 0 ? 0 : (completedCount / totalCount) * 100;

      // Return dashboard-friendly data for each course
      return {
        courseId: course.id,
        title: course.title,
        thumbnail: course.thumbnail,
        enrolledAt: enrollment.enrolledAt,
        progress: parseFloat(progress.toFixed(1)),
      };
    });
  }
}
