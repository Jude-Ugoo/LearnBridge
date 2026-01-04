import {
  Controller,
  ForbiddenException,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { JwtGuard } from 'src/auth/guards';
import { GetUser } from 'src/auth/decorator/get-user-decorator';
import { Role } from '@prisma/client';
import { CourseService } from 'src/course/course.service';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Enrollment')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('enrollment')
export class EnrollmentController {
  constructor(
    private enrollmentService: EnrollmentService,
    private courseService: CourseService,
  ) {}

  @Post('/courses/:id/enroll')
  @ApiOperation({ summary: 'Enroll the current student in a course' })
  @ApiParam({ name: 'id', type: 'string', description: 'Course ID (UUID)' })
  @ApiResponse({ status: 201, description: 'Successfully enrolled' })
  @ApiResponse({ status: 403, description: 'Only students can enroll' })
  @ApiResponse({ status: 409, description: 'Already enrolled' })
  @ApiResponse({ status: 404, description: 'Course not found' })
  async enrollInCourse(
    @Param('id', new ParseUUIDPipe()) courseId: string,
    @GetUser('id') studentId: string,
    @GetUser('role') role: string,
  ) {
    if (role !== Role.STUDENT) {
      throw new ForbiddenException('Only students can enroll');
    }

    return this.enrollmentService.enrollInCourse(courseId, studentId);
  }

  @Get('/my-courses')
  @ApiOperation({ summary: 'Get all courses the current student is enrolled in' })
  @ApiResponse({ status: 200, description: 'List of enrolled courses with instructor info' })
  async getMyCourses(@GetUser('id') studentId: string) {
    return this.enrollmentService.getStudentCourses(studentId);
  }

  @Get('/courses/:id/students')
  @ApiOperation({ summary: 'Get all students enrolled in a specific course' })
  @ApiParam({ name: 'id', type: 'string', description: 'Course ID (UUID)' })
  @ApiResponse({ status: 200, description: 'List of students enrolled in course' })
  @ApiResponse({ status: 403, description: 'Access denied (if restricted to instructors)' })
  async getStudentsEnrolledInCourse(
    @Param('id', new ParseUUIDPipe()) courseId: string,
    @GetUser('id') userId: string,
    @GetUser('role') role: string,
  ) {
    // Optional: Only instructors of the course can view
    // const course = await this.courseService.getCourseById(courseId);

    // if (!course || course.instructorId !== userId) {
    //   throw new ForbiddenException('Access denied - Instructors Only!');
    // }

    return this.enrollmentService.getEnrolledStudents(courseId);
  }

  @Get('/dashboard')
  @ApiOperation({ summary: 'Get student dashboard' })
  @ApiResponse({
    status: 200,
    description: 'Returns enrolled courses with progress',
  })
  async getStudentDashboard(@GetUser('id') studentId: string) {
    return this.enrollmentService.getStudentDashboard(studentId)
  }
}
