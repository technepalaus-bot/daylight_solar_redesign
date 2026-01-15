"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { ArrowRight, Sun, CheckCircle2, Sparkles, Home, Zap, DollarSign } from "lucide-react";
import { sendSolarSubsidyEmail } from "@/app/(Home_Routes)/checksolarsubsidy/action";
import Congrats from "@/components/Contact/Congrats";

interface SolarSubsidyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SolarSubsidyPopup = ({ isOpen, onClose }: SolarSubsidyPopupProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    homeAddress: "",
    contactNumber: "",
    averagePowerBill: "",
    property: "",
    existingSolar: "",
    solarCount: "",
  });

  const [hasExistingSolar, setHasExistingSolar] = useState<"yes" | "no" | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isCongratsOpen, setIsCongratsOpen] = useState(false);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "existingSolar") {
      setHasExistingSolar(value as "yes" | "no");
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);
    setError("");

    try {
      const { error } = await sendSolarSubsidyEmail(formData);
      if (error) throw new Error(error);

      setIsCongratsOpen(true);
      setFormData({
        fullName: "",
        homeAddress: "",
        contactNumber: "",
        averagePowerBill: "",
        property: "",
        existingSolar: "",
        solarCount: "",
      });
      setHasExistingSolar(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleCongratsClose = () => {
    setIsCongratsOpen(false);
    onClose();
  };

  const benefits = [
    { icon: <DollarSign className="w-4 h-4" />, text: "Save up to $10,000" },
    { icon: <Zap className="w-4 h-4" />, text: "Reduce Energy Bills" },
    { icon: <Home className="w-4 h-4" />, text: "Increase Home Value" },
  ];

  const formFields = [
    { label: "Full Name", name: "fullName", placeholder: "Enter your full name", type: "text", icon: "👤" },
    { label: "Home Address", name: "homeAddress", placeholder: "Enter your home address", type: "text", icon: "🏠" },
    { label: "Contact Number", name: "contactNumber", placeholder: "Enter your contact number", type: "tel", icon: "📱" },
    { label: "Average Power Bill (Quarterly)", name: "averagePowerBill", placeholder: "$ Enter your average power bill", type: "text", icon: "💰" },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] animate-fadeIn"
        onClick={onClose}
      />

      {/* Popup Modal */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
        <div
          className="relative w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with gradient */}
          <div className="relative bg-gradient-to-r from-primary to-teal-600 p-4 sm:p-6 rounded-t-2xl sm:rounded-t-3xl">

            <div className="flex items-center gap-2 sm:gap-3 mb-3 pr-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">Check Solar Subsidy</h2>
                <p className="text-white/80 text-xs sm:text-sm">Find out your eligibility in minutes</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-2 mt-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 sm:gap-2 text-white bg-white/15 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm"
                >
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm">
                {error}
              </div>
            )}

            {/* Form Fields */}
            {formFields.map((field, index) => (
              <div key={index}>
                <label className="text-gray-700 font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <span className="text-base sm:text-lg">{field.icon}</span> {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className={`w-full bg-gray-50 border-2 text-sm sm:text-base ${
                    errors.includes(field.name)
                      ? "border-red-400 bg-red-50"
                      : "border-gray-200 hover:border-gray-300 focus:border-primary focus:bg-white"
                  } rounded-xl p-2.5 sm:p-3 placeholder:text-gray-400 focus:outline-none transition-all duration-300`}
                />
              </div>
            ))}

            {/* Property Type */}
            <div>
              <label className="text-gray-700 font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <span className="text-base sm:text-lg">🏗️</span> Property Type
              </label>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {["Residential", "Commercial"].map((type) => (
                  <label
                    key={type}
                    className={`cursor-pointer rounded-xl border-2 p-2.5 sm:p-3 transition-all duration-300 ${
                      formData.property === type.toLowerCase()
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-gray-200 hover:border-gray-300 bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="property"
                      value={type.toLowerCase()}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div
                        className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.property === type.toLowerCase()
                            ? "border-primary bg-primary"
                            : "border-gray-300"
                        }`}
                      >
                        {formData.property === type.toLowerCase() && (
                          <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                        )}
                      </div>
                      <span className={`font-semibold text-sm sm:text-base ${formData.property === type.toLowerCase() ? "text-primary" : "text-gray-600"}`}>
                        {type}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Existing Solar */}
            <div>
              <label className="text-gray-700 font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <span className="text-base sm:text-lg">☀️</span> Do you have existing solar panels?
              </label>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {["yes", "no"].map((option) => (
                  <label
                    key={option}
                    className={`cursor-pointer rounded-xl border-2 p-2.5 sm:p-3 transition-all duration-300 ${
                      formData.existingSolar === option
                        ? "border-primary bg-primary/5 shadow-md"
                        : "border-gray-200 hover:border-gray-300 bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="existingSolar"
                      value={option}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div
                        className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.existingSolar === option
                            ? "border-primary bg-primary"
                            : "border-gray-300"
                        }`}
                      >
                        {formData.existingSolar === option && (
                          <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                        )}
                      </div>
                      <span className={`font-semibold text-sm sm:text-base ${formData.existingSolar === option ? "text-primary" : "text-gray-600"}`}>
                        {option === "yes" ? "Yes" : "No"}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {hasExistingSolar === "yes" && (
              <div className="animate-slideUp">
                <label className="text-gray-700 font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <span className="text-base sm:text-lg">🔢</span> If yes, how many panels?
                </label>
                <input
                  type="number"
                  name="solarCount"
                  value={formData.solarCount}
                  onChange={handleChange}
                  placeholder="Enter the number of solar panels"
                  className="w-full bg-gray-50 border-2 border-gray-200 hover:border-gray-300 focus:border-primary focus:bg-white rounded-xl p-2.5 sm:p-3 text-sm sm:text-base placeholder:text-gray-400 focus:outline-none transition-all duration-300"
                />
              </div>
            )}

            <div className="flex flex-col gap-3 mt-4 sm:mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-teal-700 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Check Eligibility
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full mt-[10px] bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold py-3 rounded-xl transition-colors text-sm sm:text-base"
              >
                Remove this popup
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      <Congrats isOpen={isCongratsOpen} onClose={handleCongratsClose} />
    </>
  );
};

export default SolarSubsidyPopup;
