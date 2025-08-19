import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  // Scroll to contact section on same page
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigate to portfolio page
  const handleGoToPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-white text-[24px] md:text-[64px] font-medium font-dmsans">
        Build, Scale, and Grow
      </h1>

      <p className="text-white text-[12px] md:text-[20px] max-w-2xl font-light">
        Consultixs blends technology, marketing, and AI to help your business
        launch, scale, and succeed — affordably and efficiently.
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-3 mt-6 w-full">
  <button
    onClick={handleScrollToContact}
    className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-b from-[#0BC0FD] to-[#055EF2] text-white rounded-[10px] md:rounded-[12px] font-bold cursor-pointer font-dmsans text-[13px] md:text-[16px]"
  >
    Schedule a Meeting
  </button>

  <button
    onClick={handleGoToPortfolio}
    className="px-4 md:px-6 py-2 md:py-3 border border-white text-white rounded-[10px] md:rounded-xl font-bold cursor-pointer font-dmsans hover:bg-white hover:text-black transition text-[13px] md:text-[16px]"
  >
    Previous Projects
  </button>
</div>



    </section>
  );
}
