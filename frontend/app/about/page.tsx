import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
	Crown,
	Trophy,
	MessageCircle,
	Lightbulb,
	Lock,
	Flower,
} from "lucide-react";

export default function AboutPage() {
	const achievements = [
		{
			icon: Crown,
			title: "Trusted by Thousands",
			description:
				"We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
		},
		{
			icon: Trophy,
			title: "Award-Winning Courses",
			description:
				"Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
		},
		{
			icon: MessageCircle,
			title: "Positive Student Feedback",
			description:
				"We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
		},
		{
			icon: Lightbulb,
			title: "Industry Partnerships",
			description:
				"We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies.",
		},
	];

	const goals = [
		{
			icon: Lock,
			title: "Provide Practical Skills",
			description:
				"We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
		},
		{
			icon: Lightbulb,
			title: "Foster Creative Problem-Solving",
			description:
				"We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
		},
		{
			icon: Flower,
			title: "Promote Collaboration and Community",
			description:
				"We believe in the power of collaboration and networking. Our platform fosters a supportive community where learners can connect, share ideas, and grow together.",
		},
		{
			icon: Trophy,
			title: "Stay Ahead of the Curve",
			description:
				"The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
		},
	];

	return (
		<main className="min-h-screen bg-bg-light">
			<TopBanner />
			<Navbar />

			{/* About Section */}
			<section className="px-4 sm:px-6 lg:px-7.5 py-12 sm:py-16 lg:py-20 border-b">
				<div className="max-w-400 mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div>
							<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-darker">
								About Skillbridge
							</h1>
						</div>
						<div>
							<p className="text-base sm:text-lg text-text-gray-light">
								Welcome to our platform, where we are passionate
								about empowering individuals to master the world
								of design and development. We offer a wide range
								of online courses designed to equip learners
								with the skills and knowledge needed to thrive
								in the ever-evolving digital landscape.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Achievements Section */}
			<section className="px-4 sm:px-6 lg:px-7.5 py-12 sm:py-16 lg:py-20">
				<div className="max-w-400 mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold text-text-darker mb-2">
						Achievements
					</h2>
					<p className="text-base sm:text-lg text-text-gray-light mb-10">
						Our commitment to excellence has led us to achieve
						significant milestones along our journey. Here are some
						of our notable achievements:
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{achievements.map((achievement, idx) => {
							const IconComponent = achievement.icon;
							return (
								<div
									key={idx}
									className="bg-white rounded-xl p-6 sm:p-8 border border-bg-border"
								>
									<div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#E5F4FF] rounded-lg mb-4">
										<IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary-blue" />
									</div>
									<h3 className="text-lg sm:text-xl font-semibold text-text-darker mb-2">
										{achievement.title}
									</h3>
									<p className="text-sm sm:text-base text-text-gray-light">
										{achievement.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="px-4 sm:px-6 lg:px-7.5 py-12 sm:py-16 lg:py-20">
				<div className="max-w-400 mx-auto">
					<div className="bg-white rounded-xl border-4 border-primary-blue p-6 sm:p-8 lg:p-12">
						<h2 className="text-2xl sm:text-3xl font-bold text-text-darker mb-4">
							Our Goals
						</h2>
						<p className="text-base sm:text-lg text-text-gray-light mb-8">
							At SkillBridge, our goal is to empower individuals
							from all backgrounds to thrive in the world of
							design and development. We believe that education
							should be accessible and transformative, enabling
							learners to pursue their passions and make a
							meaningful impact. Through our carefully crafted
							courses, we aim to:
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
							{goals.map((goal, idx) => {
								const IconComponent = goal.icon;
								return (
									<div
										key={idx}
										className="bg-bg-lighter rounded-xl p-6 sm:p-8"
									>
										<div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#E5F4FF] rounded-lg mb-4">
											<IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary-blue" />
										</div>
										<h3 className="text-lg sm:text-xl font-semibold text-text-darker mb-2">
											{goal.title}
										</h3>
										<p className="text-sm sm:text-base text-text-gray-light">
											{goal.description}
										</p>
									</div>
								);
							})}
						</div>

						<div className="bg-bg-lighter rounded-xl p-6 sm:p-8">
							<p className="text-base sm:text-lg text-text-darker">
								<span className="bg-primary-blue text-white px-2 py-1 rounded">
									Together,
								</span>{" "}
								let's shape the future of digital innovation
							</p>
							<p className="text-base sm:text-lg text-text-gray-light mt-4">
								Join us on this exciting learning journey and
								unlock your potential in design and development.
							</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
