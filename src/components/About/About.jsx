import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const features = [
  { title: 'ISO 7 Clean Room Facility', desc: 'Contamination-free manufacturing environment certified to international standards.' },
  { title: 'CDSCO Certified', desc: "Full regulatory compliance with India's Central Drugs Standard Control Organisation." },
  { title: 'Premium Lab Disposables', desc: 'Precision-engineered tubes and collection solutions trusted by hospitals nationwide.' },
  { title: 'Custom OEM Solutions', desc: 'Tailored manufacturing to your exact specifications with full compliance support.' },
]

const About = () => {
  const ref = useScrollAnimation()
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
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">
                Hreedrak Bioscience Private Limited is a trusted{' '}
                <strong className="text-[#0F172A]">Manufacturer of high-quality medical devices</strong>,
                certified by <strong className="text-[#0F172A]">CDSCO</strong>, and based in{' '}
                <strong className="text-[#0F172A]">Surendranagar, Gujarat</strong>. We specialize in
                producing premium lab disposable products in a state-of-the-art{' '}
                <strong className="text-[#0F172A]">ISO 7</strong> clean room facility, which ensures a
                contamination-free environment for all our products.
              </p>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-8">
                Our product offerings include professional collection solutions, such as{' '}
                <strong className="text-[#0F172A]">Vacuum and Non-Vacuum Collection Tubes,
                Micro/Paediatric Tubes,</strong>{' '}and{' '}
                <strong className="text-[#0F172A]">Advanced Cell-Free DNA tubes.</strong>
              </p>
              <button className="bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white font-semibold px-7 py-2.5 rounded transition-colors">
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
