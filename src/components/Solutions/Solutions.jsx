import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const solutions = [
  {
    number: '01',
    title: 'Lab Disposables Manufacturing',
    description: 'Premium lab disposable products made in an ISO 7 clean room facility, ensuring a contamination-free environment for all your diagnostic requirements.',
    color: '#034DA2',
    bg: '#EEF3FA',
    icon: (
      <svg className="w-8 h-8" style={{ color: '#034DA2' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Blood Collection Solutions',
    description: 'Hreedrak Bioscience tubes for vacuum, non-vacuum, and specialized needs. Trusted by hospitals and labs across India for safe and efficient sample collection.',
    color: '#ED1B24',
    bg: '#FDE8E9',
    icon: (
      <svg className="w-8 h-8" style={{ color: '#ED1B24' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Custom Product Development',
    description: 'Tailored solutions for unique healthcare product requirements, developed and manufactured to your exact specifications with full regulatory compliance.',
    color: '#00A650',
    bg: '#E6F6ED',
    icon: (
      <svg className="w-8 h-8" style={{ color: '#00A650' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

const Solutions = () => {
  const ref = useScrollAnimation()
  return (
    <section id="solutions" className="bg-[#EEF3FA] py-16 lg:py-24">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-[#993F97]" />
          <p className="text-[#993F97] text-xs font-bold uppercase tracking-[0.3em]">SOLUTIONS</p>
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#231F20] mb-12">
          Solutions For Medical And Diagnostic Needs
        </h2>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <div
              key={i}
              className="relative rounded-lg p-8 overflow-hidden group hover:shadow-lg transition-shadow"
              style={{ backgroundColor: sol.bg }}
            >
              {/* Watermark number */}
              <span className="absolute -top-3 -right-1 text-8xl font-extrabold text-[#231F20] opacity-5 leading-none select-none pointer-events-none">
                {sol.number}
              </span>

              {/* Icon box */}
              <div
                className="w-12 h-12 border-2 rounded-lg flex items-center justify-center mb-5 transition-colors"
                style={{ borderColor: sol.color }}
              >
                {sol.icon}
              </div>

              {/* Number label */}
              <p className="text-xs font-bold mb-2 tracking-widest" style={{ color: sol.color }}>{sol.number}</p>

              <h3 className="text-xl font-extrabold text-[#231F20] mb-3 leading-snug">
                {sol.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {sol.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-lg"
                style={{ backgroundColor: sol.color }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Solutions
