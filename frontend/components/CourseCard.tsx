"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Link from "next/link";

interface CurriculumItem {
	number: string;
	title: string;
}

interface Course {
	id: string;
	title: string;
	description: string;
	images: string[];
	duration: string;
	level: string;
	author: string;
	curriculum: CurriculumItem[];
}

interface CourseCardProps {
	course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
	return (
		<Card className="overflow-hidden bg-white">
			<div className="">
				<div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
					<div className="flex flex-col sm:flex-row justify-between sm:items-center sm:gap-4">
						<div className="flex-1">
							<h2 className="text-[18px] sm:text-[38px] font-semibold text-text-darker mb-4">
								{course.title}
							</h2>
							<p className="text-text-gray-light text-base sm:text-lg mb-6">
								{course.description}
							</p>
						</div>

						<div className="sm:ml-4 shrink-0 w-full sm:w-auto mb-3">
							<Link href={`/courses/${course.id}`}>
								<Button className="bg-transparent h-12.25 text-text-dark hover:bg-bg-border border border-bg-border w-fit sm:w-auto">
									View Course
								</Button>
							</Link>
						</div>
					</div>

					<div className="mt-5">
						<div className="grid grid-cols-3 gap-3 mb-5">
							<div className="relative overflow-hidden w-full h-40 sm:h-64 lg:h-80 rounded-md">
								<img
									src={course.images[0]}
									alt={`${course.title} preview 1`}
									className="absolute inset-0 w-full h-full object-cover"
								/>
							</div>
							<div className="relative overflow-hidden w-full h-40 sm:h-64 lg:h-80 rounded-md">
								<img
									src={course.images[1]}
									alt={`${course.title} preview 2`}
									className="absolute inset-0 w-full h-full object-cover"
								/>
							</div>
							<div className="relative overflow-hidden w-full h-40 sm:h-64 lg:h-80 rounded-md">
								<img
									src={course.images[2]}
									alt={`${course.title} preview 3`}
									className="absolute inset-0 w-full h-full object-cover"
								/>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row justify-between text-center">
							<div className="flex flex-wrap items-center gap-3 mb-5">
								<Badge
									variant="outline"
									className="bg-white border-bg-border text-text-medium px-4 py-2 text-sm"
								>
									{course.duration}
								</Badge>
								<Badge
									variant="outline"
									className="bg-white border-bg-border text-text-medium px-4 py-2 text-sm"
								>
									{course.level}
								</Badge>
							</div>

							<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
								<span className="text-text-dark font-medium text-[16px] sm:text-[20px]">
									{course.author}
								</span>
							</div>
						</div>
					</div>

					<div className="border border-[#F1F1F3] rounded-md p-5 mt-10">
						<h3 className="text-[18px] sm:text-[20px] font-semibold text-text-darker mb-4 border-b-2 border-[#F1F1F3] pb-5">
							Curriculum
						</h3>
						<div className="flex flex-col sm:flex-row gap-4 justify-between divide-y sm:divide-y-0 sm:divide-x divide-bg-border">
							{course.curriculum.map((item) => (
								<div
									key={item.number}
									className="flex flex-col py-4 sm:py-0 sm:px-6"
								>
									<span className="text-3xl sm:text-5xl font-bold text-text-darker mb-1">
										{item.number}
									</span>
									<span className="text-sm sm:text-base text-text-gray-light">
										{item.title}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</Card>
	);
}
