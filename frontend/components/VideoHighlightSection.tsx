import Image from "next/image";

export default function VideoHighlightSection() {
	return (
		<div className="max-w-[1595px] w-full mx-auto px-4 sm:px-6 lg:px-0 my-8 sm:my-12 lg:my-[60px]">
			<div className="relative w-full aspect-video lg:h-[790px] rounded-md overflow-hidden">
				<Image
					src="/images/video-container-2.jpg"
					alt="Video thumbnail"
					fill
					className="object-cover"
				/>
				<div className="absolute inset-0 flex items-center justify-center bg-black/20">
					<div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="ml-1"
						>
							<path
								d="M8 5V19L19 12L8 5Z"
								fill="currentColor"
								className="text-black"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}