import { Module } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';
import { CourseService } from 'src/course/course.service';
import { CourseModule } from 'src/course/course.module';

@Module({
  imports: [CourseModule],
  providers: [EnrollmentService],
  controllers: [EnrollmentController]
})
export class EnrollmentModule {}
