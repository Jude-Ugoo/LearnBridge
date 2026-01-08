import { Clock } from "lucide-react";
import { formatDuration, Lesson } from "@/lib/courseData";

interface LessonItemProps {
	lesson: Lesson;
	isActive?: boolean;
	onClick?: () => void;
}

export default function LessonItem({
	lesson,
	isActive = false,
	onClick,
}: LessonItemProps) {
	const base =
		"flex items-center justify-between h-21.75 py-3.5 border px-3.5 rounded-lg my-1";
	const activeClasses = isActive
		? "border-primary-blue text-primary-blue"
		: "bg-white border-[#F7F7F8] hover:bg-[#F7F7F8]";

	const pillActive = isActive
		? "bg-white text-primary-blue"
		: "bg-[#F7F7F8] text-text-gray-light";

	return (
		<button
			type="button"
			onClick={onClick}
			className={`${base} ${activeClasses} hover:cursor-pointer w-full text-left`}
		>
			<span
				className={`text-[16px] sm:text-[18px] font-normal ${
					isActive ? "text-primary-blue" : "text-text-dark"
				}`}
			>
				{lesson.title}
			</span>
			<div
				className={`flex items-center gap-2 shrink-0 ml-4 py-1 px-2 rounded-sm ${pillActive}`}
			>
				<Clock
					className={`w-4 h-4 ${
						isActive ? "text-primary-blue" : "text-text-gray-light"
					}`}
				/>
				<span
					className={`${
						isActive ? "text-primary-blue" : "text-text-gray-light"
					} text-[14px] sm:text-[16px]`}
				>
					{formatDuration(
						lesson.durationHours,
						lesson.durationMinutes
					)}
				</span>
			</div>
		</button>
	);
}
