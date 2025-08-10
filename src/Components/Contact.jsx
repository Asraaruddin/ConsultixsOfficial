import React, { useState, forwardRef } from "react";
import { Send } from "lucide-react";

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    country: "",
    companyType: "",
    message: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic
  };

  // Desktop form layout
  const renderDesktopForm = () => (
    <div className="w-full max-w-[778px] bg-[#151515] rounded-[16px] px-[24px] pt-[32px] pb-[32px]">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          <div>
            <label className="block text-[16px] font-semibold mb-1">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={(e) =>
                handleInputChange("firstName", e.target.value)
              }
              className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-3 placeholder-[#DBDBDB] focus:border-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[16px] font-semibold mb-1">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={(e) =>
                handleInputChange("lastName", e.target.value)
              }
              className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-3 placeholder-[#DBDBDB] focus:border-white focus:outline-none"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          <div>
            <label className="block text-[16px] font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-3 placeholder-[#DBDBDB] focus:border-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[16px] font-semibold mb-1">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Enter Company Name"
              value={formData.companyName}
              onChange={(e) =>
                handleInputChange("companyName", e.target.value)
              }
              className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-3 placeholder-[#DBDBDB] focus:border-white focus:outline-none"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          <div>
            <label className="block text-[16px] font-semibold mb-1">
              Where are you from?
            </label>
            <select
              value={formData.country}
              onChange={(e) =>
                handleInputChange("country", e.target.value)
              }
              className="w-full bg-black border border-[#6C6C6C] rounded-lg px-3 py-3 text-white focus:border-white focus:outline-none"
            >
              <option value="">Select Country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-[16px] font-semibold mb-1 whitespace-nowrap">
              What type of company do you work in?
            </label>
            <select
              value={formData.companyType}
              onChange={(e) =>
                handleInputChange("companyType", e.target.value)
              }
              className="w-full bg-black border border-[#6C6C6C] rounded-lg px-3 py-3 text-white focus:border-white focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="startup">Startup</option>
              <option value="enterprise">Enterprise</option>
              <option value="agency">Agency</option>
              <option value="freelance">Freelance</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-[16px] font-semibold mb-1">
            Message
          </label>
          <textarea
            placeholder="Enter message..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            rows={3}
            className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-3 placeholder-[#DBDBDB] focus:border-white focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-b from-[#0BC0FD] to-[#055EF2] py-3 rounded-[12px] text-base font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-4"
        >
          Send a Message
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );

  // Mobile form layout
  const renderMobileForm = () => (
    <div className="w-full bg-[#151515] rounded-[12px] px-4 pt-6 pb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
          className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-2 placeholder-[#DBDBDB] focus:border-white focus:outline-none text-sm"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-2 placeholder-[#DBDBDB] focus:border-white focus:outline-none text-sm"
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          rows={4}
          className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-2 placeholder-[#DBDBDB] focus:border-white focus:outline-none text-sm"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-b from-[#0BC0FD] to-[#055EF2] py-2 rounded-[8px] text-sm font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          Send
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-black text-white w-full flex justify-center px-4 sm:px-6 md:px-10 py-12 -mt-4"
    >
      <div className="max-w-[1280px] w-full">
        {/* Desktop & Tablet Layout */}
        <div className="hidden lg:flex flex-row items-start justify-between gap-20">
          {/* Left Side */}
          <div className="max-w-[452px] h-[181px] flex flex-col gap-[8px]">
            <h2 className="font-dmsans font-bold text-[56px] leading-[80px] tracking-[0.01em]">
              Contact Us
            </h2>
            <p className="text-[21px] leading-[32px] font-normal font-dmsans">
              Whether you have a question, need assistance, or want to start a
              new <br /> project, our team is here to help.
            </p>
          </div>
          {renderDesktopForm()}
        </div>

        {/* Mobile & Small Tablet Layout */}
        <div className="flex lg:hidden flex-col gap-8">
          <h2 className="font-dmsans font-bold text-[32px] leading-[40px] tracking-[0.01em] text-center">
            Contact Us
          </h2>
          <p className="text-[16px] leading-[24px] font-normal font-dmsans text-center">
            Whether you have a question, need assistance, or want to start a
            new project, our team is here to help.
          </p>
          {renderMobileForm()}
        </div>
      </div>
    </section>
  );
});

export default Contact;
