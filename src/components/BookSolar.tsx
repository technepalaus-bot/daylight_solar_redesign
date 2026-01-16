"use client";
import React, { useEffect, useState } from "react";
import ContactForm from "./Contact/ContactForm";
import { X } from "lucide-react";

const BookSolar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    if (isPopupOpen) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }
  }, [isPopupOpen]);

  return (
    <>
      <div className="fixed right-3 sm:right-6 bottom-3 sm:bottom-6 z-50">
        <button
          className="text-white text-xs sm:text-sm md:text-base font-bold px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 max-w-[180px] sm:max-w-none"
          style={{
            backgroundColor: "rgb(44, 167, 88)",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgb(34, 137, 68)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgb(44, 167, 88)")}
          onClick={togglePopup}
        >
          <span className="whitespace-nowrap">Book Solar Assessment</span>
        </button>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm p-2 sm:p-4">
          <div className="relative w-full max-w-3xl">
            {/* Close Button */}
            <button
              onClick={togglePopup}
              className="absolute -top-8 sm:-top-10 right-0 z-50 bg-white hover:bg-gray-100 text-gray-600 rounded-full p-1.5 sm:p-2 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Close popup"
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            {/* Form Container */}
            <div className="bg-white rounded-2xl overflow-hidden max-h-[95vh] overflow-y-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookSolar;
