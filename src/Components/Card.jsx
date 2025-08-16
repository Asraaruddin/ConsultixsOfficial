import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigationType, useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Assets
import Orbit from "../assets/orbit.png";
import Ecommerce from "../assets/ecommerce.png";
import Zentrix from "../assets/zentrix.png";
import Sigma from "../assets/sigma.png";
import Property from "../assets/property.png";
import BgHome from "../assets/bghome.png";

// Websites Data
const websiteCards = [
  {
    title: "propertynexus.com",
    image: Orbit,
    link: "https://roaring-creponne-21ce83.netlify.app/",
  },
  {
    title: "shopsphere.com",
    image: Ecommerce,
    link: "https://shopsphere-5job.vercel.app/",
  },
  {
    title: "zentrix.com",
    image: Zentrix,
    link: "https://zentrick-solutions.vercel.app/",
  },
  {
    title: "SigmaVault.com",
    image: Sigma,
    link: "https://sigma-vault.vercel.app/",
  },
  {
    title: "propertynexus.com",
    image: Property,
    link: "https://property-nexus.vercel.app/",
  },
];

// Case Studies Data
const caseStudyCards = [
  {
    displayTitle: "Digital Marketing",
    topTitle: "DIGITAL MARKETING",
    subTitle: "CO-REGISTRATION CAMPAIGN",
    pdfLink:
      "https://drive.google.com/file/d/1Y--kfUAlgf-wDjXB3M8ddn9umkOUTVhx/view?usp=drive_link", 
  },
  {
    displayTitle: "E Commerce",
    topTitle: "E COMMERCE",
    subTitle: "BUY AND SELL PRODUCTS",
    pdfLink: "https://drive.google.com/file/d/16HA72xlvVJ1L72okk9CUw2FSGYDDJADM/view",
  },
  {
    displayTitle: "AI Chatbot & Financial Advisor",
    topTitle: "AI CHATBOT &",
    subTitle: "AI FINANCIAL ADVISOR PLATFORM",
    pdfLink: "https://drive.google.com/file/d/1ZSd4WzukQFVnSHYiJwBm6745sqmNszEV/view",
  },
  {
    displayTitle: "Real Estate",
    topTitle: "REAL ESTATE",
    subTitle: "& LOAN MORTGAGE REPORT",
    pdfLink:
      "https://drive.google.com/file/d/1zpa-RIkJBZPKO1rVvkymolXhiJrgpUvS/view?usp=drive_link",
  },
  {
    displayTitle: "Wealth Management",
    topTitle: "PROJECT REPORT",
    subTitle: "WEALTH MANAGEMENT",
    pdfLink: "https://drive.google.com/file/d/1Tt8YIlN2xFBQRtamkK1GKELMbNnU2pOw/view",
  },
];

const Cards = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const hasScrolled = useRef(false);

  const [activeTab, setActiveTab] = useState("websites");

  const cardsToShow = activeTab === "websites" ? websiteCards : caseStudyCards;

  useEffect(() => {
    if (
      navigationType === "PUSH" &&
      !hasScrolled.current &&
      location.state?.scrollTo
    ) {
      if (location.state.scrollTo === "case-studies") {
        setActiveTab("caseStudies");
        setTimeout(() => {
          document
            .getElementById("case-studies")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      if (location.state.scrollTo === "websites") {
        setActiveTab("websites");
        setTimeout(() => {
          document
            .getElementById("websites")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }

      hasScrolled.current = true;
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigationType, navigate]);

  return (
    <div className="w-full bg-black py-20 px-14">
      {/* Toggle Buttons */}
      <div
        className="flex items-center gap-2 mb-10 cursor-pointer"
        style={{
          width: "294px",
          height: "53px",
          borderRadius: "12px",
          border: "1px solid #7C7C7C",
          padding: "4px",
        }}
      >
        <button
          onClick={() => setActiveTab("websites")}
          className={`cursor-pointer font-medium text-sm ${
            activeTab === "websites"
              ? "bg-white text-black"
              : "bg-transparent text-white"
          }`}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            width: "143px",
            height: "45px",
            borderRadius: "8px",
            padding: "12px 20px",
          }}
        >
          Websites
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("caseStudies")}
          className={`cursor-pointer font-medium text-sm ${
            activeTab === "caseStudies"
              ? "bg-white text-black"
              : "bg-transparent text-white"
          }`}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            width: "143px",
            height: "45px",
            borderRadius: "8px",
            padding: "12px 20px",
          }}
        >
          Case Studies
        </button>
      </div>

      {/* Card Grid */}
      <div
        id={activeTab === "websites" ? "websites" : "case-studies"}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 place-items-center"
      >
        {cardsToShow.map((card, index) => (
          <div
            key={index}
            onClick={() =>
              window.open(
                activeTab === "websites" ? card.link : card.pdfLink,
                "_blank"
              )
            }
            className="cursor-pointer w-[360.33px] h-[453.14px] rounded-[4px] overflow-hidden shadow-lg bg-[#111] border border-[#1f1f1f] transition-transform duration-300 hover:scale-[1.02] group"
          >
            {/* Top Frame */}
            <div
              className="flex items-center justify-between border-b border-[#2a2a2a] px-3"
              style={{
                width: "100%",
                height: "37px",
                backgroundColor: "#1A1A1A",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center gap-2 opacity-50 transition-opacity group-hover:opacity-100"
                  style={{ width: "52px", height: "12px" }}
                >
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <div
                  className="flex items-center justify-center border border-[#2a2a2a] rounded-[4px]"
                  style={{
                    width: "245px",
                    height: "30px",
                  }}
                >
                  <span
                    className="truncate"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "100%",
                      letterSpacing: "-0.16px",
                      color: "#FFFFFF",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {activeTab === "websites"
                      ? card.title
                      : card.displayTitle}
                  </span>
                </div>
              </div>

              <ArrowUpRight
                className="text-white opacity-50 transition-opacity group-hover:opacity-100"
                style={{
                  width: "32px",
                  height: "32px",
                }}
              />
            </div>

            {/* Content */}
            {activeTab === "websites" ? (
              <div className="p-2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[390px] object-cover object-top rounded-[4px]"
                />
              </div>
            ) : (
              <div
                className="flex flex-col justify-center items-center text-center px-4"
                style={{
                  width: "100%",
                  height: "390px",
                  backgroundImage: `url(${BgHome})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "32.5px",
                    lineHeight: "100%",
                    textAlign: "center",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                  }}
                >
                  {card.topTitle}
                </h3>

                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "28px",
                    lineHeight: "100%",
                    textAlign: "center",
                    color: "#B7B7B7",
                    textTransform: "uppercase",
                    marginTop: "4px",
                  }}
                >
                  {card.subTitle === "AI FINANCIAL ADVISOR PLATFORM" ? (
                    <>
                      AI FINANCIAL ADVISOR <br /> PLATFORM
                    </>
                  ) : (
                    card.subTitle
                  )}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
