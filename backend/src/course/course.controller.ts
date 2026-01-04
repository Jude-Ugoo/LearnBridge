import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards';
import { GetUser } from 'src/auth/decorator/get-user-decorator';
import { Role } from '@prisma/client';
import { UpdateCourseDto } from './dto/update-course-dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Roles } from 'src/auth/decorator/roles.decorator';

@ApiTags('Courses')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('course')
export class CourseController {
  constructor(
    private courseService: CourseService,
    private prisma: PrismaService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Course (Instructor only)' })
  @ApiResponse({
    status: 201,
    description: 'Course successfully created',
  })
  @ApiResponse({
    status: 403,
    description: 'Only instructors can create courses',
  })
  async create(
    @Body() dto: CreateCourseDto,
    @GetUser('id') userId: string,
    @GetUser('role') role: string,
  ) {
    if (role !== Role.INSTRUCTOR) {
      throw new ForbiddenException('Only instructors can create courses');
    }

    return await this.courseService.createCourse(dto, userId);
  }

  @Patch(':id/submit')
  @Roles(Role.INSTRUCTOR)
  @ApiOperation({ summary: 'Instructor submits course for review' })
  submitForReview(
    @Param('id', new ParseUUIDPipe()) courseId: string,
    @GetUser('id') instructorId: string,
  ) {
    return this.courseService.submitCourseForReview(courseId, instructorId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all available courses' })
  @ApiResponse({ status: 200, description: 'List of all courses' })
  async getAllCourses() {
    return await this.courseService.getAllCourses();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific course by ID' })
  @ApiParam({ name: 'id', description: 'UUID of the course' })
  @ApiResponse({ status: 200, description: 'Returns course details' })
  @ApiResponse({ status: 404, description: 'Course not found' })
  async getCourse(@Param('id', new ParseUUIDPipe()) courseId: string) {
    return await this.courseService.getCourseById(courseId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a course (Instructor only)' })
  @ApiParam({ name: 'id', description: 'UUID of the course' })
  @ApiResponse({ status: 200, description: 'Course updated successfully' })
  @ApiResponse({ status: 403, description: 'Access denied' })
  async updateCourse(
    @Param('id', new ParseUUIDPipe()) courseId: string,
    @GetUser('id') userId: string,
    @GetUser('role') role: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    const course = await this.courseService.getCourseById(courseId);

    if (course.instructorId !== userId || role !== Role.INSTRUCTOR) {
      throw new ForbiddenException('You are not allowed to update this course');
    }

    return this.courseService.updateCourse(courseId, updateCourseDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a course (Instructor only)' })
  @ApiParam({ name: 'id', description: 'UUID of the course' })
  @ApiResponse({ status: 200, description: 'Course deleted successfully' })
  @ApiResponse({ status: 403, description: 'Access denied' })
  async deleteCourse(
    @Param('id', new ParseUUIDPipe()) courseId: string,
    @GetUser('id') userId: string,
    @GetUser('role') role: string,
  ) {
    const course = await this.courseService.getCourseById(courseId);

    if (course.instructorId !== userId || role !== Role.INSTRUCTOR) {
      throw new ForbiddenException('You are not allowed to update this course');
    }

    return this.courseService.deleteCourse(courseId);
  }
}
