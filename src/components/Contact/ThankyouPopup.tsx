"use client";
import React, { useEffect } from "react";
import { CircleCheckBig, X } from 'lucide-react';
import { useRouter } from "next/navigation";

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThankyouPopup: React.FC<BookingPopupProps> = ({ isOpen, onClose }) => {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleGoBack = () => {
    onClose();
    router.push("/");
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-md w-full sm:max-w-2xl text-center relative">
        {/* Close Button */}
        <button
          onClick={handleGoBack}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-1.5 sm:p-2 transition-all duration-300 hover:scale-110"
          aria-label="Close popup"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <h2 className="text-xl sm:text-2xl font-semibold text-[#004643] pt-2">
          Thank you for booking your <br />{" "}
          <span className="text-[#004643] font-semibold">Free Solar Assessment!</span>
        </h2>

        <div className="flex justify-center my-4">
          <CircleCheckBig className="text-green-500 text-4xl sm:text-5xl" />
        </div>

        <p className="text-black font-normal text-base sm:text-lg">
          Our team will review your details and contact you soon to confirm your appointment.
          Stay tuned for our visit!
        </p>

        <button
          onClick={handleGoBack}
          className="mt-6 font-normal text-sm bg-[#004643] text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Go Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default ThankyouPopup;