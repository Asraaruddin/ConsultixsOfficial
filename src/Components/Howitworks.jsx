import React from "react";
import bgHowItWorks from "../assets/bghowitworks.png";

const Howitworks = () => {
  const steps = [
    {
      step: "Step—1",
      title: "Discovery & Analysis",
      text: "In this phase, consultants gather insights into the company’s current IT environment, goals, and challenges. They assess the infrastructure, software, security, and processes to identify gaps and opportunities for improvement.",
      tags: ["Comprehensive Consultation", "Project Roadmap"],
    },
    {
      step: "Step—2",
      title: "Strategic Planning & Solution Design",
      text: "Based on the analysis, consultants develop a strategic plan tailored to the company’s objectives. They design solutions to address identified needs, which could include optimizing existing systems, implementing new technologies, or enhancing security measures.",
      tags: ["Seamless Integration", "Documentation"],
    },
    {
      step: "Step—3",
      title: "Implementation & Ongoing Support",
      text: "Consultants oversee the rollout of the solutions, ensuring seamless integration into the company’s operations. They provide ongoing support to monitor performance, troubleshoot issues, and update systems as needed, ensuring that the IT infrastructure remains efficient and aligned with business goals.",
      tags: ["Ongoing Support", "Plan Review"],
    },
  ];

  return (
    <div className="w-full bg-black flex flex-col items-center">
      {/* Top frame image */}
      

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center w-full mt-40 px-4 md:px-0">
        {/* Heading */}
        <div
          style={{
            maxWidth: "1089px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
          className="mx-auto text-center"
        >
          <h2 className="font-['DM Sans'] font-semibold text-white m-0 text-[32px] leading-[48px] sm:text-[48px] sm:leading-[80px]">
            How It Works Chaos To Confidence
          </h2>

          <p className="font-['DM Sans'] font-light text-[#D1D5DB] m-0 text-[16px] leading-[28px] sm:text-[24px] sm:leading-[36px]">
            Consultixs helps businesses leverage technology to boost growth and
            efficiency. By assessing current systems and understanding unique
            needs, consultants develop tailored solutions, whether for
            optimizing infrastructure, enhancing security, or integrating new
            tools.
          </p>
        </div>

         <div className="mt-12 flex justify-center">
          <button
            style={{
              background: "linear-gradient(180deg, #0BC0FD 0%, #055EF2 71.63%)",
              width: "295px",
              height: "48px",
              borderRadius: "12px",
              color: "#FFFFFF",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              cursor: "pointer",
              border: "none",
            }}
          >
            Book an Appointment
          </button>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-20 items-center mt-40 w-full">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-full"
            >
              {/* Step badge */}
              <div
                className="absolute -top-10 flex items-center justify-center"
                style={{
                  width: "151px",
                  height: "54px",
                  borderRadius: "16px",
                  border: "2.8px solid #055EF233",
                  boxShadow: "0px 4px 4px 0px #00000040",
                  backgroundColor: "#45454533",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "20px",
                  color: "rgba(255, 255, 255, 0.85)",
                }}
              >
                {item.step}
              </div>

              {/* Card */}
              <div
                className="relative flex flex-col justify-between p-6 sm:p-8"
                style={{
                  width: "100%",
                  maxWidth: "726px",
                  height: "auto",
                  minHeight: "382px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.5)",
                  backgroundColor: "rgba(0, 1, 0, 0.1)",
                }}
              >
                {/* Background image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${bgHowItWorks})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 1,
                    zIndex: 0,
                  }}
                ></div>

                {/* Text content */}
                <div className="relative z-10">
                  <h3 className="font-['DM Sans'] font-bold text-white mt-6 text-[20px] leading-[30px] sm:text-[24px] sm:leading-[36px]">
                    {item.title}
                  </h3>
                  <p className="font-['DM Sans'] font-light text-white mt-4 text-[16px] leading-[28px] sm:text-[20px] sm:leading-[36px]">
                    {item.text}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 relative z-10 mt-4">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center justify-center text-center font-['DM Sans'] font-light text-white text-[12px] leading-[20px] px-4 py-2 rounded-lg"
                      style={{
                        backgroundColor: "#1B1B1B",
                        minWidth: i === 0 ? "201px" : "163px",
                        height: "40px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

       
       
      </div>

      {/* Bottom frame image */}
      

      {/* Responsive overrides */}
      <style>
        {`
          @media (max-width: 1024px) {
            .mt-40 {
              margin-top: 3rem !important;
            }
            .gap-20 {
              gap: 2rem !important;
            }
          }
          @media (max-width: 768px) {
            h2 {
              font-size: 28px !important;
              line-height: 40px !important;
            }
            p {
              font-size: 16px !important;
              line-height: 26px !important;
            }
            .-top-10 {
              top: -1.5rem !important;
            }
          }
          @media (max-width: 480px) {
            .mt-40 {
              margin-top: 2rem !important;
            }
            .gap-20 {
              gap: 1.5rem !important;
            }
            .p-8 {
              padding: 1rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Howitworks;
