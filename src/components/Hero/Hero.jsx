import { Link } from 'react-router-dom'

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
      <div className="absolute inset-0 bg-[#0F172A]/65" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 max-w-2xl mx-auto">

        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-[#3B82F6]" />
          <p className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.3em]">
            ELEVATE YOUR DIAGNOSTICS
          </p>
          <div className="w-8 h-0.5 bg-[#3B82F6]" />
        </div>

        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6">
          Manufacturer Of<br />
          Blood Collection<br />
          Tubes
        </h1>

        <p className="text-[#BFDBFE] text-sm lg:text-base mb-10 leading-relaxed max-w-lg">
          Explore the quality and reliability of our products designed to enhance
          healthcare outcomes in hospitals and clinics across India.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Link
            to="/contact"
            className="bg-[#1D4ED8] hover:bg-[#3B82F6] text-white font-semibold px-7 py-3 rounded transition-colors"
          >
            Chat With Us
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-2">
          {['ISO 7 Clean Room', 'CDSCO Certified', 'CE Marked'].map((badge) => (
            <span
              key={badge}
              className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero
