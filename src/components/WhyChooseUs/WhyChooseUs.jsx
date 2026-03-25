import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const stats = [
  { value: '2024', label: 'Year of Establishment' },
  { value: '150+', label: 'Happy Customers' },
  { value: '25+', label: 'Products' },
  { value: '100%', label: 'Made in India' },
]

const features = [
  { title: 'Made in India, Exported Worldwide', desc: 'Manufacturer, Exporter, Wholesaler & Retailer of blood collection tubes, serving diagnostic labs and hospitals globally.' },
  { title: 'Premium PET Construction', desc: 'Made from supreme-grade PET material — sterile, single-use, crack-proof, durable, and eco-friendly.' },
  { title: 'Automated Analyzer Compatible', desc: 'Engineered for seamless integration with automated analyzers to streamline laboratory workflows and ensure accurate diagnostics.' },
  { title: 'Competitive Bulk Pricing', desc: 'Starting at ₹2.75 per unit with an MOQ of 6,000 pieces — ideal for distributors, hospitals, and diagnostic chains.' },
]

const statColors = [
  { card: 'bg-indigo-100 border border-indigo-200', value: 'text-indigo-700', line: 'bg-indigo-300/50', label: 'text-indigo-600' },
  { card: 'bg-cyan-100 border border-cyan-200', value: 'text-cyan-700', line: 'bg-cyan-300/50', label: 'text-cyan-600' },
  { card: 'bg-sky-100 border border-sky-200', value: 'text-sky-700', line: 'bg-sky-300/50', label: 'text-sky-600' },
  { card: 'bg-purple-100 border border-purple-200', value: 'text-purple-700', line: 'bg-purple-300/50', label: 'text-purple-600' },
]

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
                className={`${statColors[i].card} rounded-lg p-6 flex flex-col justify-between min-h-[140px] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default`}
              >
                <span className={`text-4xl lg:text-5xl font-extrabold ${statColors[i].value} leading-none`}>
                  {stat.value}
                </span>
                <div>
                  <div className={`w-6 h-0.5 ${statColors[i].line} mb-2`} />
                  <span className={`${statColors[i].label} text-xs font-medium leading-tight`}>{stat.label}</span>
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
