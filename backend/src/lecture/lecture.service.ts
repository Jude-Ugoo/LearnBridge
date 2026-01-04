import { Injectable } from '@nestjs/common';
import { CreateLectureDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LectureService {
  constructor(private prisma: PrismaService) {}

  async createSectionLecture(sectionId: string, dto: CreateLectureDto) {
    return this.prisma.lecture.create({
      data: {
        sectionId,
        ...dto,
      },
    });
  }

  async getSectionLectures(sectionId: string, take = 10, skip = 0) {
    return this.prisma.lecture.findMany({
      where: { sectionId },
      take,
      skip,
      orderBy: { order: 'asc' },
    });
  }

  async getLectureWithCourse(lectureId: string) {
    return this.prisma.lecture.findUnique({
      where: { id: lectureId },
      include: {
        section: {
          include: {
            course: {
              select: { instructorId: true },
            },
          },
        },
      },
    });
  }
}
