"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, Plus } from "lucide-react";

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const faqs = [
		{
			question: "Can I enroll in multiple courses at once?",
			answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
			subQuestion: "Enrollment Process for Different Courses",
			hasSubContent: true,
		},
		{
			question: "What kind of support can I expect from instructors?",
			answer: "Our instructors provide comprehensive support through multiple channels including direct messaging, live Q&A sessions, and detailed feedback on assignments.",
			hasSubContent: false,
		},
		{
			question:
				"Are the courses self-paced or do they have specific start and end dates?",
			answer: "Most of our courses are self-paced, allowing you to learn at your own convenience. However, some courses may have specific cohorts with start dates for a more structured learning experience.",
			hasSubContent: false,
		},
		{
			question: "Are there any prerequisites for the courses?",
			answer: "Prerequisites vary by course. Each course page clearly lists any required knowledge or skills. Many beginner courses have no prerequisites.",
			hasSubContent: false,
		},
		{
			question: "Can I download the course materials for offline access?",
			answer: "Yes, most course materials including videos, PDFs, and resources can be downloaded for offline viewing and study.",
			hasSubContent: false,
		},
	];

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="px-4 sm:px-6 lg:px-[30px] py-12 sm:py-16 lg:py-[80px]">
			<div className="max-w-[1600px] mx-auto">
				<div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-8 sm:gap-12 lg:gap-[120px] bg-bg-lighter p-6 sm:p-12 lg:p-[100px] rounded-b-lg">
					{/* Left Column */}
					<div className="flex flex-col gap-8 sm:gap-10 lg:gap-[50px]">
						<div className="flex flex-col gap-2 sm:gap-[10px]">
							<h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-text-dark leading-tight">
								Frequently Asked Questions
							</h2>
							<p className="text-base sm:text-[18px] text-text-medium leading-relaxed">
								Still you have any questions? Contact our Team
								via support@skillbridge.com
							</p>
						</div>
						<Button
							variant="outline"
							className="w-full sm:w-fit text-base sm:text-[18px] font-medium text-text-dark rounded-lg px-6 py-3 sm:px-[24px] sm:py-[14px] border-bg-border hover:bg-bg-lighter"
						>
							See All FAQ's
						</Button>
					</div>

					{/* Right Column - FAQs */}
					<div className="flex flex-col gap-6 sm:gap-[30px]">
						{faqs.map((faq, index) => (
							<div key={index}>
								{openIndex === index && faq.hasSubContent ? (
									<Card className="p-6 sm:p-8 lg:p-[50px] border border-bg-border rounded-xl bg-white">
										<div className="flex flex-col gap-8 sm:gap-10 lg:gap-[50px]">
											<div className="flex items-start justify-between pb-6 sm:pb-[30px] border-b border-bg-border gap-4">
												<p className="text-lg sm:text-[20px] font-medium text-text-dark flex-1">
													{faq.question}
												</p>
												<button
													onClick={() => toggleFAQ(index)}
													className="h-[40px] w-[40px] sm:h-[52px] sm:w-[52px] flex items-center justify-center bg-[#FFF4F0] rounded-md shrink-0 hover:bg-[#FFE8DD] transition-colors"
												>
													<X className="h-5 w-5 sm:h-6 sm:w-6 text-text-dark" />
												</button>
											</div>
											<p className="text-base sm:text-[18px] text-text-gray leading-relaxed">
												{faq.answer}
											</p>
											<div className="flex items-center justify-between p-5 sm:p-6 lg:p-[24px] bg-bg-light rounded-lg gap-4">
												<p className="text-base sm:text-[18px] font-medium text-text-medium">
													{faq.subQuestion}
												</p>
												<Image
													src="/images/chevron-right.svg"
													alt="Expand"
													width={17}
													height={16}
													className="shrink-0"
												/>
											</div>
										</div>
									</Card>
								) : openIndex === index ? (
									<Card className="p-6 sm:p-8 lg:p-[50px] border border-bg-border rounded-xl bg-white">
										<div className="flex flex-col gap-8 sm:gap-10 lg:gap-[50px]">
											<div className="flex items-start justify-between gap-4">
												<p className="text-lg sm:text-[20px] font-medium text-text-dark flex-1">
													{faq.question}
												</p>
												<button
													onClick={() => toggleFAQ(index)}
													className="h-[40px] w-[40px] sm:h-[52px] sm:w-[52px] flex items-center justify-center bg-[#FFF4F0] rounded-md shrink-0 hover:bg-[#FFE8DD] transition-colors"
												>
													<X className="h-5 w-5 sm:h-6 sm:w-6 text-text-dark" />
												</button>
											</div>
											<p className="text-base sm:text-[18px] text-text-gray leading-relaxed">
												{faq.answer}
											</p>
										</div>
									</Card>
								) : (
									<div 
										className="flex items-center justify-between py-6 sm:py-[30px] border-b border-bg-border gap-4 cursor-pointer group"
										onClick={() => toggleFAQ(index)}
									>
										<p className="text-lg sm:text-[20px] font-medium text-text-dark flex-1">
											{faq.question}
										</p>
										<button className="h-[40px] w-[40px] sm:h-[52px] sm:w-[52px] flex items-center justify-center bg-[#F7F7F8] rounded-md shrink-0 group-hover:bg-[#EEEEEF] transition-colors">
											<Plus className="h-5 w-5 sm:h-6 sm:w-6 text-text-dark" />
										</button>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}