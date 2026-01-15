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
        <div className="fixed inset-0 flex justify-center items-start z-50 bg-black/80 overflow-y-auto">
          <div className="popup-container relative w-full max-w-4xl mx-2 sm:mx-4 mt-4 sm:mt-10 md:mt-16 mb-4">
            <ContactForm />
            <X
              onClick={togglePopup}
              size={30}
              className="absolute top-3 sm:top-6 right-3 sm:right-5 md:right-24 z-10 cursor-pointer text-white"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BookSolar;
