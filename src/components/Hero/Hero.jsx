
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[90vh] overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video (2).mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#231F20]/65" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 max-w-2xl mx-auto">

        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-[#FDB813]" />
          <p className="text-[#FDB813] text-xs font-bold uppercase tracking-[0.3em]">
            ELEVATE YOUR DIAGNOSTICS
          </p>
          <div className="w-8 h-0.5 bg-[#FDB813]" />
        </div>

        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
          Manufacturer Of<br />
          Blood Collection<br />
          Tubes
        </h1>

        <p className="text-[#A8C4E8] text-sm lg:text-base mb-10 leading-relaxed max-w-lg">
          Explore the quality and reliability of our products designed to enhance
          healthcare outcomes in hospitals and clinics across India.
        </p>



      </div>
    </section>
  )
}

export default Hero
