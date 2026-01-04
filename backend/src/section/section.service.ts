import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSectionDto } from './dto';

@Injectable()
export class SectionService {
    constructor(private prisma: PrismaService) {}

    async createCourseSection(courseId: string, createSectionDto: CreateSectionDto) {
        return this.prisma.section.create({
            data: {
                title: createSectionDto.title,
                courseId,
            }
        })
    }

    async getCourseSections(courseId: string, take = 10, skip = 0) {
        return this.prisma.course.findUnique({
            where: { id: courseId },
            select: {
                id: true,
                title: true,
                description: true,
                instructor: {
                    select: {
                        id: true,
                        name: true,
                    }
                },
                sections: {
                    take,
                    skip,
                    orderBy: { id: 'asc'},
                    include: {
                        lectures: {
                            orderBy: { order: 'asc' }
                        }
                    }
                }
            }
        })
    }
}
