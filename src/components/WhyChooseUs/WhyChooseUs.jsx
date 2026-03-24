import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const stats = [
  { value: '3+', label: 'Years of Experience' },
  { value: '150+', label: 'Happy Customers' },
  { value: '25+', label: 'Products' },
  { value: '98%', label: 'Customer Satisfaction' },
]

const features = [
  { title: 'Certified Manufacturing Standards', desc: 'CDSCO certified facility with ISO 7 clean room. Every tube meets international regulatory requirements.' },
  { title: 'Innovative Product Designs', desc: 'Engineered for precision collection with consistent vacuum draw and tamper-evident closures.' },
  { title: 'Affordable Pricing Models', desc: 'Competitive bulk pricing for distributors, hospitals, and diagnostic chains across India.' },
  { title: 'Reliable Customer Support', desc: 'Dedicated account managers and rapid response teams for technical and logistics queries.' },
]

const statColors = ['bg-[#0F172A]', 'bg-[#1D4ED8]', 'bg-[#1E3A8A]', 'bg-[#0F172A]']

const WhyChooseUs = () => {
  const ref = useScrollAnimation()
  return (
    <section className="py-16 lg:py-24 bg-[#EFF6FF]" id="why-us">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">

        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-[#1D4ED8]" />
          <p className="text-[#1D4ED8] text-xs font-bold uppercase tracking-[0.3em]">WHY CHOOSE US</p>
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-12 leading-tight">
          Unmatched Quality<br />
          And Service
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: 2×2 stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`${statColors[i]} rounded-lg p-6 flex flex-col justify-between min-h-[140px]`}
              >
                <span className="text-4xl lg:text-5xl font-extrabold text-white leading-none">
                  {stat.value}
                </span>
                <div>
                  <div className="w-6 h-0.5 bg-white/40 mb-2" />
                  <span className="text-[#BFDBFE] text-xs font-medium leading-tight">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: numbered feature items */}
          <div className="space-y-4">
            {features.map((feat, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-5 hover:shadow-md transition-shadow">
                <span className="text-3xl font-extrabold text-[#0F172A] opacity-10 leading-none mt-0.5 min-w-[2.5rem] text-right tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="border-l-2 border-[#1D4ED8] pl-4">
                  <h4 className="font-bold text-[#0F172A] text-sm mb-1">{feat.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
