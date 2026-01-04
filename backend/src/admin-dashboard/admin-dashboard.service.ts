import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AdminPublishCourseDto } from './dto/admin-publish-course-dto';

@Injectable()
export class AdminDashboardService {
  constructor(private prisma: PrismaService) {}

  async adminPublishCourse(courseId: string, dto: AdminPublishCourseDto) {
    const course = await this.prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      throw new NotFoundException('Course does not exist');
    }

    await this.prisma.course.update({
      where: { id: courseId },
      data: {
        price: dto.price,
        thumbnail: dto.thumbnail,
        status: 'PUBLISHED',
      },
    });

    return course;
  }

  //   async adminUpdateCourse(courseId: string, dto: AdminPublishCourseDto) {
  //     const course = await this.prisma.course.findUnique({
  //       where: { id: courseId },
  //     });

  //     if (!course) {
  //       throw new NotFoundException('Course does not exist');
  //     }

  //     await this.prisma.course.update({
  //       where: { id: courseId },
  //       data: {
  //         price: dto.price,
  //         thumbnail: dto.thumbnail,
  //       },
  //     });

  //     return course;
  //   }

  async adminRemoveCourse(courseId: string) {
    const course = await this.prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      throw new NotFoundException('Course does not exist');
    }

    await this.prisma.course.delete({
      where: { id: courseId },
    });

    return 'Course has been removed!';
  }
}
