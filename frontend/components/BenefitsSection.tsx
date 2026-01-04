import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";

export default function BenefitsSection() {
	const benefits = [
		{
			number: "01",
			title: "Flexible Learning Schedule",
			description:
				"Fit your coursework around your existing commitments and obligations.",
			iconColor: "orange",
		},
		{
			number: "02",
			title: "Expert Instruction",
			description:
				"Learn from industry experts who have hands-on experience in design and development.",
			iconColor: "orange-alt",
		},
		{
			number: "03",
			title: "Diverse Course Offerings",
			description:
				"Explore a wide range of design and development courses covering various topics.",
			iconColor: "orange-alt",
		},
		{
			number: "04",
			title: "Updated Curriculum",
			description:
				"Access courses with up-to-date content reflecting the latest trends and industry practices.",
			iconColor: "orange",
		},
		{
			number: "05",
			title: "Practical Projects and Assignments",
			description:
				"Develop a portfolio showcasing your skills and abilities to potential employers.",
			iconColor: "orange-alt",
		},
		{
			number: "06",
			title: "Interactive Learning Environment",
			description:
				"Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
			iconColor: "orange-alt",
		},
	];

	return (
		<section className="px-4 sm:px-6 lg:px-[30px] py-12 sm:py-16 lg:py-[80px]">
			<div className="max-w-[1600px] mx-auto">
				{/* Section Header */}
				<div className="flex flex-col sm:flex-row items-start justify-between mb-12 sm:mb-16 lg:mb-[80px] gap-6">
					<div className="flex flex-col gap-2 lg:gap-[6px] max-w-full sm:max-w-[70%] lg:max-w-[1177px]">
						<h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-text-dark">
							Benefits
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

				{/* Benefits Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[30px]">
					{benefits.map((benefit, index) => (
						<Card
							key={index}
							className="p-8 sm:p-10 lg:p-[50px] border border-bg-border rounded-xl bg-white flex flex-col gap-8 sm:gap-10 lg:gap-[50px]"
						>
							<p className="text-6xl sm:text-7xl lg:text-large-number text-text-dark self-end leading-none">
								{benefit.number}
							</p>
							<div className="flex flex-col gap-3 sm:gap-[14px]">
								<h3 className="text-xl sm:text-2xl lg:text-[24px] font-semibold text-text-medium leading-tight">
									{benefit.title}
								</h3>
								<p className="text-base sm:text-[18px] text-text-gray leading-relaxed">
									{benefit.description}
								</p>
							</div>
							<div className="flex self-end h-16 w-16 sm:h-[74px] sm:w-[74px] rounded-sm items-center justify-center bg-[#F7F7F8] cursor-pointer">
								<svg
									width="30"
									height="30"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="w-6 h-6 sm:w-[30px] sm:h-[30px]"
								>
									<path
										d="M7 17L17 7M17 7H7M17 7V17"
										stroke="#00AEFF"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}