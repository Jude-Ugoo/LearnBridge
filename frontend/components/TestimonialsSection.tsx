import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";

export default function TestimonialsSection() {
	const testimonials = [
		{
			text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
			name: "Sarah L",
			avatar: "/images/avatar-1.png",
		},
		{
			text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
			name: "Jason M",
			avatar: "/images/avatar-2.png",
		},
		{
			text: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
			name: "Emily R",
			avatar: "/images/avatar-3.png",
		},
		{
			text: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
			name: "Michael K",
			avatar: "/images/avatar-4.png",
		},
	];

	return (
		<section className="px-4 sm:px-6 lg:px-[30px] py-12 sm:py-16 lg:py-[80px]">
			<div className="max-w-[1600px] mx-auto">
				{/* Section Header */}
				<div className="flex flex-col sm:flex-row items-start justify-between mb-12 sm:mb-16 lg:mb-[80px] gap-6">
					<div className="flex flex-col gap-2 lg:gap-[6px] max-w-full sm:max-w-[70%] lg:max-w-[1177px]">
						<h2 className="heading-lg text-text-dark text-3xl sm:text-4xl lg:text-[48px]">
							Our Testimonials
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

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-[28px]">
					{testimonials.map((testimonial, index) => (
						<Card
							key={index}
							className="p-6 sm:p-8 lg:p-[50px] border border-bg-border rounded-xl bg-white"
						>
							<div className="flex flex-col gap-8 sm:gap-10 lg:gap-[50px]">
								<p className="text-base sm:text-[18px] text-text-gray leading-relaxed">
									{testimonial.text}
								</p>
								<div className="border-t border-bg-border pt-6 sm:pt-[30px]">
									<div className="flex flex-row items-start sm:items-center justify-between bg-bg-lighter p-5 sm:p-6 lg:p-[30px] rounded-lg gap-4">
										<div className="flex flex-1 items-center gap-3 sm:gap-[15px]">
											<Image
												src={testimonial.avatar}
												alt={testimonial.name}
												width={60}
												height={60}
												className="rounded-sm h-12 w-12 sm:h-[60px] sm:w-[60px] object-cover"
											/>
											<p className="text-base sm:text-[18px] font-semibold text-text-medium">
												{testimonial.name}
											</p>
										</div>
										<Button className="w-fit sm:w-fit h-[55px] sm:h-[63px] bg-[#F1F1F3] text-[#4C4C4D] text-sm sm:text-[18px] font-medium rounded-sm px-5 sm:px-6 py-3 border border-bg-border hover:bg-bg-border hover:text-primary-blue">
											Read Full Story
										</Button>
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
