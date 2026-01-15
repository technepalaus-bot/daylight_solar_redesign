"use client";
import Image from "next/image";
import { Button } from "@components/ui/button";
import FeatureCard from "@components/Home/FeatureCard";
import { features, products, testimonials } from "@constants/home";
import ProductCard from "@/components/Home/ProductCard";
import WhyDayLight from "@/components/Home/WhyDayLight";
import Carousel from "@/components/Home/Carousel";
import { MoveRight, X, ChevronDown, ChevronUp } from "lucide-react";
import Testimonials from "@/components/Home/Testimonial";
import BookSolar from "@/components/BookSolar";
import { useEffect, useRef, useState } from "react";
import ContactForm from "@/components/Contact/ContactForm";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import Head from "next/head";



// FAQ data
const faqData = [
  {
    question: "What are the benefits of installing solar panels for your home?",
    answer:
      "Installing solar panels for your home can reduce your electricity bills, increase energy independence, and add value to your property. It's also an eco-friendly way to reduce carbon emissions.",
  },
  {
    question: "Is solar power suitable for my house?",
    answer:
      "Most homes can benefit from solar power if they have access to direct sunlight. A quick roof inspection and energy usage analysis can confirm if solar is right for your house.",
  },
  {
    question: "How does solar energy work for home use?",
    answer:
      "Solar energy for home use involves panels capturing sunlight and converting it into electricity for daily use. Excess energy can be stored or fed back into the grid.",
  },
  {
    question: "Can I generate solar electricity for my home and go off-grid?",
    answer:
      "Yes, with the right setup including battery storage, you can generate solar electricity for your home and reduce or eliminate your reliance on the grid.",
  },
  {
    question: "Are household solar panels a good investment in Australia?",
    answer:
      "Yes, household solar panels offer a great return on investment in Australia thanks to high sunlight exposure and available government rebates.",
  },
  {
    question: "What is a solar array for a home and how does it work?",
    answer:
      "A solar array is a group of solar panels installed on your roof that work together to generate electricity. It's tailored to your home's energy consumption.",
  },
  {
    question: "What are sun panels for home and are they efficient?",
    answer:
      "Sun panels, or solar panels, are highly efficient devices that convert sunlight into usable energy for your home, helping lower your power bills.",
  },
  {
    question: "What are home PV panels and how are they different?",
    answer:
      "Home PV (photovoltaic) panels generate electricity directly from sunlight and are the most common type of solar panel used in Australian households.",
  },
  {
    question: "How does solar electricity reduce my power bill?",
    answer:
      "Solar electricity allows you to use free sunlight instead of expensive grid electricity, significantly cutting down your monthly energy costs.",
  },
  {
    question: "How to choose reliable solar installation companies?",
    answer:
      "Look for solar installation companies with Clean Energy Council accreditation, positive reviews, and strong warranties. Always compare quotes and experience.",
  },
];

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem("hasShownPopup");

    if (!hasShownPopup) {
      setTimeout(() => {
        setIsPopupOpen(true);
        sessionStorage.setItem("hasShownPopup", "true");
      }, 5000);
    }
  }, []);

  useEffect(() => {
    if (isPopupOpen) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  }, [isPopupOpen]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   // Try autoplay (may still fail on iOS)
  //   if (videoRef.current) {
  //     videoRef.current.play().catch((e) => console.log("Autoplay blocked:", e));
  //   }
  // }, []);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current
          .play()
          .catch((e) => console.log("Autoplay blocked:", e));
      }
    };

    // Try playing immediately
    playVideo();

    // Try again on user interaction as a fallback
    window.addEventListener("click", playVideo, { once: true });
    window.addEventListener("touchstart", playVideo, { once: true });

    return () => {
      window.removeEventListener("click", playVideo);
      window.removeEventListener("touchstart", playVideo);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.daylightsolar.com.au/" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Navbar />
      {/* Hero Section */}

      <div className="relative overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className={`relative h-screen w-full`}>
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            poster="/backgroundImg/bg1.png"
            className="absolute w-full h-full object-cover"
          >
            <source src="/video/solar_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        {/* Text Container */}
        <div className="absolute inset-0 flex items-center">
          <div className="globalContainer w-full">
            <div className="md:max-w-4xl w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[90px] font-bold text-white leading-tight tracking-tight">
                <span className="text-secondary">GREEN</span> TODAY,<br />
                CLEAN TOMORROW
              </h1>
              <p className="text-gray-200 text-sm sm:text-base md:text-xl my-4 sm:my-6 md:my-8 max-w-2xl font-light leading-relaxed">
                Make a switch to solar and unlock a sustainable, cost-saving
                solution that effortlessly powers your home and lifestyle,
                reduces your bills, and contributes to a healthier planet for
                future generations.
              </p>
              <div className="flex md:flex-row flex-col md:items-center gap-4 sm:gap-5">
                <Button
                  variant="default"
                  className="rounded-full text-white font-medium px-5 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg hover:scale-105 transition-transform w-full sm:w-auto"
                  onClick={togglePopup}
                >
                  Start Your Solar Journey
                  <MoveRight size={20} className="ml-2 sm:w-6 sm:h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}

      <BookSolar />

      {/* Feature Section */}
      <div className="relative bg-gradient-to-r from-primary via-primary/95 to-primary/90 py-12 sm:py-16 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-tertiary/10 rounded-full blur-3xl -z-0"></div>
        
        <div className="globalContainer text-white relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 md:gap-16 mb-10 sm:mb-16 md:mb-24">
            {/* Left Column - Heading */}
            <div className="lg:flex-[0.45] w-full">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="block mb-2">Leading the way towards</span>
                <span className="bg-gradient-to-r from-secondary via-secondary to-tertiary bg-clip-text text-transparent">
                  a greener and sustainable future.
                </span>
              </h2>
              {/* Accent line */}
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-secondary to-tertiary mt-4 sm:mt-6 rounded-full"></div>
            </div>

            {/* Right Column - Description */}
            <div className="lg:flex-[0.55] w-full">
              <p className="text-tertiary/90 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-4 sm:mb-6 md:mb-8">
                Our mission is to make clean energy accessible and affordable for all, driving innovation and sustainability to create a healthier planet for future generations. We are dedicated to empowering communities to take charge of their energy needs, promoting a shift towards greener living, and ensuring that our planet remains vibrant for years to come.
              </p>
              {/* Key stats or highlights could go here */}
              <div className="flex gap-4 sm:gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary"></div>
                  <span className="text-tertiary/80 text-xs sm:text-sm font-medium">100% Clean Energy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-secondary"></div>
                  <span className="text-tertiary/80 text-xs sm:text-sm font-medium">Sustainable Solutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </div>
      {/* Feature Section */}

      {/* Why DayLight Solar Section*/}
      <WhyDayLight />
      {/* Why DayLight Solar Section*/}

      {/* Product Section */}
      <div className="relative bg-tertiary py-16 md:py-32 overflow-hidden">
        {/* Decorative animated elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="globalContainer relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-16 mb-16 md:mb-24">
            {/* Left Column - Heading */}
            <div className="lg:flex-[0.45] w-full">
              <div className="space-y-3 group cursor-pointer">
                <h2 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold leading-tight transition-all duration-500 group-hover:text-opacity-80">
                  <span className="block">Innovative</span>
                  <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent group-hover:from-primary group-hover:via-primary/90 group-hover:to-primary/60 transition-all duration-500">
                    Solar Solutions
                  </span>
                  <span className="block text-primary/90 group-hover:text-primary transition-colors duration-500">
                    for Every Space and Lifestyle.
                  </span>
                </h2>
              </div>
              {/* Accent line with hover animation */}
              <div className="h-1 bg-primary mt-6 rounded-full w-16 group-hover:w-24 transition-all duration-500"></div>
            </div>

            {/* Right Column - Description */}
            <div className="lg:flex-[0.55] w-full space-y-5">
              <div className="group">
                <p className="text-primary/85 text-base md:text-lg font-light leading-relaxed transition-all duration-500 group-hover:text-primary/95 group-hover:font-normal">
                  Our diverse range of solar products is designed to cater to every aspect of energy needs. From innovative residential solar panels to customized commercial solar systems and advanced battery storage solutions, we empower you to harness the sun&apos;s energy effectively.
                </p>
              </div>

              <div className="group">
                <p className="text-primary/75 text-base md:text-lg font-light leading-relaxed transition-all duration-500 group-hover:text-primary/90 group-hover:font-normal">
                  Join us in the process of revolutionizing how we power our lives and create a sustainable future for everyone!
                </p>
              </div>

              {/* Call-to-action dots indicator */}
              <div className="flex items-center gap-3 mt-8">
                <div className="w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary transition-all duration-300"></div>
                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary/80 transition-all duration-300" style={{ transitionDelay: '0.1s' }}></div>
                <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary/60 transition-all duration-300" style={{ transitionDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>

          {/* Product Cards Grid with Animations */}
          <div
            id="#product"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {products.map((product, idx) => (
              <div
                key={product.id}
                className="transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
      {/* Product Section */}

      {/* FAQ Section */}
      <div className="relative bg-gradient-to-b from-white via-white to-gray-50 py-16 md:py-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-0"></div>

        <div className="globalContainer relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="bg-secondary/20 text-primary font-bold text-sm px-4 py-2 rounded-full">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Frequently Asked <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Get answers to common questions about solar panel installation and how it can benefit your home.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`group border-2 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  openFaq === index
                    ? "border-secondary bg-gradient-to-r from-secondary/10 via-secondary/5 to-transparent shadow-lg"
                    : "border-gray-200 hover:border-secondary/50 hover:shadow-md bg-white"
                }`}
              >
                <button
                  className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center group-hover:px-10 transition-all duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <span className={`font-bold text-base md:text-lg leading-tight transition-all duration-300 ${
                    openFaq === index 
                      ? "text-secondary" 
                      : "text-primary group-hover:text-secondary"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 transition-all duration-500 transform ${openFaq === index ? "rotate-180" : ""}`}>
                    {openFaq === index ? (
                      <ChevronUp className="h-6 w-6 text-secondary transition-colors duration-300" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-secondary transition-colors duration-300" />
                    )}
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                    openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 md:px-8 pb-6">
                    <div className="h-1 w-12 bg-gradient-to-r from-secondary to-transparent rounded-full mb-4"></div>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg font-light">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Help text */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Didn&apos;t find what you&apos;re looking for?</p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
              Contact our team
              <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
            </button>
          </div>
        </div>
      </div>
      {/* FAQ Section */}

      {/* carousel Section */}
      {/* carousel Section */}
      <Carousel />
      <hr className="globalContainer mt-10" />
      {/* carousel Section */}

      {/* Testimonials Section */}
      <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-28 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-0"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-0"></div>

        {/* Header */}
        <div className="globalContainer mb-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block mb-4">
              <span className="bg-secondary/20 text-primary font-bold text-sm px-4 py-2 rounded-full">TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              What Our <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Happy Customers</span> Say
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Join thousands of satisfied customers who have transformed their homes with Daylight Solar and are enjoying sustainable energy solutions.
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative z-10">
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      {/* Review Section */}
      <section className="relative bg-white py-16 md:py-20 overflow-hidden">
        <div className="globalContainer">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              <span className="text-primary">DAYLIGHT SOLAR</span> would love your feedback.
            </h3>
            <p className="text-gray-600 text-base md:text-lg mb-8">
              Please post a review to our profile.
            </p>
            <Link
              href={"https://g.page/r/CRqWz-PQjgjhEBE/review"}
              className="inline-flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-primary text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 text-base md:text-lg"
            >
              <p>Leave a Review</p>
              <MoveRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Card  */}
      <div className="text-[#F4F4F4] md:px-8 md:pt-20 md:pb-20">
        <div className="relative py-20 md:py-44 px-6 flex items-center justify-center md:rounded-[2.5rem] overflow-hidden shadow-2xl mx-4 md:mx-0">
          <div className="absolute inset-0 z-0">
            <Image
              src="/img/Commercial_Solar_Panels_Installation_for_Home_In_Brisbane4.webp"
              alt="Commercial Solar Panels Installation for Home In Brisbane"
              fill
              sizes="100vw"
              quality={100}
              className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40"></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl">
            <h2 className="text-3xl md:text-6xl font-bold leading-tight">
              Ready to Harness the Power of the Sun? Let&apos;s Connect!
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg font-light mt-8 text-gray-100">
              Take the first step toward sustainable energy! Reach out now for a
              free consultation and explore the benefits solar can bring to your
              home or business.
            </p>
            <Link href="/products">
              <Button
                variant={"white"}
                className="mt-12 px-10 py-8 rounded-full text-primary font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Connect for Solar Solutions
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex justify-center items-start z-50 bg-black/80">
          <div className="popup-container relative w-full max-w-4xl mx-4 mt-10 sm:mt-16">
            <ContactForm />
            <X
              onClick={togglePopup}
              size={30}
              className="absolute top-6 right-5 md:right-24 z-10 cursor-pointer"
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
