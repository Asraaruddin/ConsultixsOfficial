export default function Hero() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center text-center px-4"
      style={{
        minHeight: "calc(100vh - 8px)" // subtract navbar height (adjust if needed)
      }}
    >
      <h1 className="text-white text-4xl md:text-6xl font-bold">
        Hire The Best Talent Now
      </h1>
      <p className="mt-4 text-white max-w-2xl">
       Making IT work for you, we align technology with your unique needs to fuel business success and resilience.
      </p>
      <div className="mt-6 flex gap-4">
        <button className="px-6 py-3 bg-gradient-to-b from-[#0BC0FD] to-[#055EF2] text-white rounded-xl font-bold">
          Get in Touch
        </button>
        <button className="px-6 py-3 border border-white text-white rounded-xl font-bold">
          Contact Us
        </button>
      </div>
    </section>
  );
}
