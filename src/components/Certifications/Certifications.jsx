import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const certs = [
  { acronym: 'CE', name: 'Conformité Européenne', label: 'Marked' },
  { acronym: 'ISO 9001', name: 'Quality Management System', label: 'Certified 2015' },
  { acronym: 'ISO 13485', name: 'Medical Devices Quality Management', label: 'Certified 2016' },
]

const Certifications = () => {
  const ref = useScrollAnimation()
  return (
    <section className="bg-[#0F172A] py-16" id="certifications">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">

        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">

          {/* Left: heading */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-0.5 bg-[#3B82F6]" />
              <p className="text-[#3B82F6] text-xs font-bold uppercase tracking-[0.3em]">WE ARE CERTIFIED</p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">Our<br />Certifications</h2>
            <Link
              to="/certificates"
              className="inline-block mt-5 text-[#3B82F6] text-xs font-semibold hover:text-white transition-colors underline underline-offset-2"
            >
              View all certificates →
            </Link>
          </div>

          {/* Right: cert badges */}
          <div className="flex flex-wrap gap-4 flex-1">
            {certs.map((cert, i) => (
              <Link
                key={i}
                to="/certificates"
                className="border border-[#1D4ED8] rounded-lg bg-[#1E3A8A]/20 px-6 py-5 flex flex-col items-center min-w-[130px] hover:border-[#3B82F6] hover:bg-[#1E3A8A]/40 transition-all group"
              >
                {/* Shield icon */}
                <svg className="w-5 h-5 text-[#3B82F6] mb-2 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-lg font-extrabold text-white mb-1">{cert.acronym}</span>
                <span className="text-[10px] text-[#BFDBFE] text-center leading-tight mb-2 max-w-[110px]">{cert.name}</span>
                <span className="text-[10px] font-bold text-[#3B82F6] uppercase tracking-wider">{cert.label}</span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Certifications
