import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-white rounded-t-xl p-6 sm:p-8 lg:p-12.5 px-4 sm:px-8 lg:px-40">
			<div className="flex flex-col gap-8 sm:gap-10 lg:gap-12.5">
				{/* Footer Content */}
				<div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 lg:gap-7.5">
					{/* Left Column */}
					<div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full lg:w-auto">
						<h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold">
							LearnBridge
						</h1>
						<div className="flex flex-col gap-4 sm:gap-5 lg:gap-5">
							<div className="flex items-center gap-2 px-3 py-2 rounded-md">
								<Image
									src="/images/email-icon.svg"
									alt="Email"
									width={21}
									height={16}
									className="shrink-0"
								/>
								<span className="text-sm sm:text-base lg:text-[18px] text-text-dark truncate">
									hello@skillbridge.com
								</span>
							</div>
							<div className="flex items-center gap-2 px-3 py-2 rounded-md">
								<Image
									src="/images/phone-icon.svg"
									alt="Phone"
									width={21}
									height={21}
									className="shrink-0"
								/>
								<span className="text-sm sm:text-base lg:text-[18px] text-text-dark">
									+91 91813 23 2309
								</span>
							</div>
							<div className="flex items-center gap-2 px-3 py-2 rounded-md">
								<Image
									src="/images/location-icon.svg"
									alt="Location"
									width={16}
									height={20}
									className="shrink-0"
								/>
								<span className="text-sm sm:text-base lg:text-[18px] text-text-dark">
									Somewhere in the World
								</span>
							</div>
						</div>
					</div>

					{/* Navigation Columns */}
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-7.5 w-full lg:w-auto">
						<div className="flex flex-col gap-3 sm:gap-3.5">
							<h3 className="text-lg sm:text-[20px] font-semibold text-text-dark">
								Home
							</h3>
							<div className="flex flex-col gap-2">
								<a
									href="#"
									className="text-base sm:text-[18px] text-text-gray-light hover:text-primary-blue"
								>
									Benefits
								</a>
								<a
									href="#"
									className="text-base sm:text-[18px] text-text-gray-light hover:text-primary-blue"
								>
									Our Courses
								</a>
								<a
									href="#"
									className="text-base sm:text-[18px] text-text-gray-light hover:text-primary-blue"
								>
									Our Testimonials
								</a>
								<a
									href="#"
									className="text-base sm:text-[18px] text-text-gray-light hover:text-primary-blue"
								>
									Our FAQ
								</a>
							</div>
						</div>

						<div className="flex flex-col gap-3 sm:gap-3.5">
							<h3 className="text-lg sm:text-[20px] font-semibold text-text-dark">
								About Us
							</h3>
							<div className="flex flex-col gap-2">
								<a
									href="#"
									className="text-base sm:text-[18px] text-text-gray-light hover:text-primary-blue"
								>
									Company
								</a>
								<a
									href="#"
									className="text-base sm:text-[18px] text-text-gray-light hover:text-primary-blue"
								>
									Achievements
								</a>
								<a
									href="#"
									className="text-base sm:text-[18px] text-text-gray-light hover:text-primary-blue"
								>
									Our Goals
								</a>
							</div>
						</div>

						<div className="flex flex-col sm:gap-3.5">
							<h3 className="text-lg sm:text-[20px] font-semibold text-text-dark">
								Social Profiles
							</h3>
							<Image
								src="/images/social-icons.svg"
								alt="Social Media"
								width={184}
								height={52}
								className="mt-5 md:w-auto md:h-auto"
							/>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="border-t border-bg-border pt-6 sm:pt-7.5">
					<p className="text-sm sm:text-base lg:text-[18px] text-text-gray-lighter text-center">
						© 2023 Skillbridge. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
