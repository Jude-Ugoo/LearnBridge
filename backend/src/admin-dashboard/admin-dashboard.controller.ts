import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AdminDashboardService } from './admin-dashboard.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { JwtGuard, RolesGuard } from 'src/auth/guards';
import { AdminPublishCourseDto } from './dto/admin-publish-course-dto';
import { GetUser } from 'src/auth/decorator/get-user-decorator';
import { Role } from '@prisma/client';

@ApiTags('Admin - Course Management')
@ApiBearerAuth()
@UseGuards(JwtGuard, RolesGuard)
@UseGuards(RolesGuard)
@Controller('admin/publish')
export class AdminDashboardController {
  constructor(private adminDashboard: AdminDashboardService) {}

  @Post(':id')
  async adminPublishCourse(
    @Param('id', new ParseUUIDPipe()) courseId: string,
    @Body() dto: AdminPublishCourseDto,
    @GetUser('role') role: string,
  ) {
    if (role !== Role.ADMIN) {
      throw new ForbiddenException('Admin Only!');
    }
    return this.adminDashboard.adminPublishCourse(courseId, dto);
  }

  //   @Patch(':id')
  //   async adminUpdateCourse(
  //     @Body() dto: AdminPublishCourseDto,
  //     @GetUser('role') role: string,
  //     @Param('id', new ParseUUIDPipe()) courseId: string,
  //   ) {
  //     if (role !== Role.ADMIN) {
  //       throw new ForbiddenException('Admin Only!')
  //     }

  //     return this.adminDashboard.adminUpdateCourse(courseId, dto);
  //   }

  @Delete(':id')
  async adminRemoveCourse(
    @GetUser('role') role: string,
    @Param('id', new ParseUUIDPipe()) courseId: string,
  ) {
    if (role !== Role.ADMIN) {
      throw new ForbiddenException('Admin Only!');
    }

    return this.adminDashboard.adminRemoveCourse(courseId);
  }
}
