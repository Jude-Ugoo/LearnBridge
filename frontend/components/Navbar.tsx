"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className="mx-4 sm:mx-6 lg:mx-7.5 py-4 sm:py-6 border-b border-bg-border">
			<div className="flex items-center justify-between">
				{/* Logo */}
				<Link href="/">
					<h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold cursor-pointer">
						LearnBridge
					</h1>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden lg:flex items-center gap-6.5">
					<Link
						href="/"
						className="text-text-dark text-[18px] font-normal hover:text-primary-blue"
					>
						Home
					</Link>
					<Link
						href="/courses"
						className="text-text-dark text-[18px] font-normal hover:text-primary-blue"
					>
						Courses
					</Link>
					<Link
						href="/about"
						className="text-text-dark text-[18px] font-normal hover:text-primary-blue"
					>
						About Us
					</Link>
					<a
						href="/pricing"
						className="text-text-dark text-[18px] font-normal hover:text-primary-blue"
					>
						Pricing
					</a>
					<Link
						href="/contact"
						className="text-text-dark text-[18px] font-normal hover:text-primary-blue"
					>
						Contact
					</Link>
				</div>

				{/* Desktop Auth Buttons */}
				<div className="hidden lg:flex items-center gap-7.5">
					<Link href="/signup">
						<Button
							variant="ghost"
							className="text-text-dark text-[18px] font-normal hover:bg-transparent hover:text-primary-blue"
						>
							Sign Up
						</Button>
					</Link>
					<Link href="/login">
						<Button className="bg-primary-blue w-29.25 h-13.75 text-white text-[18px] font-normal rounded-lg px-[24px] py-[14px] hover:bg-primary-orange-dark">
							Login
						</Button>
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="lg:hidden p-2 text-text-dark hover:text-primary-blue"
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="lg:hidden mt-4 py-4 border-t border-bg-border">
					<div className="flex flex-col gap-4">
						<Link
							href="/"
							className="text-text-dark text-base font-normal hover:text-primary-blue py-2"
						>
							Home
						</Link>
						<Link
							href="/courses"
							className="text-text-dark text-base font-normal hover:text-primary-blue py-2"
						>
							Courses
						</Link>
						<Link
							href="/about"
							className="text-text-dark text-base font-normal hover:text-primary-blue py-2"
						>
							About Us
						</Link>
						<a
							href="/pricing"
							className="text-text-dark text-base font-normal hover:text-primary-blue py-2"
						>
							Pricing
						</a>
						<Link
							href="/contact"
							className="text-text-dark text-base font-normal hover:text-primary-blue py-2"
						>
							Contact
						</Link>
						<div className="flex flex-col gap-3 pt-4 border-t border-bg-border">
							<Link href="/signup" className="w-full">
								<Button
									variant="ghost"
									className="text-text-dark text-base font-normal hover:bg-transparent hover:text-primary-blue w-full justify-center"
								>
									Sign Up
								</Button>
							</Link>
							<Link href="/login" className="w-full">
								<Button className="bg-primary-blue h-13.75 text-white text-base font-normal rounded-lg px-6 py-3 hover:bg-primary-orange-dark w-full">
									Login
								</Button>
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
