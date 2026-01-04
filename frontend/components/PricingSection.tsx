"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PricingSection({ showHeader = true }) {
	const [isMonthly, setIsMonthly] = useState(true);
	const [freePlanExpanded, setFreePlanExpanded] = useState(true);
	const [proPlanExpanded, setProPlanExpanded] = useState(true);

	const freePlanFeatures = [
		{ text: "Access to selected free courses.", included: true },
		{ text: "Limited course materials and resources.", included: true },
		{ text: "Basic community support.", included: true },
		{ text: "No certification upon completion.", included: true },
		{ text: "Ad-supported platform.", included: true },
		{
			text: "Access to exclusive Pro Plan community forums.",
			included: false,
		},
		{ text: "Early access to new courses and updates.", included: false },
	];

	const proPlanFeatures = [
		{ text: "Unlimited access to all courses.", included: true },
		{ text: "Unlimited course materials and resources.", included: true },
		{ text: "Priority support from instructors.", included: true },
		{ text: "Course completion certificates.", included: true },
		{ text: "Ad-free experience.", included: true },
		{
			text: "Access to exclusive Pro Plan community forums.",
			included: true,
		},
		{ text: "Early access to new courses and updates.", included: true },
	];

	return (
		<section className="px-4 sm:px-6 lg:px-[30px] py-12 sm:py-16 lg:py-[80px]">
			<div className="max-w-[1600px] mx-auto">
				{/* Section Header */}
				<div
					className={`flex flex-col lg:flex-row ${
						showHeader
							? "items-start justify-between"
							: "items-center justify-center"
					} mb-12 sm:mb-16 lg:mb-[80px] gap-6`}
				>
					{showHeader && (
						<div className="flex flex-col gap-2 lg:gap-[6px] max-w-full lg:max-w-[1025px]">
							<h2 className="heading-lg text-text-dark text-3xl sm:text-4xl lg:text-[48px]">
								Our Pricing
							</h2>
							<p className="text-base sm:text-[18px] font-normal text-[#59595A] leading-relaxed">
								Lorem ipsum dolor sit amet consectetur. Tempus
								tincidunt etiam eget elit id imperdiet et. Cras
								eu sit dignissim lorem nibh et. Ac cum eget
								habitasse in velit fringilla feugiat senectus
								in.
							</p>
						</div>
					)}
					<div
						className={`flex items-center gap-4 sm:gap-[30px] bg-white border border-bg-border rounded-lg p-2 sm:p-[12px] ${
							showHeader ? "w-full sm:w-auto" : "w-auto"
						}`}
					>
						<button
							onClick={() => setIsMonthly(true)}
							className={`flex-1 sm:flex-none px-5 sm:px-[24px] py-3 sm:py-[14px] rounded-lg text-base sm:text-[18px] font-medium transition-colors ${
								isMonthly
									? "bg-primary-blue text-white"
									: "text-text-dark hover:bg-bg-lighter"
							}`}
						>
							Monthly
						</button>
						<button
							onClick={() => setIsMonthly(false)}
							className={`flex-1 sm:flex-none px-5 sm:px-[24px] py-3 sm:py-[14px] rounded-lg text-base sm:text-[18px] font-medium transition-colors ${
								!isMonthly
									? "bg-primary-blue text-white"
									: "text-text-dark hover:bg-bg-lighter"
							}`}
						>
							Yearly
						</button>
					</div>
				</div>

				{/* Pricing Cards */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-[30px] bg-bg-lighter p-6 sm:p-8 lg:p-[50px] rounded-lg">
					{/* Free Plan */}
					<Card className="bg-bg-lighter border border-[#FCFCFD] rounded-md p-6 sm:p-8 lg:p-[50px]">
						<div className="flex flex-col gap-8 sm:gap-10 lg:gap-[50px]">
							<div className="text-lg sm:text-[22px] font-medium text-text-dark text-center w-full h-[55px] sm:h-[61px] bg-[#E5F4FF] rounded-md flex items-center justify-center">
								Free Plan
							</div>
							<div className="flex items-end justify-center gap-2 sm:gap-[8px]">
								<span className="text-5xl sm:text-6xl lg:text-[80px] font-semibold text-text-dark leading-none">
									$0
								</span>
								<span className="text-base sm:text-lg lg:text-[20px] font-medium text-text-gray mb-1 sm:mb-[8px]">
									/month
								</span>
							</div>
							<div className="border border-bg-border rounded-t-[14px] bg-white p-6 sm:p-8 lg:p-[40px]">
								<div className="flex flex-col gap-6 sm:gap-[30px]">
									<div
										className="flex items-center justify-between cursor-pointer group"
										onClick={() =>
											setFreePlanExpanded(
												!freePlanExpanded
											)
										}
									>
										<p className="text-lg sm:text-[20px] font-medium text-text-dark text-center flex-1">
											Available Features
										</p>
										<button className="h-[40px] w-[40px] flex items-center justify-center bg-[#F7F7F8] rounded-md shrink-0 group-hover:bg-[#EEEEEF] transition-colors">
											{freePlanExpanded ? (
												<ChevronUp className="h-5 w-5 text-text-dark" />
											) : (
												<ChevronDown className="h-5 w-5 text-text-dark" />
											)}
										</button>
									</div>
									{freePlanExpanded && (
										<div className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px]">
											{freePlanFeatures.map(
												(feature, index) => (
													<div
														key={index}
														className="flex items-start gap-3 sm:gap-[12px] p-3 sm:p-4 lg:p-[16px] border border-bg-border rounded-lg"
													>
														<Image
															src={
																feature.included
																	? "/images/check-dark.svg"
																	: "/images/cross-icon.svg"
															}
															alt="Check"
															width={14}
															height={12}
															className="mt-1 shrink-0"
														/>
														<p className="text-sm sm:text-base lg:text-[18px] text-text-gray flex-1">
															{feature.text}
														</p>
													</div>
												)
											)}
										</div>
									)}
								</div>
							</div>
							<Button className="w-full h-[55px] sm:h-[61px] bg-primary-blue text-white text-base sm:text-[18px] font-semibold rounded-lg py-3 sm:py-[18px] hover:bg-primary-blue-dark">
								Get Started
							</Button>
						</div>
					</Card>

					{/* Pro Plan */}
					<Card className="bg-bg-lighter border border-[#FCFCFD] rounded-xl p-6 sm:p-8 lg:p-[50px]">
						<div className="flex flex-col gap-8 sm:gap-10 lg:gap-[50px]">
							<div className="text-lg sm:text-[22px] font-medium text-text-dark text-center w-full h-[55px] sm:h-[61px] bg-[#E5F4FF] rounded-md flex items-center justify-center">
								Pro Plan
							</div>
							<div className="flex items-end justify-center gap-2 sm:gap-[8px]">
								<span className="text-5xl sm:text-6xl lg:text-[80px] font-semibold text-text-dark leading-none">
									$79
								</span>
								<span className="text-base sm:text-lg lg:text-[20px] font-medium text-text-gray mb-1 sm:mb-[8px]">
									/month
								</span>
							</div>
							<div className="border border-bg-border rounded-t-[14px] bg-white p-6 sm:p-8 lg:p-[40px]">
								<div className="flex flex-col gap-6 sm:gap-[30px]">
									<div
										className="flex items-center justify-between cursor-pointer group"
										onClick={() =>
											setProPlanExpanded(!proPlanExpanded)
										}
									>
										<p className="text-lg sm:text-[20px] font-medium text-text-dark text-center flex-1">
											Available Features
										</p>
										<button className="h-[40px] w-[40px] flex items-center justify-center bg-[#F7F7F8] rounded-md shrink-0 group-hover:bg-[#EEEEEF] transition-colors">
											{proPlanExpanded ? (
												<ChevronUp className="h-5 w-5 text-text-dark" />
											) : (
												<ChevronDown className="h-5 w-5 text-text-dark" />
											)}
										</button>
									</div>
									{proPlanExpanded && (
										<div className="flex flex-col gap-4 sm:gap-5 lg:gap-[20px]">
											{proPlanFeatures.map(
												(feature, index) => (
													<div
														key={index}
														className="flex items-start gap-3 sm:gap-[12px] p-3 sm:p-4 lg:p-[16px] border border-bg-border rounded-lg"
													>
														<Image
															src={
																feature.included
																	? "/images/check-white.svg"
																	: "/images/cross-icon.svg"
															}
															alt="Check"
															width={14}
															height={12}
															className="mt-1 shrink-0"
														/>
														<p className="text-sm sm:text-base lg:text-[18px] text-text-gray flex-1">
															{feature.text}
														</p>
													</div>
												)
											)}
										</div>
									)}
								</div>
							</div>
							<Button className="w-full h-[55px] sm:h-[61px] bg-primary-blue text-white text-base sm:text-[18px] font-semibold rounded-lg py-3 sm:py-[18px] hover:bg-primary-blue-dark">
								Get Started
							</Button>
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
}
