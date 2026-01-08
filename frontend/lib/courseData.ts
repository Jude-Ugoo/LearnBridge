// Types for course detail page
export interface Lesson {
	id: string;
	title: string;
	durationHours: number;
	durationMinutes: number;
}

export interface CurriculumSection {
	id: string;
	number: string;
	title: string;
	lessons: Lesson[];
}

export interface CourseDetail {
	id: string;
	title: string;
	description: string;
	heroImage: string;
	curriculum: CurriculumSection[];
}

// Helper functions for formatting
export const formatDuration = (hours: number, minutes: number): string => {
	if (hours > 0 && minutes > 0) {
		return `${hours < 10 ? "0" + hours : hours} Hour ${minutes} Minute`;
	} else if (hours > 0) {
		return `${hours < 10 ? "0" + hours : hours} Hour`;
	} else {
		return `${minutes} Minute`;
	}
};

// Mock data for courses
export const mockCourseData: Record<string, CourseDetail> = {
	"ui-ux-design": {
		id: "ui-ux-design",
		title: "UI/UX Design Course",
		description:
			"Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
		heroImage:
			"https://images.unsplash.com/photo-1595846870485-df6f64d1e510?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyMHx8UGVyc29uJTIwd29ya2luZyUyMG9uJTIwY29tcHV0ZXIlMjBzY3JlZW4lMjBzaG93aW5nJTIwVUklMkZVWCUyMGRlc2lnbiUyMHNvZnR3YXJlJTIwaW50ZXJmYWNlJTIwd2l0aCUyMHdpcmVmcmFtZXMlMjBhbmQlMjBtb2NrdXBzJTIwaW4lMjBwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjB3aXRoJTIwd2FybSUyMGxpZ2h0aW5nJTIwd2FybXxlbnwwfDB8fHwxNzY3NzA1MjA3fDA&ixlib=rb-4.1.0&q=85",
		curriculum: [
			{
				id: "section-1",
				number: "01",
				title: "Introduction to UI/UX Design",
				lessons: [
					{
						id: "lesson-1-1",
						title: "Understanding UI/UX Design Principles",
						durationHours: 1,
						durationMinutes: 0,
					},
					{
						id: "lesson-1-2",
						title: "Importance of User Experience Design",
						durationHours: 0,
						durationMinutes: 45,
					},
					{
						id: "lesson-1-3",
						title: "The Role of UI/UX Design in Product Development",
						durationHours: 0,
						durationMinutes: 30,
					},
					{
						id: "lesson-1-4",
						title: "Introduction to UI/UX Design Tools",
						durationHours: 1,
						durationMinutes: 0,
					},
				],
			},
			{
				id: "section-2",
				number: "02",
				title: "User Research and Analysis",
				lessons: [
					{
						id: "lesson-2-1",
						title: "Conducting User Research and Interviews",
						durationHours: 1,
						durationMinutes: 0,
					},
					{
						id: "lesson-2-2",
						title: "Analyzing User Needs and Behaviors",
						durationHours: 0,
						durationMinutes: 45,
					},
					{
						id: "lesson-2-3",
						title: "Creating User Personas",
						durationHours: 0,
						durationMinutes: 30,
					},
					{
						id: "lesson-2-4",
						title: "Mapping User Journeys and Scenarios",
						durationHours: 1,
						durationMinutes: 15,
					},
				],
			},
			{
				id: "section-3",
				number: "03",
				title: "Wireframing and Prototyping",
				lessons: [
					{
						id: "lesson-3-1",
						title: "Introduction to Wireframing Tools and Techniques",
						durationHours: 1,
						durationMinutes: 0,
					},
					{
						id: "lesson-3-2",
						title: "Creating Low-Fidelity Wireframes",
						durationHours: 1,
						durationMinutes: 30,
					},
					{
						id: "lesson-3-3",
						title: "Prototyping Interactions and Flows",
						durationHours: 2,
						durationMinutes: 0,
					},
					{
						id: "lesson-3-4",
						title: "Conducting Usability Tests with Prototypes",
						durationHours: 1,
						durationMinutes: 0,
					},
				],
			},
			{
				id: "section-4",
				number: "04",
				title: "Visual Design and Branding",
				lessons: [
					{
						id: "lesson-4-1",
						title: "Exploring Visual Design Principles",
						durationHours: 1,
						durationMinutes: 0,
					},
					{
						id: "lesson-4-2",
						title: "Understanding Color Theory and Typography",
						durationHours: 1,
						durationMinutes: 30,
					},
					{
						id: "lesson-4-3",
						title: "Creating a Strong Brand Identity",
						durationHours: 2,
						durationMinutes: 0,
					},
					{
						id: "lesson-4-4",
						title: "Designing Effective Call-to-Actions",
						durationHours: 0,
						durationMinutes: 45,
					},
				],
			},
			{
				id: "section-5",
				number: "05",
				title: "Usability Testing and Iteration",
				lessons: [
					{
						id: "lesson-5-1",
						title: "Planning and Conducting Usability Tests",
						durationHours: 1,
						durationMinutes: 30,
					},
					{
						id: "lesson-5-2",
						title: "Analyzing Usability Test Results",
						durationHours: 1,
						durationMinutes: 0,
					},
					{
						id: "lesson-5-3",
						title: "Iterating and Improving Designs",
						durationHours: 1,
						durationMinutes: 30,
					},
					{
						id: "lesson-5-4",
						title: "Incorporating User Feedback into Design",
						durationHours: 1,
						durationMinutes: 0,
					},
				],
			},
		],
	},
	"web-design": {
		id: "web-design",
		title: "Web Design Fundamentals",
		description:
			"Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
		heroImage:
			"https://images.pexels.com/photos/7888655/pexels-photo-7888655.jpeg",
		curriculum: [
			{
				id: "section-1",
				number: "01",
				title: "Introduction to HTML",
				lessons: [
					{
						id: "lesson-1-1",
						title: "Understanding HTML Basics",
						durationHours: 1,
						durationMinutes: 0,
					},
					{
						id: "lesson-1-2",
						title: "HTML Elements and Attributes",
						durationHours: 1,
						durationMinutes: 30,
					},
					{
						id: "lesson-1-3",
						title: "Creating HTML Forms",
						durationHours: 1,
						durationMinutes: 0,
					},
				],
			},
			{
				id: "section-2",
				number: "02",
				title: "Styling with CSS",
				lessons: [
					{
						id: "lesson-2-1",
						title: "CSS Selectors and Properties",
						durationHours: 1,
						durationMinutes: 30,
					},
					{
						id: "lesson-2-2",
						title: "CSS Box Model",
						durationHours: 1,
						durationMinutes: 0,
					},
					{
						id: "lesson-2-3",
						title: "Flexbox and Grid Layouts",
						durationHours: 2,
						durationMinutes: 0,
					},
				],
			},
			{
				id: "section-3",
				number: "03",
				title: "Introduction to Responsive Design",
				lessons: [
					{
						id: "lesson-3-1",
						title: "Media Queries",
						durationHours: 1,
						durationMinutes: 0,
					},
					{
						id: "lesson-3-2",
						title: "Mobile-First Design",
						durationHours: 1,
						durationMinutes: 30,
					},
				],
			},
			{
				id: "section-4",
				number: "04",
				title: "Design Principles for Web",
				lessons: [
					{
						id: "lesson-4-1",
						title: "Typography and Color",
						durationHours: 1,
						durationMinutes: 0,
					},
					{
						id: "lesson-4-2",
						title: "Layout and Composition",
						durationHours: 1,
						durationMinutes: 30,
					},
				],
			},
			{
				id: "section-5",
				number: "05",
				title: "Building a Basic Website",
				lessons: [
					{
						id: "lesson-5-1",
						title: "Project Planning",
						durationHours: 1,
						durationMinutes: 0,
					},
					{
						id: "lesson-5-2",
						title: "Building the Website",
						durationHours: 3,
						durationMinutes: 0,
					},
				],
			},
		],
	},
	"mobile-app-dev": {
		id: "mobile-app-dev",
		title: "Mobile App Development",
		description:
			"Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-standard frameworks like Swift and Kotlin.",
		heroImage: "https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg",
		curriculum: [
			{
				id: "section-1",
				number: "01",
				title: "Introduction to Mobile Development",
				lessons: [
					{
						id: "lesson-1-1",
						title: "Mobile Development Landscape",
						durationHours: 1,
						durationMinutes: 0,
					},
					{
						id: "lesson-1-2",
						title: "Choosing the Right Framework",
						durationHours: 0,
						durationMinutes: 45,
					},
				],
			},
			{
				id: "section-2",
				number: "02",
				title: "Fundamentals of Swift Programming (iOS)",
				lessons: [
					{
						id: "lesson-2-1",
						title: "Swift Syntax and Basics",
						durationHours: 2,
						durationMinutes: 0,
					},
					{
						id: "lesson-2-2",
						title: "Object-Oriented Programming in Swift",
						durationHours: 1,
						durationMinutes: 30,
					},
				],
			},
			{
				id: "section-3",
				number: "03",
				title: "Fundamentals of Kotlin Programming (Android)",
				lessons: [
					{
						id: "lesson-3-1",
						title: "Kotlin Syntax and Basics",
						durationHours: 2,
						durationMinutes: 0,
					},
					{
						id: "lesson-3-2",
						title: "Android Development with Kotlin",
						durationHours: 1,
						durationMinutes: 30,
					},
				],
			},
			{
				id: "section-4",
				number: "04",
				title: "Building User Interfaces",
				lessons: [
					{
						id: "lesson-4-1",
						title: "UI Components and Layouts",
						durationHours: 2,
						durationMinutes: 0,
					},
					{
						id: "lesson-4-2",
						title: "Navigation Patterns",
						durationHours: 1,
						durationMinutes: 30,
					},
				],
			},
			{
				id: "section-5",
				number: "05",
				title: "App Deployment and Testing",
				lessons: [
					{
						id: "lesson-5-1",
						title: "Testing Mobile Apps",
						durationHours: 1,
						durationMinutes: 30,
					},
					{
						id: "lesson-5-2",
						title: "Publishing to App Stores",
						durationHours: 1,
						durationMinutes: 0,
					},
				],
			},
		],
	},
};

// Function to get course by ID
export async function getCourseDetail(
	courseId: string,
): Promise<CourseDetail | null> {
	return mockCourseData[courseId] || null;
}