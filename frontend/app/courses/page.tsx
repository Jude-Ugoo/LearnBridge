import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";

export default function CoursesPage() {
	const courses = [
		{
			id: "web-design",
			title: "Web Design Fundamentals",
			description:
				"Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
			images: [
				"https://images.pexels.com/photos/7888655/pexels-photo-7888655.jpeg",
				"https://images.unsplash.com/photo-1641630376356-fb9e646b0ea4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxQZXJzb24lMjB1c2luZyUyMHRhYmxldCUyMHRvJTIwcmV2aWV3JTIwVUklMkZVWCUyMGRlc2lnbiUyMG1vY2t1cHMlMjBhbmQlMjB3aXJlZnJhbWVzJTIwd2FybXxlbnwwfDB8fHwxNzY3MjEzMTE4fDA&ixlib=rb-4.1.0&q=85",
				"https://images.pexels.com/photos/3471423/pexels-photo-3471423.jpeg",
			],
			duration: "4 Weeks",
			level: "Beginner",
			author: "By John Smith",
			curriculum: [
				{ number: "01", title: "Introduction to HTML" },
				{ number: "02", title: "Styling with CSS" },
				{ number: "03", title: "Introduction to Responsive Design" },
				{ number: "04", title: "Design Principles for Web" },
				{ number: "05", title: "Building a Basic Website" },
			],
		},
		{
			id: "ui-ux-design",
			title: "UI/UX Design",
			description:
				"Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
			images: [
				"https://images.unsplash.com/photo-1595846870485-df6f64d1e510?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxQZXJzb24lMjB3b3JraW5nJTIwb24lMjBjb21wdXRlciUyMHNjcmVlbiUyMHNob3dpbmclMjBVSSUyMGRlc2lnbiUyMHNvZnR3YXJlJTIwd2FybXxlbnwwfDB8fHwxNzY3MjEzMTE4fDA&ixlib=rb-4.1.0&q=85",
				"https://images.unsplash.com/photo-1565687950692-520fa91191d0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxEZXNpZ25lciUyMGFycmFuZ2luZyUyMHN0aWNreSUyMG5vdGVzJTIwYW5kJTIwcGxhbm5pbmclMjB1c2VyJTIwZmxvdyUyMHdhcm18ZW58MHwwfHx8MTc2NzIxMzExOHww&ixlib=rb-4.1.0&q=85",
				"https://images.pexels.com/photos/7964034/pexels-photo-7964034.jpeg",
			],
			duration: "6 Weeks",
			level: "Intermediate",
			author: "By Emily Johnson",
			curriculum: [
				{ number: "01", title: "Introduction to UI/UX Design" },
				{ number: "02", title: "User Research and Analysis" },
				{ number: "03", title: "Wireframing and Prototyping" },
				{ number: "04", title: "Visual Design and Branding" },
				{ number: "05", title: "Usability Testing and Iteration" },
			],
		},
		{
			id: "mobile-app-dev",
			title: "Mobile App Development",
			description:
				"Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-standard frameworks like Swift and Kotlin.",
			images: [
				"https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg",
				"https://images.unsplash.com/photo-1599009432031-ba5d3a794aec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxEZXNpZ25lciUyMHNrZXRjaGluZyUyMG1vYmlsZSUyMGFwcCUyMHdpcmVmcmFtZXMlMjBvbiUyMHdoaXRlYm9hcmQlMjB3YXJtfGVufDB8MHx8fDE3NjcyMTMxMTh8MA&ixlib=rb-4.1.0&q=85",
				"https://images.pexels.com/photos/7014931/pexels-photo-7014931.jpeg",
			],
			duration: "8 Weeks",
			level: "Intermediate",
			author: "By David Brown",
			curriculum: [
				{ number: "01", title: "Introduction to Mobile Development" },
				{
					number: "02",
					title: "Fundamentals of Swift Programming (iOS)",
				},
				{
					number: "03",
					title: "Fundamentals of Kotlin Programming (Android)",
				},
				{ number: "04", title: "Building User Interfaces" },
				{ number: "05", title: "App Deployment and Testing" },
			],
		},
	];

	return (
		<main className="min-h-screen bg-bg-light">
			<TopBanner />
			<Navbar />

			{/* Hero Section */}
			<section className="px-4 sm:px-6 lg:px-7.5 py-12 sm:py-16 lg:py-20 border-b">
				<div className="max-w-400 mx-auto">
					<div className="flex flex-col lg:flex-row justify-between gap-3">
						<div className="md:flex-1">
							<h1 className="text-[28px] sm:text-[38px] mb-4">
								Online Courses on Design and Development
							</h1>
						</div>
						<div className="md:flex-1">
							<p className="text-[14px] sm:text-[18px] text-text-gray-light">
								Welcome to our online course page, where you can
								enhance your skills in design and development.
								Choose from our carefully curated selection of
								10 courses designed to provide you with
								comprehensive knowledge and practical
								experience. Explore the courses below and find
								the perfect fit for your learning journey.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Courses Grid */}
			<section className="px-4 sm:px-6 lg:px-7.5 py-12 sm:py-16 lg:py-20">
				<div className="max-w-400 mx-auto">
					<div className="grid grid-cols-1 gap-10">
						{courses.map((course) => (
							<CourseCard key={course.id} course={course} />
						))}
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
