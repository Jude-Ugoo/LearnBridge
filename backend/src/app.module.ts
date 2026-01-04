import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CourseService } from './course/course.service';
import { CourseController } from './course/course.controller';
import { CourseModule } from './course/course.module';
import { EnrollmentModule } from './enrollment/enrollment.module';
import { LectureController } from './lecture/lecture.controller';
import { LectureService } from './lecture/lecture.service';
import { LectureModule } from './lecture/lecture.module';
import { SectionModule } from './section/section.module';
import { LectureProgressController } from './lecture-progress/lecture-progress.controller';
import { LectureProgressService } from './lecture-progress/lecture-progress.service';
import { LectureProgressModule } from './lecture-progress/lecture-progress.module';
import { QuizModule } from './quiz/quiz.module';
import { InstructorDashboardController } from './instructor-dashboard/instructor-dashboard.controller';
import { InstructorDashboardService } from './instructor-dashboard/instructor-dashboard.service';
import { InstructorDashboardModule } from './instructor-dashboard/instructor-dashboard.module';
import { AdminDashboardModule } from './admin-dashboard/admin-dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load: [config]
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    CourseModule,
    EnrollmentModule,
    LectureModule,
    SectionModule,
    LectureProgressModule,
    QuizModule,
    InstructorDashboardModule,
    AdminDashboardModule
  ],
  controllers: [AppController, CourseController, LectureController, LectureProgressController, InstructorDashboardController],
  providers: [AppService, CourseService, LectureService, LectureProgressService, InstructorDashboardService],
})
export class AppModule {}
