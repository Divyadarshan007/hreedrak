import { useNavigate } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const features = [
  { title: 'Nature of Business', desc: 'Manufacturers, Exporters, Wholesaler, Retailer' },
  { title: 'Year of Establishment', desc: '2024' },
  { title: 'Market Covered', desc: 'Worldwide' },
  { title: 'GST No', desc: '24AAHCH3979H1ZA' },
]

const fullText = `Established in the year 2024, HREEDRAK BIOSCIENCE PRIVATE LIMITED is among the leading and trustworthy organizations of this domain, engaged in Manufacturers, Exporters, Wholesaler, Retailer a wide range of products. Our offered assortment of products is comprises of K3 EDTA Vacuum Blood Collection Tube, K2 EDTA Vacuum Blood Collection Tube, Clot Activator Vacuum Blood Collection Tube, Fluoride Vacuum Blood Collection Tube, Plain Serum Vacuum Blood Collection Tube, K3 EDTA Single Cap Non Vacuum Blood Collection Tube, K2 EDTA Non Vacuum Blood Collection Tube, Clot Activator Non Vacuum Blood Collection Tube, Double Cap Non Vacuum Blood Collection Tube, Clot Activator Single Cap Blood Collection Tube etc. Offered products are manufactured from supreme grade basic material by using modern tools and technology. All these products are made as per the industry approved parameters with the supervision of our skilled and experienced workforce. Our offered products are highly demanded across the market for their optimum quality. Our organization is growing with a fast rate because of valuable assistance of our mentor. His management skills, ability to handle crucial situation and regular motivation, enabled us to achieve such a remarkable peak of success in the market.`

const halfText = fullText.slice(0, Math.floor(fullText.length / 2))

const About = () => {
  const ref = useScrollAnimation()
  const navigate = useNavigate()
  return (
    <section id="about">

      {/* Main content */}
      <div className="bg-white py-16 lg:py-24">
        <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">

          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-0.5 bg-[#1D4ED8]" />
            <p className="text-[#1D4ED8] text-xs font-bold uppercase tracking-[0.3em]">ABOUT US</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: Company description */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0F172A] mb-6 leading-tight">
                Hreedrak Bioscience Private Limited
              </h2>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-8">
                {halfText}...
              </p>
              <button
                onClick={() => navigate('/about')}
                className="bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white font-semibold px-7 py-2.5 rounded transition-colors"
              >
                Read More
              </button>
            </div>

            {/* Right: 2x2 feature card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="bg-[#EFF6FF] border-l-4 border-[#1D4ED8] p-5 rounded-r-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-bold text-[#0F172A] text-sm mb-2">{feat.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default About
