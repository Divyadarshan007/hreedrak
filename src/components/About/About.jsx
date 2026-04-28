import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const cards = [
  {
    number: '01',
    title: 'About Us',
    desc: 'Hreedrak Bioscience is a forward-thinking In Vitro Diagnostics (IVD) consumables manufacturer, committed to advancing healthcare through precision, quality, and innovation. We strive to bring meaningful advancements to pre-analytical and diagnostic technologies.',
    color: '#034DA2',
    bg: '#EEF3FA',
  },
  {
    number: '02',
    title: 'Mission',
    desc: 'Representing our ability to develop and deliver high-performance IVD consumables and diagnostic solutions. We continuously upgrade our capabilities, expand our portfolio, and refine our processes to meet global standards.',
    color: '#ED1B24',
    bg: '#FDE8E9',
  },
  {
    number: '03',
    title: 'Vision',
    desc: 'Signifies our vision for sustainable growth — where our progress contributes to improved healthcare outcomes, stronger partnerships, and long-term value for all stakeholders across the healthcare ecosystem.',
    color: '#00A650',
    bg: '#E6F6ED',
  }
]

const About = () => {
  const navigate = useNavigate()

  return (
    <section id="about" className="bg-white py-16 lg:py-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#ED1B24]" />
            <p className="text-[#ED1B24] text-xs font-bold uppercase tracking-[0.3em]">ABOUT US</p>
            <div className="w-8 h-0.5 bg-[#ED1B24]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#231F20] leading-tight max-w-2xl">
            Precision & Innovation in Healthcare Diagnostics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex flex-col p-8 pt-12 min-h-[320px] rounded-sm transition-all duration-500 hover:-translate-y-3 cursor-default group"
              style={{ backgroundColor: card.bg }}
            >
              {/* Watermark Number */}
              <span 
                className="absolute top-2 right-4 text-6xl lg:text-7xl font-black leading-none select-none pointer-events-none"
                style={{ color: card.color, opacity: 0.08 }}
              >
                {card.number}
              </span>

              {/* Card Title - Large and Light, Darkens on Hover */}
              <h3 
                className="text-4xl lg:text-5xl font-black mb-6 relative z-10 leading-tight tracking-tight transition-all duration-300 opacity-[0.25] group-hover:opacity-100"
                style={{ color: card.color }}
              >
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="text-gray-700 text-sm lg:text-[0.95rem] leading-relaxed relative z-10 font-medium">
                {card.desc}
              </p>

              {/* Solid Bottom Border Strip */}
              <div 
                className="absolute bottom-0 left-0 w-full h-[6px]"
                style={{ backgroundColor: card.color }}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => navigate('/about')}
            className="group flex items-center gap-2 bg-[#034DA2] hover:bg-[#023585] text-white font-bold px-10 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-blue-900/10 active:scale-95"
          >
            Read Full Profile
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </motion.div>
    </section>
  )
}

export default About
