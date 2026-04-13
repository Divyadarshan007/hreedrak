import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import collectionImg from '../../assets/why-choose-us/collection.png'
import integrityImg from '../../assets/why-choose-us/integrity.png'
import resultsImg from '../../assets/why-choose-us/results.png'

const cards = [
  {
    image: collectionImg,
    title: 'Seamless Sample Collection',
    description: 'Our precision-engineered tubes ensure a smooth and efficient collection process, minimizing patient discomfort while maintaining the highest level of pre-analytical quality.',
  },
  {
    image: integrityImg,
    title: 'Optimal Sample Integrity',
    description: 'Formulated with high-grade additives and advanced interior coatings, Hreedrak tubes preserve sample stability and prevent contamination during transport and processing.',
  },
  {
    image: resultsImg,
    title: 'Accurate Diagnostic Results',
    description: 'Engineered for flawless compatibility with modern diagnostic instrumentation, providing healthcare professionals with clear, reliable results for better patient outcomes.',
  },
]

const WhyChooseUs = () => {
  const ref = useScrollAnimation()
  
  return (
    <section className="bg-[#f1f5f4] py-20" id="why-us">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#ED1B24]" />
            <p className="text-[#ED1B24] text-xs font-bold uppercase tracking-[0.3em]">WHY CHOOSE US</p>
            <div className="w-8 h-0.5 bg-[#ED1B24]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#231F20] leading-tight max-w-2xl">
            Excellence & Precision in Every Tube
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="bg-white flex flex-col h-full shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden p-3 bg-[#f1f5f4]">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-sm shadow-inner"
                />
              </div>

              {/* Content Container */}
              <div className="p-8 pt-6 flex-1 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-[#034DA2] mb-4 font-serif">
                  {card.title}
                </h3>
                <p className="text-[#6D6E72] leading-relaxed text-sm lg:text-base">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
