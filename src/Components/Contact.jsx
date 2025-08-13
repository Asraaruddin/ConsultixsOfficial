import React, { useState, forwardRef } from "react";
import { SendHorizontal } from "lucide-react";

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

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    // Submit logic here
  };

  const dropdownStyles =
    "w-full appearance-none bg-[#151515] border border-[#6C6C6C] rounded-lg px-3 py-2 sm:py-3 text-white focus:border-white focus:outline-none text-sm sm:text-base";

  // const openCalendly = () => {
  //   window.Calendly.initPopupWidget({
  //     url: "https://calendly.com/mdmoghnishah/30min"
  //   });
  // };

   const handleScheduleMeeting = async () => {
    try {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess('Message sent successfully!');
      setFormData({ 
        firstName: '', 
        lastName: '', 
        email: '', 
        companyName: '', 
        country: '', 
        companyType: '', 
        message: '' 
      });
    } else {
      setError(data.error || 'Something went wrong.');
    }

  } catch (err) {
    console.error(err);
    setError('Server error. Try again later.');
  }

  // Then redirect after successful submission (optional)
  window.location.href = 'https://calendly.com/company-consultixs/30min';
};

  

  return (
    <section
      id="contact"
      ref={ref}
      className="bg-black text-white w-full flex justify-center px-4 sm:px-6 md:px-10 py-12 -mt-4 md:pb-35"
    >
      <div className="max-w-[1280px] w-full flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Left Side */}
        <div className="max-w-[452px] flex flex-col gap-3 text-left">
          <h2 className="font-dmsans font-bold text-[32px] md:text-[56px]">
            Contact Us
          </h2>
          <p className="text-[16px] md:text-[21px] leading-[24px] md:leading-[32px] font-normal font-dmsans">
            Whether you have a question, need assistance, or want to start a new
            project, our team is here to help.
          </p>
        </div>


        {/* Responsive Form */}
        <div className="w-full max-w-[778px] bg-[#151515] rounded-[16px] px-4 sm:px-[24px] pt-6 sm:pt-[32px] pb-6 sm:pb-[32px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[24px]">
              <div>
                <label className="block text-[14px] sm:text-[16px] font-semibold mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-2 sm:py-3 placeholder-[#DBDBDB] focus:border-white focus:outline-none text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-[14px] sm:text-[16px] font-semibold mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-2 sm:py-3 placeholder-[#DBDBDB] focus:border-white focus:outline-none text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[24px]">
              <div>
                <label className="block text-[14px] sm:text-[16px] font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-2 sm:py-3 placeholder-[#DBDBDB] focus:border-white focus:outline-none text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-[14px] sm:text-[16px] font-semibold mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Company Name"
                  value={formData.companyName}
                  onChange={(e) =>
                    handleInputChange("companyName", e.target.value)
                  }
                  className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-2 sm:py-3 placeholder-[#DBDBDB] focus:border-white focus:outline-none text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Row 3 - Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[24px]">
              {/* Country */}
              <div>
                <label className="block text-[14px] sm:text-[16px] font-semibold mb-1">
                  Where are you from?
                </label>
                <div className="relative">
                  <select
                    value={formData.country}
                    onChange={(e) =>
                      handleInputChange("country", e.target.value)
                    }
                    className={dropdownStyles}
                  >
                    <option value="">Select Country</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                    <option value="other">Other</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Company Type */}
              <div>
                <label className="block text-[14px] sm:text-[16px] font-semibold mb-1 whitespace-nowrap">
                  What type of company do you work in?
                </label>
                <div className="relative">
                  <select
                    value={formData.companyType}
                    onChange={(e) =>
                      handleInputChange("companyType", e.target.value)
                    }
                    className={dropdownStyles}
                  >
                    <option value="">Select Category</option>
                    <option value="startup">Startup</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="agency">Agency</option>
                    <option value="freelance">Freelance</option>
                    <option value="other">Other</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-[14px] sm:text-[16px] font-semibold mb-1">
                Message
              </label>
              <textarea
                placeholder="Enter message..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={3}
                className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-2 sm:py-3 placeholder-[#DBDBDB] focus:border-white focus:outline-none text-sm sm:text-base"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              // onClick={() => window.open('https://calendly.com/company-consultixs/30min', '_blank')}
              onClick={handleScheduleMeeting}
              className="w-full bg-gradient-to-b from-[#0BC0FD] to-[#055EF2] py-2 sm:py-3 rounded-[12px] text-sm sm:text-base font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Schedule Meeting
              <div className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>

            {success && <p className="text-green-400 mt-4">{success}</p>}
            {error && <p className="text-red-400 mt-4">{error}</p>}


          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;