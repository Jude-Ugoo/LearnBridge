"use client";

import { useState } from "react";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function LoginPage() {
	const [showPassword, setShowPassword] = useState(false);

	const testimonials = [
		{
			text: "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
			author: "Sarah L",
			avatar: "https://i.pravatar.cc/48?u=sarah",
		},
	];

	return (
		<main className="min-h-screen bg-bg-light">
			{/* <TopBanner /> */}
			<Navbar />

			<section className="px-4 sm:px-6 lg:px-7.5 py-12 sm:py-16 lg:py-20">
				<div className="max-w-400 mx-auto">
					<div className="flex flex-col sm:flex-row gap-0 overflow-hidden">
						{/* Left Side - Testimonials */}
						<div className="p-8 lg:p-12 sm:flex-[0.6] flex flex-col justify-center order-last sm:order-first">
							<h2 className="text-2xl sm:text-3xl font-bold text-text-darker mb-4">
								Students Testimonials
							</h2>
							<p className="text-text-gray-light mb-8">
								Lorem ipsum dolor sit amet consectetur. Tempus
								tincidunt etiam eget elit id imperdiet et. Cras
								eu sit dignissim lorem nibh et. Ac cum eget
								habitasse in velit fringilla feugiat senectus
								in.
							</p>

							{/* Testimonial Card */}
							<div className="bg-white rounded-xl border border-bg-border p-6 mb-6">
								<p className="text-text-gray-light text-sm mb-6">
									{testimonials[0].text}
								</p>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<img
											src={testimonials[0].avatar}
											alt={testimonials[0].author}
											className="w-12 h-12 rounded-full"
										/>
										<span className="font-semibold text-text-darker">
											{testimonials[0].author}
										</span>
									</div>
									<Button
										variant="ghost"
										className="text-text-dark"
									>
										Read More
									</Button>
								</div>
							</div>

							{/* Navigation Dots */}
							<div className="flex items-center justify-center gap-2">
								<div className="w-2 h-2 rounded-full bg-primary-blue"></div>
								<div className="w-2 h-2 rounded-full bg-bg-border"></div>
								<div className="w-2 h-2 rounded-full bg-bg-border"></div>
							</div>
						</div>

						{/* Right Side - Login Form */}
						<div className="p-8 lg:p-12 bg-white sm:flex-[0.4] rounded-md order-first sm:order-last">
							<div className="">
								<h1 className="text-3xl sm:text-4xl font-bold text-text-darker mb-2 text-center">
									Login
								</h1>
								<p className="text-text-gray-light text-center mb-8">
									Welcome back! Please log in to access your
									account.
								</p>

								<form className="space-y-5">
									{/* Email */}
									<div>
										<label className="block text-sm font-medium text-text-dark mb-2">
											Email
										</label>
										<Input
											type="email"
											placeholder="Enter your Email"
											className="w-full h-16 bg-bg-lighter border-bg-border"
										/>
									</div>

									{/* Password */}
									<div>
										<label className="block text-sm font-medium text-text-dark mb-2">
											Password
										</label>
										<div className="relative">
											<Input
												type={
													showPassword
														? "text"
														: "password"
												}
												placeholder="Enter your Password"
												className="w-full h-16 bg-bg-lighter border-bg-border pr-10"
											/>
											<button
												type="button"
												onClick={() =>
													setShowPassword(
														!showPassword
													)
												}
												className="absolute right-3 top-1/2 -translate-y-1/2 text-text-gray-light hover:text-text-dark"
											>
												{showPassword ? (
													<EyeOff className="w-5 h-5" />
												) : (
													<Eye className="w-5 h-5" />
												)}
											</button>
										</div>
									</div>

									{/* Remember Me & Forgot Password */}
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<Checkbox id="remember" />
											<label
												htmlFor="remember"
												className="text-sm text-text-dark cursor-pointer"
											>
												Remember Me
											</label>
										</div>
										<Link
											href="#"
											className="text-sm text-text-dark underline hover:text-primary-blue"
										>
											Forgot Password?
										</Link>
									</div>

									{/* Login Button */}
									<Button className="w-full h-16 bg-primary-blue hover:bg-primary-blue-dark text-white text-base font-medium">
										Login
									</Button>

									{/* Divider */}
									<div className="relative">
										<div className="absolute inset-0 flex items-center">
											<div className="w-full border-t border-bg-border"></div>
										</div>
										<div className="relative flex justify-center text-sm">
											<span className="px-4 bg-white text-text-gray-light">
												OR
											</span>
										</div>
									</div>

									{/* Google Login */}
									<Button
										type="button"
										variant="outline"
										className="w-full h-16 text-base font-medium border-bg-border"
									>
										<FcGoogle className="w-5 h-5 mr-2" />
										Login with Google
									</Button>

									{/* Sign Up Link */}
									<p className="text-sm text-text-gray-light text-center">
										Don't have an account?{" "}
										<Link
											href="/signup"
											className="text-text-dark font-medium underline"
										>
											Sign Up
										</Link>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
