import { Link } from 'react-router-dom'
const certs = [
  {
    acronym: 'CE',
    name: 'Conformité Européenne',
    issuedBy: 'European Conformity',
    scope: 'Blood collection tubes and lab disposables meet EU safety, health, and environmental protection standards.',
    label: 'CE Marked',
    logo: '/certificates/ce.png',
    pdf: '/certificates/hreedrak-bioscience-pvt-ltd-ce-1.pdf',
    filename: 'Hreedrak-CE-Certificate.pdf',
  },
  {
    acronym: 'ISO 9001',
    name: 'Quality Management System',
    issuedBy: 'International Organization for Standardization',
    scope: 'Quality management processes for design, manufacture, and supply of blood collection products.',
    label: 'Certified 2015',
    logo: '/certificates/iso-9001.png',
    pdf: '/certificates/iso-9001.pdf',
    filename: 'Hreedrak-ISO-9001-Certificate.pdf',
  },
  {
    acronym: 'ISO 13485',
    name: 'Medical Devices Quality Management',
    issuedBy: 'International Organization for Standardization',
    scope: 'Quality management system specific to medical devices, ensuring consistent safety and effectiveness.',
    label: 'Certified 2016',
    logo: '/certificates/iso-13485.png',
    pdf: '/certificates/iso-13485-2016.pdf',
    filename: 'Hreedrak-ISO-13485-Certificate.pdf',
  },
]

const Certificates = () => {
  return (
    <>
      <main className="min-h-screen bg-white">

        {/* Hero Banner */}
        <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #034DA2 0%, #023585 55%, #231F20 100%)' }}>
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" style={{ backgroundColor: '#ffffff07' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-2" style={{ color: '#A8C4E8' }}>
              HREEDRAK BIOSCIENCE PRIVATE LIMITED
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Our Certificates</h1>
          </div>
          <div className="flex h-1">
            <div className="flex-1" style={{ backgroundColor: '#034DA2' }} />
            <div className="flex-1" style={{ backgroundColor: '#231F20' }} />
            <div className="flex-1" style={{ backgroundColor: '#ED1B24' }} />
            <div className="flex-1" style={{ backgroundColor: '#FDB813' }} />
            <div className="flex-1" style={{ backgroundColor: '#00A650' }} />
            <div className="flex-1" style={{ backgroundColor: '#993F97' }} />
            <div className="flex-1" style={{ backgroundColor: '#6D6E72' }} />
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-100 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-500">
              <Link to="/" className="hover:text-[#034DA2] transition-colors">Home</Link>
              <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Our Certificates</span>
            </nav>
          </div>
        </div>

        {/* Certificate cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certs.map((cert) => (
              <div key={cert.acronym} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">

                {/* Card header */}
                <div className="bg-[#231F20] px-6 py-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#034DA2] flex items-center justify-center mb-4 p-2 overflow-hidden shadow-inner">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.acronym} Logo`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-2xl font-extrabold text-white mb-1">{cert.acronym}</span>
                  <span className="text-[#034DA2] text-xs font-bold uppercase tracking-wider">{cert.label}</span>
                </div>

                {/* Card body */}
                <div className="px-6 py-5 flex-1 flex flex-col">
                  <h3 className="text-base font-bold text-[#231F20] mb-1">{cert.name}</h3>
                  <p className="text-xs text-[#034DA2] font-medium mb-3">Issued by: {cert.issuedBy}</p>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{cert.scope}</p>

                  {/* Actions */}
                  <div className="flex gap-3 mt-6">
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center border border-[#034DA2] text-[#034DA2] text-sm font-semibold py-2.5 rounded hover:bg-[#EEF3FA] transition-colors"
                    >
                      View PDF
                    </a>
                    <a
                      href={cert.pdf}
                      download={cert.filename}
                      className="flex-1 text-center bg-[#034DA2] hover:bg-[#023585] text-white text-sm font-semibold py-2.5 rounded transition-colors flex items-center justify-center gap-1.5"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Trust note */}
          <div className="mt-10 bg-white border border-gray-200 rounded-xl px-6 py-5 flex items-start gap-4">
            <svg className="w-5 h-5 text-[#034DA2] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-500 text-sm leading-relaxed">
              All certificates are issued to <strong className="text-[#231F20]">Hreedrak Bioscience Private Limited</strong>. For verification or enquiries regarding our certifications, please <Link to="/contact" className="text-[#034DA2] hover:underline">contact us</Link>.
            </p>
          </div>
        </div>

      </main>
    </>
  )
}

export default Certificates
