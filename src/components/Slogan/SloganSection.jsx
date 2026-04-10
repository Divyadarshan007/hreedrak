import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const sloganItems = [
  {
    word: 'Innovation',
    description: 'Reflects our commitment to continuously developing better solutions that enhance accuracy, safety, and efficiency in diagnostic processes. We strive to bring meaningful advancements to pre-analytical and diagnostic technologies.',
    color: '#034DA2',
    bg: '#EEF3FA'
  },
  {
    word: 'Evolve',
    description: 'Represents our ability to adapt and grow with the changing landscape of healthcare. As diagnostics advance, we continuously upgrade our capabilities, expand our portfolio, and refine our processes to meet global standards.',
    color: '#ED1B24',
    bg: '#FDE8E9'
  },
  {
    word: 'Thrive',
    description: 'Signifies our vision for sustainable growth—where our progress contributes to improved healthcare outcomes, stronger partnerships, and long-term value for all stakeholders.',
    color: '#00A650',
    bg: '#E8F7EF'
  }
]

const SloganSection = () => {
  const ref = useScrollAnimation()
  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#ED1B24]" />
            <p className="text-[#ED1B24] text-xs font-bold uppercase tracking-[0.3em]">OUR PHILOSOPHY</p>
            <div className="w-8 h-0.5 bg-[#ED1B24]" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-[#231F20] mb-6">
            Innovation. Evolve. Thrive.
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-base leading-relaxed">
            At Hreedrak Bioscience, this philosophy defines our journey and our approach to diagnostics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sloganItems.map((item, i) => (
            <div
              key={i}
              className="relative p-8 rounded-lg transition-all duration-300 hover:shadow-xl group border border-transparent hover:border-gray-100"
              style={{ backgroundColor: item.bg }}
            >
              <div
                className="text-4xl lg:text-5xl font-black mb-6 opacity-20 group-hover:opacity-100 transition-opacity"
                style={{ color: item.color }}
              >
                {item.word}
              </div>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed relative z-10">
                {item.description}
              </p>
              <div
                className="absolute top-0 right-2 text-8xl font-black opacity-5 pointer-events-none select-none"
                style={{ color: item.color }}
              >
                0{i + 1}
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-lg"
                style={{ backgroundColor: item.color }}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center">
          <p className="text-[#231F20] font-bold text-lg leading-relaxed">
            Together, this philosophy drives us to build a future-ready organization focused on excellence in diagnostics.
          </p>
        </div>



      </div>
    </section>
  )
}

export default SloganSection
