import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const CTABanner = () => {
  const ref = useScrollAnimation()
  return (
    <section className="bg-[#0F172A] py-20 relative overflow-hidden">

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(29,78,216,0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Diagonal accent bars */}
      <div
        className="absolute top-0 left-0 bottom-0 w-24 border-r border-[#1D4ED8]/20"
        style={{ transform: 'skewX(-12deg) translateX(-20%)' }}
      />
      <div
        className="absolute top-0 right-0 bottom-0 w-24 border-l border-[#1D4ED8]/20"
        style={{ transform: 'skewX(-12deg) translateX(20%)' }}
      />

      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center animate-on-scroll">

        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-0.5 bg-[#3B82F6]" />
          <p className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.3em]">QUALITY ASSURED</p>
          <div className="w-8 h-0.5 bg-[#3B82F6]" />
        </div>

        <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-snug mb-10">
          Our products consist of all aspects of the international materials guidelines!
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#1D4ED8] hover:bg-[#3B82F6] text-white font-semibold px-10 py-3.5 rounded transition-colors">
            Submit an Inquiry
          </button>
        </div>

      </div>
    </section>
  )
}

export default CTABanner
