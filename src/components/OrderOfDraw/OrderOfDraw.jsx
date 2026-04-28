import { motion } from 'framer-motion'

const OrderOfDraw = () => {
  const watermarkText = "HREEDRAK"

  const tubes = [
    { color: '#5299C1', label: 'Light Blue', name: 'Coagulation' },
    { color: '#000110', label: 'Black', name: 'ESR' },
    { color: '#A32115', label: 'Red', name: 'Plain' },
    { color: '#A32115', label: 'Red', name: 'Red' },
    { color: '#E6C874', label: 'Yellow', name: 'SST' },
    { color: '#2D6830', label: 'Green', name: 'Heparin' },
    { color: '#724A82', label: 'Purple', name: 'EDTA' },
    { color: '#7F7F7F', label: 'Grey', name: 'Fluoride' },
  ]

  return (
    <section className="bg-white py-20 overflow-hidden" id="order-of-draw">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center text-center mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#ED1B24]" />
            <p className="text-[#ED1B24] text-xs font-bold uppercase tracking-[0.3em]">COLLECTION PROCESS</p>
            <div className="w-8 h-0.5 bg-[#ED1B24]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#231F20] leading-tight mb-6 max-w-2xl">
            Order of Draw
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed">
            Coagulation tubes should be taken before clot activator tubes as the clot activator in clot activator tubes may affect coagulation test results.
          </p>
        </div>

        <div className="relative w-full px-4 md:px-6">
          {/* Scrollable container for mobile, wrapped for desktop */}
          <div className="flex items-center justify-center gap-y-12 gap-x-2 md:gap-x-4 flex-nowrap md:flex-wrap overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 no-scrollbar scroll-smooth relative z-10">
            {tubes.map((tube, index) => (
              <div key={index} className="flex items-center flex-nowrap relative">
                {/* Watermark Letter */}
                <span
                  className={`absolute left-1/2 top-1/2 -translate-y-1/3 text-[130px] font-black select-none pointer-events-none z-0 ${watermarkText[index] === 'K' ? 'translate-x-[-10%]' : '-translate-x-1/2'}`}
                  style={{ color: tube.color, opacity: 0.85 }}
                >
                  {watermarkText[index]}
                </span>

                {/* Tube Component */}
                <div className="flex flex-col items-center relative z-10 mx-4">
                  <div className="relative group cursor-help transition-transform duration-300 hover:scale-105">
                    {/* Tube Cap */}
                    <div
                      className="w-12 h-14 rounded-t-xl mb-0 relative overflow-hidden"
                      style={{
                        background: tube.color
                      }}
                    >
                    </div>

                    {/* Tube Body */}
                    <div className="w-11 h-40 bg-gradient-to-r from-gray-100/40 via-white/20 to-gray-200/40 border border-gray-200/50 rounded-b-3xl mx-auto shadow-xl relative flex flex-col justify-end p-0.5 backdrop-blur-[2px]">
                      {/* Glass Shine */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/30 to-transparent pointer-events-none rounded-b-3xl"></div>
                      <div className="absolute top-0 left-2 w-1 h-[90%] bg-white/40 blur-[1px] rounded-full"></div>

                      {/* Label area (Plain white) */}
                      <div className="absolute top-6 left-0 right-0 h-20 bg-white shadow-sm border-t border-b border-gray-100 mx-0.5 z-10"></div>

                      {/* Liquid level */}
                      <div className="w-full h-1/3 bg-gradient-to-b from-[#880808] to-[#4a0404] opacity-95 rounded-b-[inherit] shadow-inner mb-px"></div>
                    </div>
                  </div>
                </div>

                {/* Animated Arrow */}
                {index < tubes.length - 1 && (
                  <div className="flex items-center justify-center w-10 md:w-16 h-full relative z-10">
                    <svg
                      className="w-6 h-6 text-gray-400 animate-slide-right"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-5px); opacity: 0.3; }
          50% { transform: translateX(5px); opacity: 1; }
          100% { transform: translateX(-5px); opacity: 0.3; }
        }
        .animate-slide-right {
          animation: slideRight 1.5s ease-in-out infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default OrderOfDraw
