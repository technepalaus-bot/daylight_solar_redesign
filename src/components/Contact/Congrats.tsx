"use client";
import React, { useEffect } from "react";
import Link from "next/link";

interface CongratulationsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Congrats: React.FC<CongratulationsPopupProps> = ({ isOpen, onClose }) => {
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

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[105]">
      <div className="bg-white p-6 sm:p-8 rounded-[20px] shadow-lg max-w-md w-[90%] sm:max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-primary flex justify-center items-center gap-2">
          <span className="text-3xl">🎉</span> CONGRATULATIONS! <span className="text-3xl">🎉</span>
        </h2>

        <p className="text-[#010100] text-xl font-medium mt-4">
          You’re one step closer to unlocking a federal solar subsidy of up to{" "}
          <span className="font-bold text-[#2CA758]">$5000!</span> 🌞💰
        </p>

        <p className="text-[#010100] text-xl font-medium mt-2">
          Our solar expert will reach out to you shortly to confirm your eligibility and guide you in claiming the subsidy. Stay tuned! 🚀🔆
        </p>

        <Link href="/">
          <button
            onClick={onClose}
            className="mt-6 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary transition w-full"
          >
            Back to Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Congrats;