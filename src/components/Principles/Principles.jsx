import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const principles = [
  {
    title: 'Quality Without Compromise',
    description:
      'At Hreedrak Bioscience, quality is the foundation of everything we do. We adhere to stringent manufacturing standards and robust quality control systems to ensure that every product delivers consistent performance, safety, and reliability in critical diagnostic applications.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#034DA2" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Innovation with Purpose',
    description:
      'We believe innovation should solve real-world challenges. Our approach focuses on continuously improving products and processes to meet the evolving needs of modern diagnostics, ensuring better efficiency, accuracy, and user experience.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#034DA2" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18L12 21M12 3L12 6M21 12L18 12M6 12L3 12M18.364 18.364L16.2426 16.2426M7.75736 7.75736L5.63604 5.63604M18.364 5.63604L16.2426 7.75736M7.75736 16.364L5.63604 18.4853" />
      </svg>
    ),
  },
  {
    title: 'Integrity & Accountability',
    description:
      'We conduct our business with the highest level of integrity, transparency, and responsibility. Every commitment we make is backed by accountability, fostering long-term trust with our partners, customers, and stakeholders.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#034DA2" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2zM9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Customer-Centric Thinking',
    description:
      'Understanding the needs of healthcare professionals is central to our growth. We design and deliver solutions that add real value, improve workflow efficiency, and support better diagnostic outcomes.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#034DA2" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.744-.494M19.75 22.5c.038-.22.05-.443.05-.667l-.04-2.53a3.387 3.387 0 00-3.388-3.335H11.5a3.387 3.387 0 00-3.388 3.335l-.04 2.53C8.072 22.057 8.084 22.28 8.122 22.5M16 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
  },
  {
    title: 'Sustainable Growth',
    description:
      'We are committed to building a future-ready organization through responsible and scalable growth. Our focus is on long-term success while contributing positively to the healthcare ecosystem and society.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#034DA2" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7m-9 11h9v-9" />
      </svg>
    ),
  },
]

const Principles = () => {
  const ref = useScrollAnimation()
  return (
    <section className="py-16 lg:py-24 bg-[#EEF3FA]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-0.5 bg-[#00A650]" />
          <p className="text-[#00A650] text-xs font-bold uppercase tracking-[0.3em]">OUR CORE VALUES</p>
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#231F20] mb-12 leading-tight">
          Hreedrak's Core Values
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-[#034DA2]">{item.title}</h3>
                <div className="ml-4 flex-shrink-0 opacity-80">{item.icon}</div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Principles
