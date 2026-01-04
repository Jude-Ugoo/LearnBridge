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
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards';
import { SectionService } from './section.service';
import { CreateSectionDto } from './dto';
import { GetUser } from 'src/auth/decorator/get-user-decorator';
import { Role } from '@prisma/client';
import { CourseService } from 'src/course/course.service';

@ApiTags('Sections')
@ApiBearerAuth('JWT')
@UseGuards(JwtGuard)
@Controller('courses/:id/sections')
export class SectionController {
  constructor(
    private sectionService: SectionService,
    private courseService: CourseService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create section (Instructor only)' })
  async createCourseSection(
    @Param('id', new ParseUUIDPipe()) courseId: string,
    @GetUser('id') userId: string,
    @GetUser('role') role: string,
    @Body() dto: CreateSectionDto,
  ) {
    if (role !== Role.INSTRUCTOR) {
      throw new ForbiddenException('Only instructors can create sections');
    }

    const course = await this.courseService.getCourseById(courseId);
    if (!course || course.instructorId !== userId) {
      throw new ForbiddenException(
        'You can only add sections to your own courses',
      );
    }

    return this.sectionService.createCourseSection(courseId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Get sections with lectures for a course' })
  async getSections(
    @Param('id', new ParseUUIDPipe()) courseId: string,
    @Query('take') take?: number,
    @Query('skip') skip?: number,
  ) {
    return this.sectionService.getCourseSections(courseId, take, skip);
  }
}
