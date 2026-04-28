import { motion } from 'framer-motion'
import {
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineScale,
  HiOutlineUserGroup,
  HiOutlineArrowTrendingUp,
} from 'react-icons/hi2'

const principles = [
  {
    title: 'Quality Without Compromise',
    description:
      'At Hreedrak Bioscience, quality is the foundation of everything we do. We adhere to stringent manufacturing standards and robust quality control systems to ensure that every product delivers consistent performance, safety, and reliability in critical diagnostic applications.',
    icon: <HiOutlineShieldCheck className="w-10 h-10" />,
    bgColor: 'bg-[#E6F4EA]', // Light Green
    iconColor: 'text-[#00A650]',
  },
  {
    title: 'Innovation with Purpose',
    description:
      'We believe innovation should solve real-world challenges. Our approach focuses on continuously improving products and processes to meet the evolving needs of modern diagnostics, ensuring better efficiency, accuracy, and user experience.',
    icon: <HiOutlineLightBulb className="w-10 h-10" />,
    bgColor: 'bg-[#E8F0FE]', // Light Blue
    iconColor: 'text-[#034DA2]',
  },
  {
    title: 'Integrity & Accountability',
    description:
      'We conduct our business with the highest level of integrity, transparency, and responsibility. Every commitment we make is backed by accountability, fostering long-term trust with our partners, customers, and stakeholders.',
    icon: <HiOutlineScale className="w-10 h-10" />,
    bgColor: 'bg-[#FEF7E0]', // Light Yellow
    iconColor: 'text-[#F9AB00]',
  },
  {
    title: 'Customer-Centric Thinking',
    description:
      'Understanding the needs of healthcare professionals is central to our growth. We design and deliver solutions that add real value, improve workflow efficiency, and support better diagnostic outcomes.',
    icon: <HiOutlineUserGroup className="w-10 h-10" />,
    bgColor: 'bg-[#FCE8E6]', // Light Red
    iconColor: 'text-[#D93025]',
  },
  {
    title: 'Sustainable Growth',
    description:
      'We are committed to building a future-ready organization through responsible and scalable growth. Our focus is on long-term success while contributing positively to the healthcare ecosystem and society.',
    icon: <HiOutlineArrowTrendingUp className="w-10 h-10" />,
    bgColor: 'bg-[#F3E8FD]', // Light Purple
    iconColor: 'text-[#A06EE1]',
  },
]

const Principles = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#00A650]" />
            <p className="text-[#00A650] text-xs font-bold uppercase tracking-[0.3em]">
              OUR CORE VALUES
            </p>
            <div className="w-8 h-0.5 bg-[#00A650]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#231F20] leading-tight max-w-2xl">
            Hreedrak's Core Values & Principles
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`group ${item.bgColor} rounded-3xl p-8 border border-transparent hover:border-white/20 transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl hover:shadow-black/5`}
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`p-3 rounded-2xl bg-white shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                >
                  <div className={`${item.iconColor} group-hover:animate-jiggle`}>
                    {item.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#231F20] mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Principles
