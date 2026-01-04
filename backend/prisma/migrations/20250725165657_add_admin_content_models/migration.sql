-- CreateEnum
CREATE TYPE "CourseStatus" AS ENUM ('DRAFT', 'UNDER_REVIEW', 'PUBLISHED', 'REJECTED');

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "price" DOUBLE PRECISION,
ADD COLUMN     "status" "CourseStatus" NOT NULL DEFAULT 'DRAFT';
