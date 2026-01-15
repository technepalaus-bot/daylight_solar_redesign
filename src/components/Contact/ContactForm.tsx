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
    <div className="globalContainer bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 max-w-3xl overflow-y-auto sm:overflow-y-visible shadow-2xl border border-gray-100 relative overflow-hidden mx-2 sm:mx-auto">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-20 sm:w-40 h-20 sm:h-40 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg icon-3d">
            <Sun className="w-5 h-5 sm:w-7 sm:h-7 text-secondary animate-spin-slow" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
              Get Your Free Solar Consultation
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">Obligation free assessment for your home</p>
          </div>
        </div>
        
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-600 px-3 sm:px-4 py-2 sm:py-3 rounded-r-xl mb-4 sm:mb-6 animate-shake">
            <p className="text-xs sm:text-sm font-medium">{error}</p>
          </div>
        )}
        {responseMessage && (
          <div className={`px-3 sm:px-4 py-2 sm:py-3 rounded-xl mb-4 sm:mb-6 border-l-4 ${
            responseMessage.includes("Error")
              ? "bg-red-50 border-red-500 text-red-500"
              : "bg-green-50 border-green-500 text-green-600"
          }`}>
            <p className="text-xs sm:text-sm font-medium">{responseMessage}</p>
          </div>
        )}
        
        <form className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6" onSubmit={handleSubmit}>
          {formFields.map((field, idx) => (
            <div
              key={field.name}
              className="group animate-slideUp"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <label className="text-gray-700 font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <span className={`icon-3d p-1 sm:p-1.5 rounded-lg transition-all duration-300 ${
                  focusedField === field.name 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary'
                }`}>
                  {React.cloneElement(field.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
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
                className={`w-full bg-gray-50 font-normal border-2 rounded-xl p-2.5 sm:p-3.5 text-xs sm:text-sm focus:outline-none transition-all duration-300 placeholder-gray-400 input-3d ${
                  focusedField === field.name
                    ? "border-primary bg-white shadow-lg shadow-primary/10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              />
            </div>
          ))}
          
          {/* Solar Question */}
          <div className="text-gray-700 font-semibold text-xs sm:text-sm animate-slideUp" style={{ animationDelay: '250ms' }}>
            <label className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <span className="icon-3d p-1 sm:p-1.5 rounded-lg bg-gray-100 text-gray-500">
                <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
              Do you have an existing solar?
            </label>
            <div className="flex gap-2 sm:gap-3">
              {["yes", "no"].map((option) => (
                <label
                  key={option}
                  className={`flex-1 cursor-pointer transition-all duration-300 ${
                    hasSolar === option ? "scale-[1.02]" : "hover:scale-[1.01]"
                  }`}
                >
                  <div
                    className={`card-3d p-3 sm:p-4 rounded-xl border-2 flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 ${
                      hasSolar === option
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/20"
                        : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-white"
                    }`}
                  >
                    <input type="radio" name="existing_solar" value={option} checked={hasSolar === option} onChange={handleChange} className="hidden" />
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      hasSolar === option ? "border-primary bg-primary" : "border-gray-300"
                    }`}>
                      {hasSolar === option && <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full"></div>}
                    </div>
                    <span className={`font-semibold text-sm sm:text-base ${hasSolar === option ? "text-primary" : "text-gray-600"}`}>
                      {option === "yes" ? "Yes" : "No"}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>
          
          {hasSolar === "yes" && (
            <div className="animate-slideUp">
              <label className="text-gray-700 font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                <span className="icon-3d p-1 sm:p-1.5 rounded-lg bg-gray-100 text-gray-500">
                  <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
                If yes, how many panels?
              </label>
              <input
                type="text"
                name="solarUnits"
                value={formData.solarUnits}
                onChange={handleChange}
                placeholder="Enter the number of units"
                className="w-full bg-gray-50 font-normal border-2 border-gray-200 hover:border-gray-300 focus:border-primary focus:bg-white focus:shadow-lg focus:shadow-primary/10 text-gray-700 rounded-xl p-2.5 sm:p-3.5 text-xs sm:text-sm focus:outline-none transition-all duration-300 placeholder-gray-400 input-3d"
              />
            </div>
          )}
          
          {/* Date & Time Section */}
          <div className="sm:col-span-2 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl sm:rounded-2xl p-3 sm:p-5 border border-primary/10 animate-slideUp" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <p className="text-gray-700 font-semibold text-xs sm:text-sm">
                When is the best suitable time to visit you for solar assessment?
              </p>
            </div>
            <p className="text-green-600 font-medium text-[10px] sm:text-xs mb-3 sm:mb-4 flex items-center gap-1">
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Note: Our representative will contact you to confirm your appointment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {/* Date */}
              <div>
                <label className="text-gray-600 text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" /> Date
                </label>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  <input type="text" name="dateDay" value={formData.dateDay} onChange={handleChange} placeholder="Day" className="w-full bg-white font-normal border-2 border-gray-200 text-gray-700 rounded-lg p-1.5 sm:p-2 text-xs sm:text-sm focus:outline-none focus:border-primary transition-all duration-300 input-3d" />
                  <select name="dateMonth" value={formData.dateMonth} onChange={handleChange} className="w-full border-2 border-gray-200 rounded-lg p-1.5 sm:p-2 text-xs sm:text-sm focus:outline-none focus:border-primary bg-white transition-all duration-300">
                    <option value="">Month</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={i + 1}>{new Date(0, i).toLocaleString("default", { month: "short" })}</option>
                    ))}
                  </select>
                  <input type="text" name="dateYear" value={formData.dateYear} onChange={handleChange} placeholder="Year" className="w-full bg-white font-normal border-2 border-gray-200 text-gray-700 rounded-lg p-1.5 sm:p-2 text-xs sm:text-sm focus:outline-none focus:border-primary transition-all duration-300 input-3d" />
                </div>
              </div>
              
              {/* Time */}
              <div>
                <label className="text-gray-600 text-xs sm:text-sm font-medium flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" /> Time
                </label>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  <input type="text" name="timeHours" value={formData.timeHours} onChange={handleChange} placeholder="Hours" className="w-full bg-white font-normal border-2 border-gray-200 text-gray-700 rounded-lg p-1.5 sm:p-2 text-xs sm:text-sm focus:outline-none focus:border-primary transition-all duration-300 input-3d" />
                  <input type="text" name="timeMinutes" value={formData.timeMinutes} onChange={handleChange} placeholder="Min" className="w-full bg-white font-normal border-2 border-gray-200 text-gray-700 rounded-lg p-1.5 sm:p-2 text-xs sm:text-sm focus:outline-none focus:border-primary transition-all duration-300 input-3d" />
                  <select name="timePeriod" value={formData.timePeriod} onChange={handleChange} className="w-full border-2 border-gray-200 rounded-lg p-1.5 sm:p-2 text-xs sm:text-sm focus:outline-none focus:border-primary bg-white transition-all duration-300">
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
            className="w-full btn-3d bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-teal-700 text-white py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 mt-2 sm:col-span-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span className="text-sm sm:text-base">Processing...</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Request Free Consultation</span>
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
