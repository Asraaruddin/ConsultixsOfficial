export default function Hero4() {
   const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (

    
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-white text-[24px] md:text-[64px] font-medium font-dmsans">
       Our Work Speaks for Itself
      </h1>
      <p className="text-white text-[12px] md:text-[20px] max-w-2xl font-light">
       Take the first step towards your success with us.
      </p>
      <div className="mt-6 flex gap-4">
         <button
          onClick={handleScrollToContact}
          className="px-6 py-3 bg-gradient-to-b text-[16px] from-[#0BC0FD] to-[#055EF2] text-white rounded-[12px] font-bold cursor-pointer font-dmsans hover:opacity-90 transition"
        >
          Connect with Us
        </button>
      </div>
    </section>
  );
}
