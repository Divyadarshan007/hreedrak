import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import SEOMeta from '../components/SEO/SEOMeta'

const OemServices = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <SEOMeta
        title="OEM Blood Collection Tube Manufacturing Services"
        description="Custom OEM manufacturing of blood collection tubes by Hreedrak Bioscience. ISO 7 clean room, CE marked, CDSCO certified. Custom branding, packaging, and specifications available."
        canonical="/oem-services"
      />
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">OEM Services for Blood Collection Tubes</span>
        </nav>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">

            {/* Image column */}
            <div className="md:w-80 flex-shrink-0 bg-gray-50 flex items-center justify-center p-10 border-b md:border-b-0 md:border-r border-gray-100">
              <svg viewBox="0 0 200 160" className="w-full max-w-[260px]" xmlns="http://www.w3.org/2000/svg">
                {/* O diamond */}
                <rect x="5" y="30" width="55" height="55" rx="6" fill="none" stroke="#1e3a8a" strokeWidth="3" transform="rotate(45 32.5 57.5)" />
                <text x="32" y="62" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1e3a8a">O</text>
                <text x="32" y="100" textAnchor="middle" fontSize="8" fill="#1e3a8a">ORIGINAL</text>
                {/* E diamond */}
                <rect x="73" y="30" width="55" height="55" rx="6" fill="none" stroke="#1e3a8a" strokeWidth="3" transform="rotate(45 100.5 57.5)" />
                <text x="100" y="62" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1e3a8a">E</text>
                <text x="100" y="100" textAnchor="middle" fontSize="8" fill="#1e3a8a">EQUIPMENT</text>
                {/* M diamond */}
                <rect x="141" y="30" width="55" height="55" rx="6" fill="none" stroke="#1e3a8a" strokeWidth="3" transform="rotate(45 168.5 57.5)" />
                <text x="168" y="62" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1e3a8a">M</text>
                <text x="168" y="100" textAnchor="middle" fontSize="8" fill="#1e3a8a">MANUFACTURER</text>
              </svg>
            </div>

            {/* Content column */}
            <div className="flex-1 p-8">
              <h1 className="text-2xl font-extrabold text-gray-800 mb-3">
                OEM Services for Blood Collection Tubes
              </h1>

              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-primary font-bold text-xl">₹ 1.00 - 3.00</span>
                <span className="text-gray-500 text-sm">/ Piece</span>
                <button className="border border-gray-300 text-gray-700 text-xs px-3 py-1 rounded hover:border-primary hover:text-primary transition-colors">
                  Get Best Price
                </button>
              </div>

              <div className="text-sm text-gray-600 leading-relaxed space-y-3">
                <p>
                  Our OEM manufacturing services provide precision-engineered, durable, and safe blood collection tubes designed to meet the highest industry standards. With a commitment to innovation, advanced technology, and strict quality control, we offer tailored solutions to suit your unique requirements.
                </p>
                <p>
                  Whether you need standard or custom designs, our experienced team ensures optimal performance, fast turnaround times, and cost-effective pricing. Partner with us for your blood collection tube manufacturing needs and experience superior quality and service every step of the way.
                </p>
                <p>
                  Our vacuum blood collection tubes are engineered to ensure consistent and efficient specimen collection, while our non-vacuum tubes provide flexibility and ease of use for a wide range of diagnostic applications. We also offer custom labeling, packaging, and branding options to meet your specific market requirements.
                </p>
              </div>

              <div className="flex gap-3 mt-8 flex-wrap">
                <button className="flex items-center gap-2 border-2 border-gray-800 text-gray-800 font-semibold px-6 py-2.5 rounded hover:bg-gray-800 hover:text-white transition-colors text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Request to Call
                </button>
                <button className="flex items-center gap-2 bg-primary text-white font-semibold px-6 py-2.5 rounded hover:bg-primary-dark transition-colors text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enquiry Form */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
            Looking for "OEM Services for Blood Collection Tubes" ?
          </h2>
          <form className="max-w-2xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Name</label>
                <input type="text" placeholder="Name" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Mobile No.</label>
              <div className="flex gap-2">
                <span className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-600 bg-gray-50">+91</span>
                <input type="tel" placeholder="Enter Mobile No." className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Requirement Details</label>
              <textarea rows={4} placeholder="I am interested. Kindly send the quotation for the same." className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none" />
            </div>
            <div className="text-center">
              <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-2.5 rounded transition-colors text-sm">
                Send Enquiry
              </button>
            </div>
          </form>
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default OemServices
