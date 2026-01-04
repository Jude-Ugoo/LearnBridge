import { Controller, ForbiddenException, Get, UseGuards } from '@nestjs/common';
import { InstructorDashboardService } from './instructor-dashboard.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards';
import { GetUser } from 'src/auth/decorator/get-user-decorator';
import { Role } from '@prisma/client';

@ApiTags('Instructor Dashboard')
@UseGuards(JwtGuard)
@Controller('instructor/dashboard')
export class InstructorDashboardController {
  constructor(private instructorDashboard: InstructorDashboardService) {}

  @Get()
  @ApiOperation({ summary: 'Get dashboard stats for instructor' })
  async getStats(
    @GetUser('id') instructorId: string,
    @GetUser('role') role: Role,
  ) {
    if (role !== Role.INSTRUCTOR) {
      throw new ForbiddenException('Only instructors can access dashboard');
    }

    return this.instructorDashboard.getInstructorStats(instructorId);
  }
}
