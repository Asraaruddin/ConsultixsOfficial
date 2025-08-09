import React from "react";
import { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Frame from "../assets/Frame 245.png";
import { FaStar, FaUserCircle ,FaChevronDown} from "react-icons/fa";


const OurServices = () => {
  const faqs = [
    {
      question: "How experienced is your consulting team?",
      answer: "Our team comprises industry veterans with 10+ years of collective experience.",
    },
    {
      question: "Do you offer customized solutions?",
      answer:
        "Absolutely. We design bespoke strategies aligned with your unique business goals, resources, and market dynamics—no one-size-fits-all approaches.",
    },
    {
      question: "How do you communicate progress during a project?",
      answer:
        "We provide weekly updates via video calls, detailed reports, and real-time dashboards to ensure you’re always informed and in control.",
    },
    {
      question: "What is the first step to starting a project?",
      answer:
        "We begin with a free discovery call to understand your needs, followed by a proposal outlining objectives, timelines, and costs.",
    },
    {
      question: "How do you stay updated on industry trends?",
      answer:
        "Our team engages in continuous learning through certifications, industry conferences, and partnerships with leading research organizations.",
    },
    {
      question: "What if we need to terminate a project early?",
      answer:
        "We offer flexible terms. Early termination incurs charges only for work completed, with no hidden fees or penalties.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const services = [
    "Software Development",
    "UI/UX Design",
    "Mobile App Development",
    "Front End Development",
    "Back End Development",
    "AI & ML Development",
    "Microsoft Development",
    "Blockchain Development",
    "AR/VR Development",
    "Cloud & DevOps",
  ];

  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left */}
          <div className="flex flex-col lg:py-6 ml-6">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[80px] tracking-[-0.01em] font-dmsans">
              Our Services
            </h2>
            <p className="mt-4 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-tight max-w-[483px] font-dmsans">
              From idea to execution — everything you{" "}
              <br className="hidden sm:block" /> 
              need to build and scale your business.
            </p>
            <button
              className="mt-6 text-white rounded-[12px] flex items-center justify-center w-[200px] sm:w-[240px] lg:w-[295px] h-[48px] text-base sm:text-lg lg:text-[18px] font-bold"
              style={{
                background: "linear-gradient(180deg, #0BC0FD 0%, #055EF2 71.63%)",
                padding: "12px 20px",
                gap: "8px",
              }}
            >
              Book a Call
            </button>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 px-2 sm:px-6 lg:px-10 xl:px-14 lg:py-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 border-b border-white/20"
              >
                <span className="font-bold text-lg sm:text-xl lg:text-[22px] font-dmsans">
                  {service}
                </span>
                <FaArrowUpRightFromSquare className="text-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className="w-full bg-center bg-no-repeat flex justify-center items-center text-white px-4 py-12"
        style={{
          backgroundImage: `url(${Frame})`,
          backgroundColor: "black",
          backgroundSize: "contain",
          minHeight: "600px",
        }}
      >
        <div className="flex justify-center items-center gap-6 flex-wrap max-w-7xl">
          {[1, 2, 3].map((card) => (
            <div
              key={card}
              className="bg-[#0D0D0D] flex flex-col justify-between items-start p-4 sm:p-6 rounded-lg"
              style={{ width: "100%", maxWidth: "340px", minHeight: "250px" }}
            >
              <FaUserCircle size={40} className="text-gray-400" />
              <div className="flex gap-1 text-white mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={20} />
                ))}
              </div>
              <p className="text-sm sm:text-base md:text-[14px] font-dmsans text-left mt-3">
                Have questions? Our FAQ section has you covered with quick answers to
                the most common inquiries.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div
        id="faq"
        className="w-full bg-black text-white flex items-start px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16"
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12">
          {/* Left */}
          <div className="md:w-1/3 flex flex-col justify-start text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-[48px] lg:text-[56px] font-dmsans font-bold mb-4">
              FAQs
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[24px] font-dmsans text-gray-300">
              Have questions? Our FAQ section has you covered with quick answers
              to the most common inquiries.
            </p>
          </div>

          {/* Right */}
          <div className="md:w-2/3 flex flex-col gap-4">
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
};

export default OurServices;
