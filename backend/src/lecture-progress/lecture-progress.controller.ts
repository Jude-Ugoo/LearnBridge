import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { LectureProgressService } from './lecture-progress.service';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiParam,
} from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards';
import { CreateLectureProgressDto } from './dto';
import { Role } from '@prisma/client';
import { GetUser } from 'src/auth/decorator/get-user-decorator';

@ApiTags('Lecture Progress')
@ApiBearerAuth('JWT')
@UseGuards(JwtGuard)
@Controller('lecture-progress')
export class LectureProgressController {
  constructor(private progressService: LectureProgressService) {}

  @Post()
  @ApiOperation({
    summary: 'Mark a lecture as completed or in progress (student only)',
  })
  @ApiResponse({
    status: 201,
    description: 'Progress successfully marked or updated',
  })
  async markLectureProgress(
    @GetUser('id') studentId: string,
    @GetUser('role') role: Role,
    @Body() dto: CreateLectureProgressDto,
  ) {
    if (role !== Role.STUDENT) {
      throw new ForbiddenException('Only students can track lecture progress');
    }

    return this.progressService.markProgress(studentId, dto);
  }

  @Get('course/:id')
  @ApiOperation({
    summary: 'Get all lecture progress for a course (student only)',
  })
  @ApiParam({ name: 'courseId', description: 'UUID of the course' })
  @ApiResponse({
    status: 200,
    description: 'List of lecture progress entries for the course',
  })
  async getProgressByCourse(
    @Param('id', new ParseUUIDPipe()) courseId: string,
    @GetUser('id') studentId: string,
  ) {
    return this.progressService.getProgress(studentId, courseId);
  }

  @Get('course/:id/progress-percentage')
  @ApiOperation({
    summary: 'Get percentage progress for a course (student only)',
  })
  @ApiParam({ name: 'courseId', description: 'UUID of the course' })
  @ApiResponse({
    status: 200,
    description: 'Percentage of course completed by the student',
  })
  async getCourseProgressPercentage(
    @Param('id', new ParseUUIDPipe()) courseId: string,
    @GetUser('id') studentId: string,
  ) {
    return this.progressService.getCourseProgressPercentage(
      studentId,
      courseId,
    );
  }

  @Get('course/:id/resume')
  @ApiOperation({
    summary: 'Get last watched lecture to resume from (student only)',
  })
  @ApiParam({ name: 'courseId', description: 'UUID of the course' })
  @ApiResponse({
    status: 200,
    description: 'Returns the most recently watched lecture for resume',
  })
  async getLastWatchedLecture(
    @Param('id', new ParseUUIDPipe()) courseId: string,
    @GetUser('id') studentId: string,
  ) {
    return this.progressService.getLastWatchedLecture(studentId, courseId);
  }
}
