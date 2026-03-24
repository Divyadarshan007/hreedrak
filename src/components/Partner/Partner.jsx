import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const Partner = () => {
  const ref = useScrollAnimation()
  return (
    <section id="partner" className="overflow-hidden">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 animate-on-scroll">

        {/* Left panel — Navy */}
        <div className="bg-[#0F172A] px-8 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#3B82F6]" />
            <p className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.3em]">JOIN WITH US</p>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight">
            Partner With Us<br />
            For Quality<br />
            Healthcare Solutions
          </h2>
        </div>

        {/* Right panel — Ice blue */}
        <div className="bg-[#EFF6FF] px-8 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-8 max-w-lg">
            We invite partners who share our passion for quality and excellence to collaborate.
            Together, we can bring specialized solutions to laboratories and healthcare providers,
            ensuring safe and efficient sample handling across the industry. Partner with Hreedrak Bioscience to
            drive healthcare solutions that truly make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white font-semibold px-7 py-3 rounded transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white font-semibold px-7 py-3 rounded transition-colors">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Partner
