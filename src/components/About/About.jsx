import { useNavigate } from 'react-router-dom'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const features = [
  { title: 'Nature of Business', desc: 'Manufacturers, Exporters, Wholesaler, Retailer', color: '#034DA2', bg: '#EEF3FA' },
  { title: '29+', desc: 'Years of Experience', color: '#ED1B24', bg: '#FDE8E9' },
  { title: 'Market Covered', desc: 'Worldwide', color: '#00A650', bg: '#E6F6ED' },
  { title: 'GST No', desc: '24AAHCH3979H1ZA', color: '#993F97', bg: '#F5EBF5' },
]

const AboutPreview = () => (
  <>
    <strong>Hreedrak Bioscience</strong> is a forward-thinking <strong>In Vitro Diagnostics (IVD) consumables manufacturer</strong>, committed to advancing healthcare through precision, quality, and innovation.
    <br /><br />
    With over <strong>29 years of cumulative experience in the healthcare industry,</strong> we bring a strong foundation of technical expertise, manufacturing excellence, and deep insight into diagnostic processes. Our primary focus lies in <strong>pre-analytical IVD solutions,</strong> particularly blood collection systems that play a critical role in ensuring diagnostic accuracy.
  </>
)

const About = () => {
  const ref = useScrollAnimation()
  const navigate = useNavigate()
  return (
    <section id="about">

      {/* Main content */}
      <div className="bg-white py-16 lg:py-24">
        <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">

          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-0.5 bg-[#ED1B24]" />
            <p className="text-[#ED1B24] text-xs font-bold uppercase tracking-[0.3em]">ABOUT US</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: Company description */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#231F20] mb-6 leading-tight">
                Hreedrak Bioscience Private Limited
              </h2>
              <div className="text-gray-600 text-sm lg:text-base leading-relaxed mb-8">
                <AboutPreview />...
              </div>
              <button
                onClick={() => navigate('/about')}
                className="bg-[#034DA2] hover:bg-[#023585] text-white font-semibold px-7 py-2.5 rounded transition-colors"
              >
                Read More
              </button>
            </div>

            {/* Right: 2x2 feature card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="border-l-4 p-5 rounded-r-lg hover:shadow-md transition-shadow"
                  style={{ backgroundColor: feat.bg, borderLeftColor: feat.color }}
                >
                  <h4 className="font-bold text-sm mb-2" style={{ color: feat.color }}>{feat.title}</h4>
                  <p className="text-gray-600 text-xs leading-relaxed font-medium">{feat.desc}</p>
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
