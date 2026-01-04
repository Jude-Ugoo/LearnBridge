import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section className="px-4 sm:px-6 lg:px-7.5 py-8 sm:py-12 lg:py-15">
			<div className="max-w-7xl mx-auto flex flex-col items-center gap-8 sm:gap-12 lg:gap-15">
				{/* Hero Text */}
				<div className="flex flex-col items-center w-full gap-4 sm:gap-6 lg:gap-2.5 text-center">
					<div className="flex justify-center items-center gap-2 sm:gap-2.5 px-2 sm:pr-7.5 sm:pl-5 py-3 sm:py-3.5 border border-bg-border rounded-[11px] bg-bg-lighter w-full sm:w-auto">
						<div className="h-12.5 w-12.5 sm:h-15.5 sm:w-15.5 flex items-center justify-center bg-[#E5F4FF] rounded-sm shrink-0">
							<Image
								src="/images/hero-vec-svg.svg"
								alt="Icon"
								width={20}
								height={20}
								className="w-5 h-5"
							/>
						</div>

						<h1 className="text-3xl lg:text-[48px] font-semibold text-[#1A1A1A] leading-tight">
							<span className="text-primary-blue">Unlock</span>{" "}
							Your Creative Potential
						</h1>
					</div>
					<div className="flex flex-col gap-2 sm:gap-2.5">
						<p className="text-lg sm:text-2xl lg:text-[38px] font-medium text-text-dark leading-tight">
							with Online Design and Development Courses.
						</p>
						<p className="text-sm sm:text-base lg:text-[18px] font-normal text-text-dark">
							Learn from Industry Experts and Enhance Your Skills.
						</p>
					</div>
				</div>

				{/* CTA Buttons */}
				<div className="flex flex-row sm:flex-row items-center gap-3 sm:gap-[12px] w-auto">
					<Button className="bg-primary-blue w-fit sm:w-[195px] h-[55px] sm:h-[63px] text-white text-base sm:text-[18px] font-semibold rounded-lg px-6 py-3 hover:bg-primary-blue-dark">
						Explore Courses
					</Button>
					<Button
						variant="outline"
						className="text-text-dark w-fit sm:w-[195px] h-[55px] sm:h-[63px] text-base sm:text-[18px] font-medium rounded-lg px-6 py-3 border-bg-border hover:bg-bg-lighter"
					>
						View Pricing
					</Button>
				</div>
			</div>
		</section>
	);
}
