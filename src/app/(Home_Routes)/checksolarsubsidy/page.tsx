"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { ArrowRight, Sun, CheckCircle2, Sparkles, Home, Zap, DollarSign } from "lucide-react";
import { sendSolarSubsidyEmail } from "./action";
import Congrats from "@/components/Contact/Congrats";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CheckSolarSubsidy = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    homeAddress: "",
    contactNumber: "",
    averagePowerBill: "",
    property: "",
    existingSolar: "",
    solarCount: "",
  });

  const [hasExistingSolar, setHasExistingSolar] = useState<"yes" | "no" | null>(
    null
  );
  const [errors, setErrors] = useState<string[]>([]);
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "existingSolar") {
      setHasExistingSolar(value as "yes" | "no");
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setResponseMessage("");
    setErrors([]);
    setLoading(true);

    try {
      const { message, error } = await sendSolarSubsidyEmail(formData);
      if (error) throw new Error(error);

      setResponseMessage(message || "Email sent successfully!");
      setIsPopupOpen(true);
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
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    { icon: <DollarSign className="w-5 h-5" />, text: "Save up to $10,000" },
    { icon: <Zap className="w-5 h-5" />, text: "Reduce Energy Bills" },
    { icon: <Home className="w-5 h-5" />, text: "Increase Home Value" },
  ];

  const formFields = [
    {
      label: "Full Name",
      name: "fullName",
      placeholder: "Enter your full name",
      type: "text",
      icon: "👤",
    },
    {
      label: "Home Address",
      name: "homeAddress",
      placeholder: "Enter your home address",
      type: "text",
      icon: "🏠",
    },
    {
      label: "Contact Number",
      name: "contactNumber",
      placeholder: "Enter your contact number",
      type: "tel",
      icon: "📱",
    },
    {
      label: "Average Power Bill (Quarterly)",
      name: "averagePowerBill",
      placeholder: "$ Enter your average power bill",
      type: "text",
      icon: "💰",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navbar */}
      <Navbar />
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/3 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      
      <section className="max-w-7xl mx-auto mt-28 mb-16 flex flex-col lg:flex-row items-stretch gap-8 px-4 relative z-10 animate-fadeIn">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl group min-h-[400px] lg:min-h-[700px] card-hover hover:shadow-primary/20">
          <Image
            src="/img/Rectangle 31.png"
            alt="Solar Panels Installation"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent group-hover:from-primary/90 transition-all duration-500"></div>
          
          {/* Benefits overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <div className="flex flex-col gap-3">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-pointer animate-slideUp"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:animate-bounce-soft">
                    {benefit.icon}
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden hover:shadow-3xl transition-shadow duration-500 animate-slideInRight">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-primary mb-4 group cursor-pointer">
              <Sun className="w-6 h-6 text-secondary animate-spin-slow group-hover:animate-pulse" />
              <span className="text-sm font-semibold uppercase tracking-wider group-hover:text-secondary transition-colors duration-300">Free Assessment</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 hover:text-primary/80 transition-colors duration-300">
              Check Your Solar Subsidy
            </h2>
            <p className="text-gray-500 mb-8 hover:text-gray-700 transition-colors duration-300">Find out how much you can save with solar energy</p>
            
            {errors.length > 0 && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-4 flex items-center gap-2 animate-shake">
                <span className="text-sm font-medium">Please fill out all required fields.</span>
              </div>
            )}
            {responseMessage && !responseMessage.includes("Error") && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-xl mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm font-medium">{responseMessage}</span>
              </div>
            )}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl mb-4">
                <span className="text-sm font-medium">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {formFields.map((field, idx) => (
                <div 
                  key={field.name}
                  className="group animate-slideUp hover:scale-[1.01] transition-transform duration-300"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <label className="text-gray-700 font-semibold text-sm flex items-center gap-2 mb-2 group-hover:text-primary transition-colors duration-300">
                    <span className={`icon-3d text-xl p-1.5 rounded-lg transition-all duration-300 ${
                      focusedField === field.name
                        ? 'bg-primary/10 scale-110 rotate-12'
                        : 'group-hover:scale-110 group-hover:rotate-6'
                    }`}>{field.icon}</span> 
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
                    className={`w-full bg-gray-50 border-2 input-3d ${
                      errors.includes(field.name)
                        ? "border-red-400 bg-red-50"
                        : focusedField === field.name
                        ? "border-primary bg-white shadow-lg shadow-primary/10 scale-[1.02]"
                        : "border-gray-200 hover:border-primary/50 hover:shadow-md"
                    } rounded-xl p-4 placeholder:text-gray-400 focus:outline-none transition-all duration-300`}
                  />
                </div>
              ))}

              <div className="animate-slideUp" style={{ animationDelay: "200ms" }}>
                <label className="text-gray-700 font-semibold text-sm flex items-center gap-2 mb-3">
                  <span className="icon-3d text-xl">🏡</span> Are you owning a property?
                </label>
                <div className="flex gap-4">
                  {["yes", "no"].map((option) => (
                    <label
                      key={option}
                      className={`flex-1 cursor-pointer transition-all duration-300 ${
                        formData.property === option
                          ? "scale-[1.02]"
                          : "hover:scale-[1.01]"
                      }`}
                    >
                      <div
                        className={`card-3d p-4 border-2 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 ${
                          formData.property === option
                            ? "border-primary bg-primary/5 shadow-lg shadow-primary/20"
                            : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="property"
                          value={option}
                          checked={formData.property === option}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          formData.property === option
                            ? "border-primary bg-primary"
                            : "border-gray-300"
                        }`}>
                          {formData.property === option && (
                            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className={`font-semibold ${formData.property === option ? "text-primary" : "text-gray-600"}`}>
                          {option === "yes" ? "Yes" : "No"}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="animate-slideUp" style={{ animationDelay: "250ms" }}>
                <label className="text-gray-700 font-semibold text-sm flex items-center gap-2 mb-3">
                  <span className="icon-3d text-xl">☀️</span> Do you have any existing solar?
                </label>
                <div className="flex gap-4">
                  {["yes", "no"].map((option) => (
                    <label
                      key={option}
                      className={`flex-1 cursor-pointer transition-all duration-300 ${
                        formData.existingSolar === option
                          ? "scale-[1.02]"
                          : "hover:scale-[1.01]"
                      }`}
                    >
                      <div
                        className={`card-3d p-4 border-2 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 ${
                          formData.existingSolar === option
                            ? "border-primary bg-primary/5 shadow-lg shadow-primary/20"
                            : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-white"
                        }`}
                      >
                        <input
                          type="radio"
                          name="existingSolar"
                          value={option}
                          checked={formData.existingSolar === option}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          formData.existingSolar === option
                            ? "border-primary bg-primary"
                            : "border-gray-300"
                        }`}>
                          {formData.existingSolar === option && (
                            <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className={`font-semibold ${formData.existingSolar === option ? "text-primary" : "text-gray-600"}`}>
                          {option === "yes" ? "Yes" : "No"}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {hasExistingSolar === "yes" && (
                <div className="animate-slideUp">
                  <label className="text-gray-700 font-semibold text-sm flex items-center gap-2 mb-2">
                    <span className="icon-3d text-xl">🔢</span> If yes, how many panels?
                  </label>
                  <input
                    type="number"
                    name="solarCount"
                    value={formData.solarCount}
                    onChange={handleChange}
                    placeholder="Enter the number of solar panels"
                    className={`w-full bg-gray-50 border-2 input-3d ${
                      errors.includes("solarCount")
                        ? "border-red-400 bg-red-50"
                        : "border-gray-200 hover:border-gray-300 focus:border-primary focus:bg-white focus:shadow-lg focus:shadow-primary/10"
                    } rounded-xl p-4 placeholder:text-gray-400 focus:outline-none transition-all duration-300`}
                  />
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-3d bg-gradient-to-r from-primary to-primary/90 hover:from-primary hover:to-teal-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-8 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98]"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 icon-3d animate-pulse" />
                    Check Eligibility
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        <Congrats isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CheckSolarSubsidy;
