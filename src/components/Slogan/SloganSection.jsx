import { motion } from 'framer-motion'

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
  return (
    <section className="py-8 lg:py-24 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >

        <div className="text-center mb-6 lg:mb-16">
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
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-8 pt-12 min-h-[350px] rounded-sm transition-all duration-500 hover:-translate-y-3 cursor-default group"
              style={{ backgroundColor: item.bg }}
            >
              <div
                className="text-4xl lg:text-5xl font-black mb-6 relative z-10 leading-tight tracking-tight transition-all duration-300 opacity-[0.25] group-hover:opacity-100"
                style={{ color: item.color }}
              >
                {item.word}
              </div>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed relative z-10">
                {item.description}
              </p>
              {/* Watermark Number */}
              <div
                className="absolute top-2 right-4 text-6xl lg:text-7xl font-black leading-none select-none pointer-events-none"
                style={{ color: item.color, opacity: 0.08 }}
              >
                0{i + 1}
              </div>
              {/* Solid Bottom Border Strip */}
              <div
                className="absolute bottom-0 left-0 w-full h-[6px]"
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gray-50 border border-gray-100 text-center">
          <p className="text-[#231F20] font-bold text-lg leading-relaxed">
            Together, this philosophy drives us to build a future-ready organization focused on excellence in diagnostics.
          </p>
        </div>



      </motion.div>
    </section>
  )
}

export default SloganSection
