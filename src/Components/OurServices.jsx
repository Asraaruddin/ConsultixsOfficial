import React, { useState } from "react";
import Frame from "../assets/Frame 245.png";
import { FaStar, FaChevronDown } from "react-icons/fa";
import testimonials1 from "../assets/testimonials1.jpg";
import testimonials2 from "../assets/testimonials2.jpg";
import  testimonials3 from "../assets/testimonials3.png"
import ourservicesPic from "../assets/ourservices.jpg"; // Example default image
import software from "../assets/software.png";
import mobile from "../assets/mobile.png";
import microsoft from "../assets/microsoft.png";
import frontend from "../assets/frontend.png";
import clouds from "../assets/clouds.png";
import blockchain from "../assets/blockchain.png";
import backend from "../assets/backend.png";
import arvr from "../assets/arvr.png";
import aiml from "../assets/aiml.png";
import Howitworks from "./Howitworks";
import TopImage from "../assets/top.png"; // replace with actual path
import BottomImage from "../assets/bottom.png";
import { useNavigate } from "react-router-dom";
const testimonials = [
  {
    image: testimonials1,
    name: "John Smith",
    role: "Startup Founder",
    review: "Consultixs built our web app fast, fixed bugs quickly, and communicated clearly. Great team—super reliable and easygoing"
  },
  {
    image: testimonials2,
    name: "Sarah Lee",
    role: "CTO",
    review: "They handled our backend setup smoothly, solved deployment issues, and kept us updated. Felt like working with in-house developers."
  },
  {
    image: testimonials3,
    name: "Michael Johnson",
    role: "Product Manager",
    review: "Consultixs helped us launch on time, optimized performance, and stayed flexible with changes. Definitely recommend for startups and growing teams."
  }
];

const OurServices = () => {



  const faqs = [
    { question: "How experienced is your consulting team?", answer: "Our team comprises industry veterans with 10+ years of collective experience." },
    { question: "Do you offer customized solutions?", answer: "Absolutely. We design bespoke strategies aligned with your unique business goals, resources, and market dynamics—no one-size-fits-all approaches." },
    { question: "How do you communicate progress during a project?", answer: "We provide weekly updates via video calls, detailed reports, and real-time dashboards to ensure you’re always informed and in control." },
    { question: "What is the first step to starting a project?", answer: "We begin with a free discovery call to understand your needs, followed by a proposal outlining objectives, timelines, and costs." },
    { question: "How do you stay updated on industry trends?", answer: "Our team engages in continuous learning through certifications, industry conferences, and partnerships with leading research organizations." },
    { question: "What if we need to terminate a project early?", answer: "We offer flexible terms. Early termination incurs charges only for work completed, with no hidden fees or penalties." },
  ];

  const [openServiceIndex, setOpenServiceIndex] = useState(null);
  const [openIndexDesktop, setOpenIndexDesktop] = useState(null);
  const [openIndexMobile, setOpenIndexMobile] = useState(null);

  const services = [
    {
      name: "UI/UX Design",
      image: ourservicesPic,
      description: "We design and we craft.",
      details:
        "Design thoughtful user experiences and clean interfaces that make digital products easy and enjoyable to use. From wireframes to polished visuals, we craft with purpose and empathy.",
      tags: ["Wireframing", "Prototyping", "User Research", "User Interface"],
    },
    {
      name: "Software Development",
      image: software,
      description: "We build custom software solutions to meet your business needs.",
      details:
        "We specialize in building robust, scalable, and secure software tailored to your business needs. From enterprise systems to consumer apps, we ensure performance and reliability.",
      tags: ["Custom Apps", "System Design", "API Development", "Integration"],
    },
    {
      name: "Mobile App Development",
      image: mobile,
      description: "Native and cross-platform mobile applications.",
      details:
        "Our team creates stunning mobile apps for iOS and Android. Whether native or cross-platform, we deliver apps that are fast, responsive, and user-friendly.",
      tags: ["iOS", "Android", "React Native", "Flutter"],
    },
    {
      name: "Front End Development",
      image: frontend,
      description: "Responsive and interactive user interfaces.",
      details:
        "We craft responsive, accessible, and interactive front-end experiences using modern frameworks and best practices.",
      tags: ["React.js", "Vue.js", "HTML/CSS", "Accessibility"],
    },
    {
      name: "Back End Development",
      image: backend,
      description: "Robust and scalable server-side solutions.",
      details:
        "We build secure, high-performance back-end systems that power your applications and handle complex business logic.",
      tags: ["Node.js", "Express.js", "Databases", "API Security"],
    },
    {
      name: "AI & ML Development",
      image: aiml,
      description: "Smart AI-powered applications.",
      details:
        "Harness the power of AI and machine learning to deliver intelligent features and data-driven insights.",
      tags: ["Machine Learning", "Data Analysis", "Chatbots", "Automation"],
    },
    {
      name: "Microsoft Development",
      image: microsoft,
      description: "Custom Microsoft-based solutions.",
      details:
        "We build solutions using Microsoft technologies like .NET, Azure, and Office integrations.",
      tags: [".NET", "Azure", "SharePoint", "Power BI"],
    },
    {
      name: "Blockchain Development",
      image: blockchain,
      description: "Secure and decentralized applications.",
      details:
        "Our blockchain solutions provide security, transparency, and efficiency for your business operations.",
      tags: ["Smart Contracts", "DApps", "Ethereum", "Hyperledger"],
    },
    {
      name: "AR/VR Development",
      image: arvr,
      description: "Immersive augmented and virtual reality experiences.",
      details:
        "We create interactive and immersive AR/VR applications for training, entertainment, and business solutions.",
      tags: ["Unity", "Unreal Engine", "3D Modeling", "VR Training"],
    },
    {
      name: "Cloud & DevOps",
      image: clouds,
      description: "Scalable cloud infrastructure and DevOps automation.",
      details:
        "We help businesses migrate, optimize, and manage workloads in the cloud with automated DevOps pipelines.",
      tags: ["AWS", "Azure", "CI/CD", "Kubernetes"],
    },
  ];
  const navigate = useNavigate();

  const handleGoToServices = () => {
    navigate("/services");
  };

  return (
    <section className="py-12 bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-20 items-start">

          
          {/* Left Side */}
          <div className="flex flex-col lg:py-6 ml-0 lg:ml-6">
            <h2 className="font-['DM_Sans'] font-bold text-[36px] sm:text-[48px] leading-[50px] sm:leading-[80px] tracking-[-0.01em]">
              Our Services
            </h2>
            <p className="mt-4 text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-tight max-w-[483px] font-dmsans">
              From idea to execution — everything you need to build and scale your business.
            </p>
           <button
      onClick={handleGoToServices}
      className="mt-6 text-white rounded-[12px] flex items-center justify-center w-[160px] sm:w-[200px] lg:w-[295px] h-[40px] sm:h-[48px] text-sm sm:text-lg lg:text-[18px] font-bold cursor-pointer"
      style={{
        background: "linear-gradient(180deg, #0BC0FD 0%, #055EF2 71.63%)",
      }}
    >
      View More
    </button>

            {/* Image with overlay label */}
            {openServiceIndex !== null && (
             
             <div
  className="
    mt-6 relative 
    w-full 
    max-w-[220px]     /* mobile */
    sm:max-w-[320px]  /* tablet */
    md:max-w-md       /* medium */
    lg:w-[414px] lg:h-[439px] /* desktop size */
    rounded-[20px] 
    overflow-hidden 
    bg-[#0D0E10] 
    mx-auto 
    sm:mx-auto 
    lg:ml-[-1px]      /* keep Figma alignment on desktop only */
  "
>
  <img
    src={services[openServiceIndex].image}
    alt={services[openServiceIndex].name}
    className="w-full h-auto object-cover"
  />
  <div
    className="absolute bottom-0 left-0 p-4 w-full"
    style={{
      background: "#000000",
      borderWidth: "1px",
      borderStyle: "solid",
      borderImageSource:
        "linear-gradient(89.79deg, #000000 -60.4%, #666666 50%)",
      borderImageSlice: 1,
    }}
  >
    <h3 className="text-white text-sm sm:text-lg font-semibold">
      {services[openServiceIndex].name}
    </h3>
    <p className="text-gray-300 text-xs sm:text-sm">
      {services[openServiceIndex].description}
    </p>
  </div>
</div>


            )}
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4 px-2 sm:px-6 lg:px-10 xl:px-14 lg:py-10">
            {services.map((service, index) => (
              <div key={index} className="w-full">
                <div
                  className="flex justify-between items-center py-3 border-b border-white/20 cursor-pointer"
                  onClick={() =>
                    setOpenServiceIndex(openServiceIndex === index ? null : index)
                  }
                >
                  <span className="font-['DM_Sans'] font-medium text-xl sm:text-2xl lg:text-[32px] leading-[100%] tracking-[-0.01em]">
                    {service.name}
                  </span>
                  <FaChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${openServiceIndex === index ? "rotate-180" : ""}`}
                  />
                </div>
                {openServiceIndex === index && (
                  <div className="mt-4 mb-6">
                    <p className="text-gray-300 text-sm sm:text-base">{service.details}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {service.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

      <Howitworks/>

      {/* Testimonials */}
      <div className="w-full bg-black flex flex-col items-center text-white px-4 py-12">
      {/* Top Frame */}
      <img
        src={TopImage}
        alt="Top Frame"
        className="w-full max-w-[1440px] object-contain"
      />

      {/* Testimonials Row */}
      <div className="flex justify-center items-start gap-6 max-w-7xl overflow-x-auto sm:overflow-x-hidden flex-wrap mt-8 no-scrollbar">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#0D0D0D] p-4 sm:p-6 rounded-lg flex-shrink-0 w-[85%] sm:w-[300px] md:w-[340px] min-h-[250px]"
          >
            {/* Profile Row */}
            <div className="flex items-center gap-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-[48px] h-[48px] rounded-full object-cover"
              />
              <div>
                <h3 className="text-[#0BC0FD] text-sm sm:text-base font-semibold">
                  {testimonial.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 text-white mt-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={20} />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-sm sm:text-base md:text-[14px] font-dmsans text-left mt-3">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Frame */}
      <img
        src={BottomImage}
        alt="Bottom Frame"
        className="w-full max-w-[1440px] object-contain mt-20 sm:mt-40"
      />
    </div>




      {/* FAQ */}
      {/* FAQ Section */}
      <div id="faq" className="w-full bg-black text-[#ffffff]">
        {/* Desktop & Tablet */}
        <div className="hidden md:block px-6 lg:px-20 py-12 sm:py-16">
          <div className="w-full max-w-7xl mx-auto flex gap-12">
            {/* Left */}
            <div className="w-1/3 flex flex-col justify-start">
              <h2 className="text-[48px] lg:text-[56px] font-dmsans font-bold mb-4">
                FAQs
              </h2>
              <p className="text-xl lg:text-[24px] font-dmsans text-gray-300">
                Have questions? Our FAQ section has you covered with quick answers
                to the most common inquiries.
              </p>
            </div>

            {/* Right */}
            <div className="w-2/3 flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-[#9C9C9C] pb-4 cursor-pointer"
                  onClick={() =>
                    setOpenIndexDesktop(openIndexDesktop === index ? null : index)
                  }
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">{faq.question}</h3>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${openIndexDesktop === index ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                  {openIndexDesktop === index && (
                    <p className="mt-3 text-lg font-dmsans text-white">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="block md:hidden px-4 py-10">
          {/* Heading & Description */}
          <h2 className="text-[32px] font-dmsans font-bold mb-4 text-left">
            FAQs
          </h2>
          <p className="text-base font-dmsans text-gray-300 mb-6 text-left">
            Have questions? Our FAQ section has you covered with quick answers
            to the most common inquiries.
          </p>

          {/* FAQ Items */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-lg p-4 shadow-md cursor-pointer"
                onClick={() =>
                  setOpenIndexMobile(openIndexMobile === index ? null : index)
                }
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-semibold">{faq.question}</h3>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${openIndexMobile === index ? "rotate-180" : ""
                      }`}
                  />
                </div>
                {openIndexMobile === index && (
                  <p className="mt-2 text-sm text-gray-300">{faq.answer}</p>
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
