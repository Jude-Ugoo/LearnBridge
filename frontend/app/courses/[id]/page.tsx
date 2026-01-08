import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurriculumSection from "@/components/CurriculumSection";
import { getCourseDetail } from "@/lib/courseData";
import TopBanner from "@/components/TopBanner";
import VideoHighlightSection from "@/components/VideoHighlightSection";

interface CourseDetailPageProps {
	params: Promise<{
		id: string;
	}>;
}

export default async function CourseDetailPage({
	params,
}: CourseDetailPageProps) {
	const { id } = await params;
	const course = await getCourseDetail(id);

	if (!course) {
		notFound();
	}

	return (
		<main className="min-h-screen bg-bg-light">
			<TopBanner />
			<Navbar />

			{/* Course Header */}
			<section className="px-4 sm:px-6 lg:px-7.5 py-8 sm:py-12 lg:py-16">
				<div className="max-w-400 mx-auto flex flex-col sm:flex-row justify-between text-center">
					<h1 className="text-[28px] sm:text-[38px] lg:text-[48px] font-bold text-text-darker mb-4">
						{course.title}
					</h1>
					<p className="text-[16px] sm:text-[18px] text-text-gray-light max-w-3xl">
						{course.description}
					</p>
				</div>
			</section>

			<VideoHighlightSection />

			{/* Curriculum Sections */}
			<section className="px-4 sm:px-6 lg:px-7.5 pb-12 sm:pb-16 lg:pb-20">
				<div className="max-w-400 mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
						{course.curriculum.map((section) => (
							<CurriculumSection
								key={section.id}
								section={section}
							/>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
