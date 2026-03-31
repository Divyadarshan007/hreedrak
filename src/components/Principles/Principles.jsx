import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const principles = [
  {
    title: 'Integrity',
    description:
      'At Hreedrak Bioscience, we prioritize ethical principles in every decision we make. Our focus is consistently directed towards achieving the greatest benefit for all our stakeholders.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#034DA2" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Accountability',
    description:
      'At Hreedrak Bioscience, each of us takes personal responsibility for fulfilling the promises we make to our customers and suppliers.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#034DA2" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Customer First',
    description:
      'At the heart of our operations at Hreedrak Bioscience are our customers, and we firmly believe that our success is intertwined with theirs.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#034DA2" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    title: 'Transparency',
    description:
      'Trust, fostered through transparent practices, policies, and interactions, serves as the solid foundation of our business at Hreedrak Bioscience.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#034DA2" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description:
      'We continually strive for greater value creation for both our customers and principal companies, continuously innovating and seeking new ways to enhance and improve our products and services.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#034DA2" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Compliance',
    description:
      'Hreedrak Bioscience is obligated to follow extremely high standards of compliance with all the relevant applicable laws of the land, including CDSCO regulations and ISO certifications.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="#034DA2" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
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
          <p className="text-[#00A650] text-xs font-bold uppercase tracking-[0.3em]">OUR PRINCIPLES</p>
        </div>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#231F20] mb-12 leading-tight">
          Hreedrak's Core Principles
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
              <p className="text-gray-500 text-sm leading-relaxed text-justify">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Principles
