import { useNavigate } from "react-router-dom";

export default function Hero3() {
  const navigate = useNavigate();

  // Scroll to the Contact section (same page)
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigate to Portfolio and tell it to scroll to Case Studies
  const handleGoToPortfolioCaseStudies = () => {
    navigate("/portfolio", { state: { scrollTo: "case-studies" } });
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-white text-[24px] md:text-[64px] font-medium font-dmsans">
        Services That Power Your Growth
      </h1>

      <p className="text-white text-[12px] md:text-[20px] max-w-2xl font-light">
        End-to-end tech, marketing, and outsourcing to help your business scale faster.
      </p>

      <div className="mt-6 flex gap-4">
        {/* View More Work → Portfolio Case Studies */}
        <button
          onClick={handleGoToPortfolioCaseStudies}
          className="px-6 py-3 bg-gradient-to-b from-[#0BC0FD] to-[#055EF2] text-white rounded-[12px] font-bold cursor-pointer font-dmsans hover:opacity-90 transition"
        >
          View more work
        </button>

        {/* Contact Us → Scroll to Contact */}
        <button
          onClick={handleScrollToContact}
          className="px-6 py-3 border border-white text-white rounded-xl font-bold cursor-pointer font-dmsans hover:bg-white hover:text-black transition"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
