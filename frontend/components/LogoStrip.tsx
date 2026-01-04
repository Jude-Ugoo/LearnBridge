import Image from "next/image";

export default function LogoStrip() {
	const logos = [
		{
			src: "/images/logo-zapier.svg",
			alt: "Zapier",
			width: 67,
			height: 31,
		},
		{
			src: "/images/logo-spotify.svg",
			alt: "Spotify",
			width: 99,
			height: 30,
		},
		{ src: "/images/logo-zoom.svg", alt: "Zoom", width: 69, height: 16 },
		{
			src: "/images/logo-amazon.svg",
			alt: "Amazon",
			width: 78,
			height: 34,
		},
		{ src: "/images/logo-adobe.svg", alt: "Adobe", width: 94, height: 34 },
		{
			src: "/images/logo-notion.svg",
			alt: "Notion",
			width: 91,
			height: 24,
		},
		{
			src: "/images/logo-netflix.svg",
			alt: "Netflix",
			width: 79,
			height: 21,
		},
	];

	return (
		<div className="bg-[#FCFCFD] max-w-[1595px] w-full mx-auto px-4 sm:px-8 lg:px-[163px] py-8 sm:py-12 lg:py-[60px] rounded-md overflow-x-auto no-scrollbar">
			<div className="flex items-center justify-between gap-4 sm:gap-8 lg:gap-0 min-w-max lg:min-w-0">
				{logos.map((logo, index) => (
					<div key={index} className="flex items-center">
						<Image
							src={logo.src}
							alt={logo.alt}
							width={logo.width}
							height={logo.height}
							className="opacity-70 w-auto h-6 sm:h-8"
						/>
						{index < logos.length - 1 && (
							<div className="w-px h-12 sm:h-16 lg:h-[95px] bg-bg-border mx-4 sm:mx-8 lg:mx-[60px]" />
						)}
					</div>
				))}
			</div>
		</div>
	);
}
