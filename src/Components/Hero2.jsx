import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  // Scroll to Contact section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigate to Portfolio page (case studies visible by default)
  const handleGoToPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-white text-[24px] md:text-[64px] font-medium font-dmsans">
        Hire The Best Talent Now
      </h1>

      <p className="text-white text-[12px] md:text-[20px] max-w-2xl font-light">
        Making IT work for you, we align technology with your unique needs to
        fuel business success and resilience.
      </p>

      <div className="mt-6 flex gap-4">
        {/* Connect with Us → Scroll to Contact */}
        <button
          onClick={handleScrollToContact}
          className="px-6 py-3 bg-gradient-to-b text-[16px] from-[#0BC0FD] to-[#055EF2] text-white rounded-[12px] font-bold cursor-pointer font-dmsans hover:opacity-90 transition"
        >
          Connect with Us
        </button>

        {/* Previous Work → Go to Portfolio */}
        <button
          onClick={handleGoToPortfolio}
          className="px-6 py-3 border border-white text-white rounded-xl font-bold cursor-pointer font-dmsans hover:bg-white hover:text-black transition"
        >
          Previous Work
        </button>
      </div>
    </section>
  );
}
