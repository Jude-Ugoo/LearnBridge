"use client";

import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-bg-light">
			<TopBanner />
			<Navbar />

			<section className="px-4 sm:px-6 lg:px-7.5 py-12 sm:py-16 lg:py-20 border-b">
				<div className="max-w-400 mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div>
							<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-darker">
								Contact Us
							</h1>
						</div>
						<div>
							<p className="text-base sm:text-lg text-text-gray-light">
								Welcome to SkillBridge's Pricing Plan page,
								where we offer two comprehensive options to
								cater to your needs: Free and Pro. We believe in
								providing flexible and affordable pricing
								options for our services. Whether you're an
								individual looking to enhance your skills or a
								business seeking professional development
								solutions, we have a plan that suits you.
								Explore our pricing options below and choose the
								one that best fits your requirements.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="px-4 sm:px-6 lg:px-7.5 py-12 sm:py-16 lg:py-20">
				<div className="max-w-400 mx-auto">
					<div className="bg-white p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 rounded-md">
						<div>
							<form className="space-y-6">
								{/* Name Fields */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-text-dark mb-2">
											First Name
										</label>
										<Input
											type="text"
											placeholder="Enter First Name"
											className="w-full bg-white border-bg-border"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-text-dark mb-2">
											Last Name
										</label>
										<Input
											type="text"
											placeholder="Enter Last Name"
											className="w-full bg-white border-bg-border"
										/>
									</div>
								</div>

								{/* Email & Phone */}
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<div>
										<label className="block text-sm font-medium text-text-dark mb-2">
											Email
										</label>
										<Input
											type="email"
											placeholder="Enter your Email"
											className="w-full bg-white border-bg-border"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-text-dark mb-2">
											Phone
										</label>
										<Input
											type="tel"
											placeholder="Enter Phone Number"
											className="w-full bg-white border-bg-border"
										/>
									</div>
								</div>

								<div>
									<label className="block text-sm font-medium text-text-dark mb-2">
										Subject
									</label>
									<Input
										type="text"
										placeholder="Enter your Subject"
										className="w-full bg-white border-bg-border"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-text-dark mb-2">
										Message
									</label>
									<Textarea
										placeholder="Enter your Message here..."
										className="w-full bg-white border-bg-border min-h-[150px]"
									/>
								</div>

								{/* Submit Button */}
								<Button className="w-full bg-primary-blue hover:bg-primary-blue-dark text-white h-12 text-base font-medium">
									Send Your Message
								</Button>
							</form>
						</div>

						{/* Right Side - Contact Info */}
						<div className="space-y-8">
							{/* Contact Details */}
							<div className="space-y-6">
								{/* Email */}
								<div className="bg-white rounded-xl p-6 border border-bg-border">
									<div className="flex items-center gap-4">
										<div className="w-12 h-12 flex items-center justify-center bg-bg-lighter rounded-lg">
											<Mail className="w-6 h-6 text-text-dark" />
										</div>
										<div>
											<p className="text-text-gray-light text-sm mb-1">
												support@skillbridge.com
											</p>
										</div>
									</div>
								</div>

								{/* Phone */}
								<div className="bg-white rounded-xl p-6 border border-bg-border">
									<div className="flex items-center gap-4">
										<div className="w-12 h-12 flex items-center justify-center bg-bg-lighter rounded-lg">
											<Phone className="w-6 h-6 text-text-dark" />
										</div>
										<div>
											<p className="text-text-gray-light text-sm mb-1">
												+91 00000 00000
											</p>
										</div>
									</div>
								</div>

								{/* Location */}
								<div className="bg-white rounded-xl p-6 border border-bg-border">
									<div className="flex items-center gap-4">
										<div className="w-12 h-12 flex items-center justify-center bg-bg-lighter rounded-lg">
											<MapPin className="w-6 h-6 text-text-dark" />
										</div>
										<div>
											<p className="text-text-gray-light text-sm mb-1">
												Some Where in the World
											</p>
										</div>
									</div>
								</div>

								{/* Social Profiles */}
								<div className="bg-white rounded-xl p-6 border border-bg-border">
									<h3 className="text-lg font-semibold text-text-darker mb-4">
										Social Profiles
									</h3>
									<div className="flex items-center gap-4">
										<a
											href="#"
											className="w-12 h-12 flex items-center justify-center bg-bg-lighter rounded-lg hover:bg-bg-border transition-colors"
										>
											<Facebook className="w-6 h-6 text-text-dark" />
										</a>
										<a
											href="#"
											className="w-12 h-12 flex items-center justify-center bg-bg-lighter rounded-lg hover:bg-bg-border transition-colors"
										>
											<Twitter className="w-6 h-6 text-text-dark" />
										</a>
										<a
											href="#"
											className="w-12 h-12 flex items-center justify-center bg-bg-lighter rounded-lg hover:bg-bg-border transition-colors"
										>
											<Linkedin className="w-6 h-6 text-text-dark" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
