export default function Hero3() {
  return (
    <section
      className="w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-white text-[24px] md:text-[64px] font-medium font-dmsans">
       Services That Power Your Growth
      </h1>
      <p className="text-white text-[12px] md:text-[20px] max-w-2xl font-light">
        End-to-end tech, marketing, and outsourcing to help your business scale faster.
      </p>
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-3 bg-gradient-to-b text-[16px] from-[#0BC0FD] to-[#055EF2] text-white rounded-[12px] font-bold cursor-pointer font-dmsans">
          Book a Call
        </button>
        <button className="px-6 py-3 border border-white text-white rounded-xl font-bold cursor-pointer font-dmsans">
          Contact Us
        </button>
      </div>
    </section>
  );
}
