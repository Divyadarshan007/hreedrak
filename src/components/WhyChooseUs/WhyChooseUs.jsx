import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '150+', label: 'Happy Customers' },
  { value: '25+', label: 'Products' },
  { value: '100%', label: 'Made in India' },
]

const WhyChooseUs = () => {
  const ref = useScrollAnimation()
  return (
    <section className="bg-[#034da2] py-10" id="why-us">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2 px-8 py-6 justify-center">
              <span className="text-4xl lg:text-5xl font-bold text-white leading-none">{stat.value}</span>
              <span className="text-white font-semibold text-sm leading-tight text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
