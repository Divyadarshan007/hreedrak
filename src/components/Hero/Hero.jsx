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

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <Link
            to="/contact"
            className="bg-[#ED1B24] hover:bg-[#c41520] text-white font-semibold px-7 py-3 rounded transition-colors"
          >
            Chat With Us
          </Link>
          <Link
            to="/products/vacuum-blood-collection-tubes"
            className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-7 py-3 rounded transition-colors"
          >
            View Products
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { label: 'ISO 7 Clean Room', color: 'bg-[#034DA2]/60 border-[#034DA2]' },
            { label: 'CDSCO Certified', color: 'bg-[#00A650]/60 border-[#00A650]' },
            { label: 'CE Marked', color: 'bg-[#993F97]/60 border-[#993F97]' },
          ].map((badge) => (
            <span
              key={badge.label}
              className={`${badge.color} border text-white text-xs font-medium px-3 py-1.5 rounded-full`}
            >
              {badge.label}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero
