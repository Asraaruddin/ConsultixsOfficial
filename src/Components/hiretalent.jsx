import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function HireTalent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Web Developers",
      answer:
        "Hire skilled web developers who build fast, scalable, and user-friendly websites tailored to your business goals. Whether it’s frontend, backend, or full-stack — we match you with the right talent for the job.",
    },
    {
      question: "Mobile App Developers",
      answer:
        "Work with expert mobile app developers who create high-performance, secure, and engaging applications for iOS, Android, or cross-platform solutions. From concept to launch, we deliver apps that elevate your brand and drive results.",
    },
    {
      question: "CMS & E-Commerce Developers",
      answer:
        "Hire experienced CMS and e-commerce developers who craft robust, scalable online stores and content platforms. Whether it’s Shopify, WordPress, Magento, or a custom build — we deliver secure, conversion-focused solutions tailored to your needs.",
    },
    {
      question: "Back End Developers",
      answer:
        "Get highly skilled back end developers who build reliable, secure, and scalable server-side systems. We specialize in APIs, databases, and performance optimization to keep your applications running smoothly.",
    },
    {
      question: "Microsoft Developers",
      answer:
        "Work with certified Microsoft developers who excel in .NET, Azure, and Microsoft 365 solutions. We create enterprise-grade applications that integrate seamlessly into your existing workflows.",
    },
    {
      question: "JavaScript Developers",
      answer:
        "Hire versatile JavaScript developers with expertise in modern frameworks like React, Angular, and Vue. We deliver interactive, high-performing web applications built for speed and scalability.",
    },
    {
      question: "Real Estate Professionals",
      answer:
        "Leverage our real estate specialists who understand the market inside-out. From digital property listings to CRM integrations, we help streamline your sales and marketing processes.",
    },
    {
      question: "Digital Marketers",
      answer:
        "Partner with creative digital marketers who craft strategies that boost visibility, engagement, and conversions. We specialize in SEO, PPC, social media, and content marketing to grow your brand.",
    },
    {
      question: "Knowledge Processors",
      answer:
        "Hire skilled knowledge processors to handle data research, analysis, and documentation with accuracy and efficiency — enabling your team to focus on higher-value tasks.",
    },
    {
      question: "Back Office Support",
      answer:
        "Get dependable back office support specialists who manage administration, data entry, and operational tasks, ensuring your business runs smoothly behind the scenes.",
    },
  ];

  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left */}
          <div className="flex flex-col lg:py-6 ml-6">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[80px] tracking-[-0.01em] font-dmsans">
              Build Your Dream Team
            </h2>
            <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-tight max-w-[483px] font-dmsans">
              Hire vetted professionals across tech, design, marketing, and more — flexible, fast, and fully managed by Consultixs.
            </p>
            <button
              className="mt-6 text-white rounded-[12px] flex items-center justify-center w-[200px] sm:w-[240px] lg:w-[295px] h-[48px] text-base sm:text-lg lg:text-[18px] font-bold"
              style={{
                background: "linear-gradient(180deg, #0BC0FD 0%, #055EF2 71.63%)",
              }}
            >
              Book a Call
            </button>
          </div>

          {/* Right */}
          <div className="w-full flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#9C9C9C] pb-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    {faq.question}
                  </h3>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-[18px] font-dmsans text-white">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
