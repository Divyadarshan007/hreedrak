const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center min-h-[90vh] overflow-hidden bg-[#231F20]"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#231F20]/50 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8 animate-fade-in-up delay-100">
            Advancing Diagnostics <br />
            <span className="text-[#FDB813]">Through Innovation</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl animate-fade-in-up delay-200">
            Precision-engineered blood collection systems designed for global healthcare standards and reliable patient outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero


