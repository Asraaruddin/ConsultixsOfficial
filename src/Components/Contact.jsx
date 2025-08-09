import React, { useState, forwardRef } from 'react';
import { Send } from 'lucide-react';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    country: '',
    companyType: '',
    message: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section
      id="contact"
      ref={ref}   // <-- Attach the forwarded ref here
      className="bg-black text-white w-full flex justify-center px-4 sm:px-6 md:px-10 py-12 -mt-4"
    >
      <div className="max-w-[1280px] w-full flex flex-col lg:flex-row items-start justify-between gap-20">
        
        {/* Left Side - Text */}
        <div className="max-w-[452px] h-[181px] flex flex-col gap-[8px]">
          <h2 className="font-dmsans font-bold text-[56px] leading-[80px] tracking-[0.01em] text-white">
            Contact Us
          </h2>
          <p className="text-[21px] leading-[32px] font-normal font-dmsans text-white">
            Whether you have a question, need assistance, or want to start a new  <br />project, our team is here to help.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="w-full max-w-[778px] bg-[#151515] rounded-[16px] px-[24px] pt-[32px] pb-[32px] ">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]"> 
              <div>
                <label className="block text-[16px] font-semibold mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-3 placeholder-[#DBDBDB] focus:border-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[16px] font-semibold mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-3 placeholder-[#DBDBDB] focus:border-white focus:outline-none"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div>
                <label className="block text-[16px] font-semibold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-3 placeholder-[#DBDBDB] focus:border-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[16px] font-semibold mb-1">Company Name</label>
                <input
                  type="text"
                  placeholder="Enter company Name"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-3 placeholder-[#DBDBDB] focus:border-white focus:outline-none"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              <div>
                <label className="block text-[16px] font-semibold mb-1">Where are you from?</label>
                <select
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-3 text-white placeholder-[#DBDBDB] focus:border-white focus:outline-none"
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
                  onChange={(e) => handleInputChange('companyType', e.target.value)}
                  className="w-full bg-transparent border border-[#6C6C6C] rounded-lg px-3 py-3 text-white placeholder-[#DBDBDB] focus:border-white focus:outline-none"
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
              <label className="block text-[16px] font-semibold mb-1">Message</label>
              <textarea
                placeholder="Enter message..."
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
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
      </div>
    </section>
  );
});

export default Contact;