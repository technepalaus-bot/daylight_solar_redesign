"use client";
import HeroSection from "@/components/HeroSection";
import { Mail, MapPin, Phone, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import React from "react";
import ContactForm from "@/components/Contact/ContactForm";
import Navbar from "@/components/Navbar";

// Contact Page Schema for SEO
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Daylight Solar",
    telephone: "+61-7-3422-6150",
    email: "hello@daylightsolar.com.au",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30 Chancellor Village Blvd",
      addressLocality: "Sippy Downs",
      addressRegion: "QLD",
      postalCode: "4556",
      addressCountry: "AU",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    areaServed: ["Brisbane", "Gold Coast", "Sunshine Coast"],
  },
};

const contactDetails = [
	{
		icon: <MapPin className="text-[#FFDD00]" />,
		title: "Location",
		info: "30 Chancellor Village Blvd, Sippy Downs",
		bgColor: "#FFE5A5",
		hoverColor: "hover:border-yellow-400",
	},
	{
		icon: <Phone className="text-[#FFBC82]" />,
		title: "Phone",
		info: "0734226150",
		bgColor: "#FFE1C7",
		hoverColor: "hover:border-orange-400",
	},
	{
		icon: <Mail className="text-[#2E7D32]" />,
		title: "Email",
		info: "hello@daylightsolar.com.au",
		bgColor: "#D0FCE0",
		hoverColor: "hover:border-green-400",
	},
];

const Contact = () => {
	return (
		<div className="animate-fadeIn">
			{/* Structured Data for SEO */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(contactSchema),
				}}
			/>
			<Navbar />
			<HeroSection
				img="/backgroundImg/contactbg.png"
				Children={
					<div className={`md:max-w-xl w-full md:pr-10 mt-20 animate-slideUp`}>
						<div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
							<Sparkles className="w-4 h-4" />
							<span className="text-sm font-medium">Get in Touch</span>
						</div>
						<h3 className="text-3xl md:text-5xl font-bold text-white md:leading-[56px]">
							{`Let's Build a Sustainable Future, Together.`}
						</h3>
						<p className="text-secondary md:text-xl my-6 leading-relaxed">
							Transform your energy consumption with cutting-edge solar
							solutions tailored to your needs.
						</p>
					</div>
				}
			/>

			<section className="bg-primary text-white pt-20 pb-24 px-4 sm:px-[87px] text-center">
				<h2 className="text-2xl sm:text-4xl font-bold mb-4 animate-slideUp">
					Quick Connect
				</h2>
				<p className="text-tertiary mb-10 max-w-xl mx-auto">
					Reach out to us through any of these channels
				</p>
				<div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 px-4">
					{contactDetails.map((item, index) => (
						<div
							key={index}
							className={`group border-2 border-white/20 ${item.hoverColor} p-6 md:p-8 rounded-2xl flex items-center w-full max-w-[388px] shadow-lg hover:shadow-2xl gap-4 transition-all duration-500 hover:-translate-y-2 bg-white/5 backdrop-blur-sm`}
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<div
								className="size-14 min-w-14 min-h-14 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform duration-300"
								style={{ backgroundColor: item.bgColor }}
							>
								<div className="size-[24px] flex items-center justify-center">
									{React.cloneElement(item.icon, {
										className: `${item.icon.props.className} w-full h-full`,
									})}
								</div>
							</div>
							<div className="text-left overflow-hidden">
								<p className="text-white text-xl font-bold truncate group-hover:text-secondary transition-colors duration-300">
									{item.title}
								</p>
								<p className="text-tertiary font-medium truncate">
									{item.info}
								</p>
							</div>
							<ArrowRight className="w-5 h-5 text-white/50 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300 ml-auto" />
						</div>
					))}
				</div>
			</section>

			<section className="bg-gradient-to-b from-[#ABD1C6] to-[#9BC4B8] py-20 md:py-28 px-5 md:px-0" id="form">
				<ContactForm />
			</section>

			<section className="bg-[#F9F9F9] py-16 md:py-24">
				<h2 className="text-center text-2xl sm:text-4xl font-bold text-primary mb-8 animate-slideUp">
					Our International Influence
				</h2>
				<div className="max-w-[1248px] mx-auto px-4">
					<div className="overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500">
						<Image
							src="/img/img.png"
							alt="Commercial Solar Panels Installation for Home In Brisbane"
							width={1248}
							height={400}
							className="w-full hover:scale-105 transition-transform duration-700"
						/>
					</div>
					<div className="flex flex-col sm:flex-row justify-between items-center max-w-[1248px] mx-auto mt-10 text-center gap-6">
						{[
							{ value: "25+", label: "Operations in NSW and QLD" },
							{ value: "10,000+", label: "Happy Customers" },
							{ value: "Fast & Smooth", label: "Customer Support" },
						].map((stat, idx) => (
							<div
								key={idx}
								className="flex-1 group p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
							>
								<span className="text-secondary text-3xl md:text-4xl font-bold group-hover:scale-110 inline-block transition-transform duration-300">
									{stat.value}
								</span>
								<p className="text-gray-600 font-medium text-base mt-2">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
