import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto } from './dto';
import { UpdateCourseDto } from './dto/update-course-dto';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async createCourse(dto: CreateCourseDto, instructorId: string) {
    const course = await this.prisma.course.create({
      data: {
        title: dto.title,
        description: dto.description,
        thumbnail: dto.thumbnail,
        instructorId: instructorId,
        status: 'UNDER_REVIEW'
      },
    });

    return course;
  }

  // Instructor submits for review
  async submitCourseForReview(courseId: string, instructorId: string) {
    const course = await this.prisma.course.findUniqueOrThrow({
      where: { id: courseId }
    })

    if (course.instructorId !== instructorId) {
      throw new ForbiddenException("Not your course.")
    }

    return this.prisma.course.update({
      where: { id: courseId },
      data: {
        status: 'UNDER_REVIEW'
      }
    })
  }

  async getAllCourses() {
    const courses = await this.prisma.course.findMany();

    if (!courses.length) {
      throw new NotFoundException('No course found');
    }

    return courses;
  }

  async getCourseById(courseId: string) {
    const course = await this.prisma.course.findUnique({
      where: { id: courseId },
      include: {
        instructor: {
          select: {
            id: true,
            name: true,
          },
        },
        enrollments: {
          include: {
            student: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!course) {
      throw new NotFoundException(`Course with id ${courseId} not found`);
    }
    return course;
  }

  async updateCourse(courseId: string, updateCourseDto: UpdateCourseDto) {
    const courseToUpdate = await this.prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!courseToUpdate) {
      throw new NotFoundException(`Course with id ${courseId} not found`);
    }

    const updatedCourse = await this.prisma.course.update({
      where: { id: courseId },
      data: updateCourseDto,
    });
1
    return updatedCourse;
  }

  async deleteCourse(courseId: string) {
	const courseToDelete = await this.prisma.course.findUnique({
		where: { id: courseId }
	})

	 if (!courseToDelete) {
      throw new NotFoundException(`Course with id ${courseId} not found`);
    }

	await this.prisma.course.delete({
		where: { id: courseId }
	})

	return "Course has been successfully removed!"
  }
}
