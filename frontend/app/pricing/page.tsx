import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import TopBanner from "@/components/TopBanner";
import React from "react";

const page = () => {
	return (
		<main className="min-h-screen bg-bg-light">
			<TopBanner />
			<Navbar />

			{/* About Section */}
			<section className="px-4 sm:px-6 lg:px-7.5 py-12 border-b">
				<div className="max-w-400 mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<div>
							<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-darker">
								Our Pricings
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

			<PricingSection showHeader={false}/>

			<FAQSection />

			<Footer />
		</main>
	);
};

export default page;
