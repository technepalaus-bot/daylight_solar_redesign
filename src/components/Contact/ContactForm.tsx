"use client";
import React, { ChangeEvent, useState } from "react";
import { sendConsultationEmail } from "./action";
import ThankyouPopup from "./ThankyouPopup";
import { Sun, User, Mail, Phone, Home, DollarSign, Calendar, Clock } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    homeAddress: "",
    powerBill: "",
    solarUnits: "",
    dateDay: "",
    dateMonth: "",
    dateYear: "",
    timeHours: "",
    timeMinutes: "",
    timePeriod: "AM",
  });

  const [hasSolar, setHasSolar] = useState<string | null>(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "existing_solar") {
      setHasSolar(value);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponseMessage("");
    setError("");
    setLoading(true);

    try {
      const { message, error } = await sendConsultationEmail({
        ...formData,
        hasSolar,
      });
      if (error) throw new Error(error);

      setResponseMessage(message || "Email sent successfully!");
      setIsPopupOpen(true)
      setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
        homeAddress: "",
        powerBill: "",
        solarUnits: "",
        dateDay: "",
        dateMonth: "",
        dateYear: "",
        timeHours: "",
        timeMinutes: "",
        timePeriod: "AM",
      });
      setHasSolar(null);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  const formFields = [
    { label: "Full Name", name: "fullName", placeholder: "Enter your full name", type: "text", icon: <User className="w-5 h-5" /> },
    { label: "Email Address", name: "email", placeholder: "Enter your email address", type: "email", icon: <Mail className="w-5 h-5" /> },
    { label: "Contact Number", name: "contactNumber", placeholder: "Enter your contact number", type: "text", icon: <Phone className="w-5 h-5" /> },
    { label: "Home Address", name: "homeAddress", placeholder: "Enter your home address", type: "text", icon: <Home className="w-5 h-5" /> },
    { label: "Average Power Bill (Quarterly)", name: "powerBill", placeholder: "$ Enter your average power bill", type: "text", icon: <DollarSign className="w-5 h-5" /> },
  ];

  return (
    <div className="globalContainer bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 max-w-3xl shadow-2xl border border-gray-100 relative overflow-hidden mx-2 sm:mx-auto">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-16 sm:w-32 h-16 sm:h-32 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg icon-3d flex-shrink-0">
            <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-secondary animate-spin-slow" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
              Get Your Free Solar Consultation
            </h2>
            <p className="text-gray-500 text-[10px] sm:text-xs">Obligation free assessment for your home</p>
          </div>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-600 px-2 py-1.5 rounded-r-lg mb-2 animate-shake">
            <p className="text-[10px] sm:text-xs font-medium">{error}</p>
          </div>
        )}
        {responseMessage && (
          <div className={`px-2 py-1.5 rounded-lg mb-2 border-l-4 ${
            responseMessage.includes("Error")
              ? "bg-red-50 border-red-500 text-red-500"
              : "bg-green-50 border-green-500 text-green-600"
          }`}>
            <p className="text-[10px] sm:text-xs font-medium">{responseMessage}</p>
          </div>
        )}
        
        <form className="grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-3" onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div
              key={field.name}
              className="group"
            >
              <label className="text-gray-700 font-semibold text-[10px] sm:text-xs flex items-center gap-1 mb-1">
                <span className={`p-0.5 sm:p-1 rounded transition-all duration-300 ${
                  focusedField === field.name 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {React.cloneElement(field.icon, { className: "w-3 h-3 sm:w-4 sm:h-4" })}
                </span>
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleChange}
                onFocus={() => setFocusedField(field.name)}
                onBlur={() => setFocusedField(null)}
                placeholder={field.placeholder}
                className={`w-full bg-gray-50 font-normal border rounded-lg p-2 sm:p-2.5 text-xs sm:text-sm focus:outline-none transition-all duration-300 placeholder-gray-400 ${
                  focusedField === field.name
                    ? "border-primary bg-white shadow-sm shadow-primary/10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              />
            </div>
          ))}
          
          {/* Solar Question */}
          <div className="text-gray-700 font-semibold text-[10px] sm:text-xs">
            <label className="flex items-center gap-1 mb-1">
              <span className="p-0.5 sm:p-1 rounded bg-gray-100 text-gray-500">
                <Sun className="w-3 h-3 sm:w-4 sm:h-4" />
              </span>
              Do you have an existing solar?
            </label>
            <div className="flex gap-2">
              {["yes", "no"].map((option) => (
                <label
                  key={option}
                  className="flex-1 cursor-pointer"
                >
                  <div
                    className={`p-2 sm:p-2.5 rounded-lg border flex items-center justify-center gap-1.5 transition-all duration-300 ${
                      hasSolar === option
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    <input type="radio" name="existing_solar" value={option} checked={hasSolar === option} onChange={handleChange} className="hidden" />
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      hasSolar === option ? "border-primary bg-primary" : "border-gray-300"
                    }`}>
                      {hasSolar === option && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                    </div>
                    <span className={`font-semibold text-xs sm:text-sm ${hasSolar === option ? "text-primary" : "text-gray-600"}`}>
                      {option === "yes" ? "Yes" : "No"}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>
          
          {hasSolar === "yes" && (
            <div>
              <label className="text-gray-700 font-semibold text-[10px] sm:text-xs flex items-center gap-1 mb-1">
                <span className="p-0.5 sm:p-1 rounded bg-gray-100 text-gray-500">
                  <Sun className="w-3 h-3 sm:w-4 sm:h-4" />
                </span>
                If yes, how many panels?
              </label>
              <input
                type="text"
                name="solarUnits"
                value={formData.solarUnits}
                onChange={handleChange}
                placeholder="Enter the number of units"
                className="w-full bg-gray-50 font-normal border border-gray-200 hover:border-gray-300 focus:border-primary focus:bg-white text-gray-700 rounded-lg p-2 sm:p-2.5 text-xs sm:text-sm focus:outline-none transition-all duration-300 placeholder-gray-400"
              />
            </div>
          )}
          
          {/* Date & Time Section */}
          <div className="sm:col-span-2 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-2 sm:p-3 border border-primary/10">
            <div className="flex items-center gap-1 mb-1.5">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <p className="text-gray-700 font-semibold text-[10px] sm:text-xs">
                Best time to visit for solar assessment?
              </p>
            </div>
            <p className="text-green-600 font-medium text-[9px] sm:text-[10px] mb-2 flex items-center gap-1">
              <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
              Our representative will contact you to confirm.
            </p>
            
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {/* Date */}
              <div>
                <label className="text-gray-600 text-[10px] sm:text-xs font-medium flex items-center gap-1 mb-1">
                  <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Date
                </label>
                <div className="grid grid-cols-3 gap-1">
                  <input type="text" name="dateDay" value={formData.dateDay} onChange={handleChange} placeholder="DD" className="w-full bg-white font-normal border border-gray-200 text-gray-700 rounded p-1.5 text-[10px] sm:text-xs focus:outline-none focus:border-primary" />
                  <select name="dateMonth" value={formData.dateMonth} onChange={handleChange} className="w-full border border-gray-200 rounded p-1.5 text-[10px] sm:text-xs focus:outline-none focus:border-primary bg-white">
                    <option value="">MM</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={i + 1}>{new Date(0, i).toLocaleString("default", { month: "short" })}</option>
                    ))}
                  </select>
                  <input type="text" name="dateYear" value={formData.dateYear} onChange={handleChange} placeholder="YYYY" className="w-full bg-white font-normal border border-gray-200 text-gray-700 rounded p-1.5 text-[10px] sm:text-xs focus:outline-none focus:border-primary" />
                </div>
              </div>
              
              {/* Time */}
              <div>
                <label className="text-gray-600 text-[10px] sm:text-xs font-medium flex items-center gap-1 mb-1">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> Time
                </label>
                <div className="grid grid-cols-3 gap-1">
                  <input type="text" name="timeHours" value={formData.timeHours} onChange={handleChange} placeholder="HH" className="w-full bg-white font-normal border border-gray-200 text-gray-700 rounded p-1.5 text-[10px] sm:text-xs focus:outline-none focus:border-primary" />
                  <input type="text" name="timeMinutes" value={formData.timeMinutes} onChange={handleChange} placeholder="MM" className="w-full bg-white font-normal border border-gray-200 text-gray-700 rounded p-1.5 text-[10px] sm:text-xs focus:outline-none focus:border-primary" />
                  <select name="timePeriod" value={formData.timePeriod} onChange={handleChange} className="w-full border border-gray-200 rounded p-1.5 text-[10px] sm:text-xs focus:outline-none focus:border-primary bg-white">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-teal-700 text-white py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300 mt-1 sm:col-span-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span className="text-xs sm:text-sm">Processing...</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Request Free Consultation</span>
              </>
            )}
          </button>
        </form>
      </div>
      <ThankyouPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

export default ContactForm;
