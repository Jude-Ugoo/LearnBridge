import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CoursesSection() {
	const courses = [
		{
			image: "/images/course-1.png",
			duration: "4 Weeks",
			level: "Beginner",
			instructor: "By John Smith",
			title: "Web Design Fundamentals",
			description:
				"Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
		},
		{
			image: "/images/course-2.png",
			duration: "6 Weeks",
			level: "Intermediate",
			instructor: "By Emily Johnson",
			title: "UI/UX Design",
			description:
				"Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
		},
		{
			image: "/images/course-3.png",
			duration: "8 Weeks",
			level: "Intermediate",
			instructor: "By David Brown",
			title: "Mobile App Development",
			description:
				"Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
		},
		{
			image: "/images/course-4.png",
			duration: "10 Weeks",
			level: "Beginner",
			instructor: "By Sarah Thompson",
			title: "Graphic Design for Beginners",
			description:
				"Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
		},
		{
			image: "/images/course-5.png",
			duration: "10 Weeks",
			level: "Intermediate",
			instructor: "By Michael Adams",
			title: "Front-End Web Development",
			description:
				"Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
		},
		{
			image: "/images/course-6.png",
			duration: "6 Weeks",
			level: "Advance",
			instructor: "By Jennifer Wilson",
			title: "Advanced JavaScript",
			description:
				"Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
		},
	];

	return (
		<section className="px-4 sm:px-6 lg:px-[30px] py-12 sm:py-16 lg:py-[80px]">
			<div className="max-w-[1600px] mx-auto">
				{/* Section Header */}
				<div className="flex flex-col sm:flex-row items-start justify-between mb-12 sm:mb-16 lg:mb-[80px] gap-6">
					<div className="flex flex-col gap-2 lg:gap-[6px] max-w-full sm:max-w-[70%] lg:max-w-[1177px]">
						<h2 className="heading-lg text-text-dark text-3xl sm:text-4xl lg:text-[48px]">
							Our Courses
						</h2>
						<p className="text-base sm:text-[18px] font-normal text-[#59595A] leading-relaxed">
							Lorem ipsum dolor sit amet consectetur. Tempus
							tincidunt etiam eget elit id imperdiet et. Cras eu
							sit dignissim lorem nibh et. Ac cum eget habitasse
							in velit fringilla feugiat senectus in.
						</p>
					</div>
					<Button className="h-[55px] sm:h-[63px] w-[120px] text-base sm:text-[18px] font-medium text-text-dark bg-[#FCFCFD] hover:bg-[#FCFCFD] hover:text-primary-blue shrink-0">
						View All
					</Button>
				</div>

				{/* Courses Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-[30px]">
					{courses.map((course, index) => (
						<Card
							key={index}
							className="border border-bg-border rounded-md bg-white overflow-hidden flex flex-col"
						>
							{/* Image */}
							<div className="relative w-full h-64 sm:h-80 lg:h-[380px] overflow-hidden">
								<Image
									src={course.image}
									alt={course.title}
									fill
									className="object-cover"
								/>
							</div>

							{/* Content */}
							<div className="p-6 sm:p-8 lg:pb-[50px] lg:px-[50px] lg:py-[10px] flex flex-col gap-6 sm:gap-[30px] flex-1">
								{/* Badges and Instructor */}
								<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
									<div className="flex items-center gap-2 sm:gap-[10px]">
										<Badge
											variant="outline"
											className="px-3 py-1 sm:px-[12px] sm:py-[6px] bg-white text-text-gray text-sm sm:text-[18px] font-normal border-bg-border rounded-md"
										>
											{course.duration}
										</Badge>
										<Badge
											variant="outline"
											className="px-3 py-1 sm:px-[12px] sm:py-[6px] bg-white text-text-gray text-sm sm:text-[18px] font-normal border-bg-border rounded-md"
										>
											{course.level}
										</Badge>
									</div>
									<p className="text-sm sm:text-[18px] font-normal text-text-gray">
										{course.instructor}
									</p>
								</div>

								{/* Title and Description */}
								<div className="flex flex-col gap-3 sm:gap-[14px]">
									<h3 className="text-xl sm:text-2xl lg:text-[24px] font-semibold text-text-dark leading-tight">
										{course.title}
									</h3>
									<p className="text-base sm:text-[18px] text-text-gray leading-relaxed">
										{course.description}
									</p>
								</div>

								{/* Button */}
								<div className="mt-auto">
									<Button className="w-full h-[55px] sm:h-[63px] bg-[#F1F1F3] text-text-dark text-base sm:text-[18px] font-medium rounded-sm px-6 py-3 border border-bg-border hover:bg-bg-border hover:text-primary-blue">
										Get it Now
									</Button>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}