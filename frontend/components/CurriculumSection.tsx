"use client";

import { useState } from "react";
import { CurriculumSection as CurriculumSectionType } from "@/lib/courseData";
import LessonItem from "./LessonItem";

interface CurriculumSectionProps {
	section: CurriculumSectionType;
}

export default function CurriculumSection({ section }: CurriculumSectionProps) {
	const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

	return (
		<div className="bg-white rounded-lg p-6 sm:p-8 border border-bg-border">
			<div className="mb-6">
				<div className="text-[50px] sm:text-[60px] font-bold text-text-darker leading-none mb-4 text-end">
					{section.number}
				</div>
				<h3 className="text-[18px] sm:text-[20px] font-semibold text-text-darker">
					{section.title}
				</h3>
			</div>
			<div className="space-y-0">
				{section.lessons.map((lesson) => (
					<LessonItem
						key={lesson.id}
						lesson={lesson}
						isActive={lesson.id === activeLessonId}
						onClick={() => setActiveLessonId(lesson.id)}
					/>
				))}
			</div>
		</div>
	);
}
