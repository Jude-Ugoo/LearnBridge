import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { LectureService } from './lecture.service';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { GetUser } from 'src/auth/decorator/get-user-decorator';
import { JwtGuard } from 'src/auth/guards';
import { CreateLectureDto } from './dto';
import { CourseService } from 'src/course/course.service';
import { PrismaService } from 'src/prisma/prisma.service';

@ApiTags('Lectures')
@ApiBearerAuth('JWT')
@UseGuards(JwtGuard)
@Controller('sections/:id/lectures')
export class LectureController {
  constructor(
    private lectureService: LectureService,
    private courseService: CourseService,
    private prisma: PrismaService,
  ) {}

  @Post()
   @ApiOperation({ summary: 'Create lecture (Instructor only)' })
  async createSectionLecture(
    @Param('id', new ParseUUIDPipe()) sectionId: string,
    @GetUser('id') userId: string,
    @GetUser('role') role: Role,
    @Body() dto: CreateLectureDto,
  ) {
    if (role !== Role.INSTRUCTOR) {
      throw new ForbiddenException('Only instructors can create lectures');
    }

    // Get the section to access courseId
    const section = await this.prisma.section.findUnique({
      where: { id: sectionId },
      select: { courseId: true },
    });

    if (!section) {
      throw new ForbiddenException('Section not found');
    }

    // Get the course to verify ownership
    const course = await this.courseService.getCourseById(section.courseId);
    if (!course || course.instructorId !== userId) {
      throw new ForbiddenException(
        'You can only add sections to your own courses',
      );
    }

    return this.lectureService.createSectionLecture(sectionId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get lectures for section' })
  async getLectures(
    @Param('id', new ParseUUIDPipe()) sectionId: string,
    @Query('take') take?: number,
    @Query('skip') skip?: number,
  ) {
    return this.lectureService.getSectionLectures(sectionId, take, skip);
  }
}
