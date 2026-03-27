import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOMeta from '../components/SEO/SEOMeta'

const OemServices = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalForm, setModalForm] = useState({ quantity: '', unit: 'piece', mobile: '' })
  const [modalErrors, setModalErrors] = useState({})

  const [oemForm, setOemForm] = useState({
    name: '',
    email: '',
    mobile: '',
    requirement: 'I am interested. Kindly send the quotation for the same.',
  })
  const [oemErrors, setOemErrors] = useState({})

  const openModal = () => setShowModal(true)
  const closeModal = () => { setShowModal(false); setModalErrors({}) }

  const handleModalChange = (e) => {
    setModalForm({ ...modalForm, [e.target.name]: e.target.value })
    setModalErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const handleOemChange = (e) => {
    setOemForm({ ...oemForm, [e.target.name]: e.target.value })
    setOemErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const validateModal = () => {
    const errs = {}
    if (!modalForm.quantity.trim()) errs.quantity = 'Quantity is required'
    else if (isNaN(modalForm.quantity) || Number(modalForm.quantity) <= 0) errs.quantity = 'Enter a valid quantity'
    if (!modalForm.mobile.trim()) errs.mobile = 'Mobile number is required'
    else if (!/^\d{7,15}$/.test(modalForm.mobile)) errs.mobile = 'Enter a valid mobile number (digits only)'
    return errs
  }

  const validateOemForm = () => {
    const errs = {}
    if (!oemForm.name.trim()) errs.name = 'Name is required'
    if (oemForm.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(oemForm.email)) errs.email = 'Enter a valid email address'
    if (!oemForm.mobile.trim()) errs.mobile = 'Mobile number is required'
    else if (!/^\d{7,15}$/.test(oemForm.mobile)) errs.mobile = 'Enter a valid mobile number (digits only)'
    if (!oemForm.requirement.trim()) errs.requirement = 'Requirement details are required'
    return errs
  }

  const handleModalSubmit = (e) => {
    e.preventDefault()
    const errs = validateModal()
    if (Object.keys(errs).length > 0) { setModalErrors(errs); return }
    const msg =
      `*Quick Quote - OEM Services for Blood Collection Tubes*\n` +
      `Quantity: ${modalForm.quantity} ${modalForm.unit}\n` +
      `Mobile: +91 ${modalForm.mobile}`
    window.open(`https://wa.me/919825156800?text=${encodeURIComponent(msg)}`, '_blank')
    closeModal()
  }

  const handleOemSubmit = (e) => {
    e.preventDefault()
    const errs = validateOemForm()
    if (Object.keys(errs).length > 0) { setOemErrors(errs); return }
    const msg =
      `*OEM Services Enquiry*\n` +
      `Name: ${oemForm.name}\n` +
      (oemForm.email ? `Email: ${oemForm.email}\n` : '') +
      `Mobile: +91 ${oemForm.mobile}\n` +
      `Requirement: ${oemForm.requirement}`
    window.open(`https://wa.me/919825156800?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title="OEM Blood Collection Tube Manufacturing Services"
        description="Custom OEM manufacturing of blood collection tubes by Hreedrak Bioscience. ISO 7 clean room, CE marked, CDSCO certified. Custom branding, packaging, and specifications available."
        canonical="/oem-services"
      />
      {/* Hero Banner */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #034DA2 0%, #023585 55%, #231F20 100%)' }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" style={{ backgroundColor: '#ffffff07' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center relative">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-2" style={{ color: '#A8C4E8' }}>
            HREEDRAK BIOSCIENCE PRIVATE LIMITED
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">OEM Services for Blood Collection Tubes</h1>
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
            <span className="text-gray-700 font-medium">OEM Services for Blood Collection Tubes</span>
          </nav>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">

            {/* Image column */}
            <div className="md:w-80 flex-shrink-0 bg-gray-50 flex items-center justify-center p-10 border-b md:border-b-0 md:border-r border-gray-100">
              <svg viewBox="-15 15 230 130" className="w-full max-w-[260px]" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="30" width="55" height="55" rx="6" fill="none" stroke="#1e3a8a" strokeWidth="3" transform="rotate(45 32.5 57.5)" />
                <text x="32" y="62" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1e3a8a">O</text>
                <text x="32" y="103" textAnchor="middle" fontSize="8" fill="#1e3a8a">ORIGINAL</text>
                <rect x="73" y="30" width="55" height="55" rx="6" fill="none" stroke="#1e3a8a" strokeWidth="3" transform="rotate(45 100.5 57.5)" />
                <text x="100" y="62" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1e3a8a">E</text>
                <text x="100" y="103" textAnchor="middle" fontSize="8" fill="#1e3a8a">EQUIPMENT</text>
                <rect x="141" y="30" width="55" height="55" rx="6" fill="none" stroke="#1e3a8a" strokeWidth="3" transform="rotate(45 168.5 57.5)" />
                <text x="168" y="62" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1e3a8a">M</text>
                <text x="168" y="103" textAnchor="middle" fontSize="8" fill="#1e3a8a">MANUFACTURER</text>
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
                <button onClick={openModal} className="flex items-center gap-2 border-2 border-gray-800 text-gray-800 font-semibold px-6 py-2.5 rounded hover:bg-gray-800 hover:text-white transition-colors text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Request to Call
                </button>
                <button onClick={openModal} className="flex items-center gap-2 bg-primary text-white font-semibold px-6 py-2.5 rounded hover:bg-primary-dark transition-colors text-sm">
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
        <div id="oem-enquiry-form" className="mt-8 bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
            Looking for &quot;OEM Services for Blood Collection Tubes&quot; ?
          </h2>
          <form onSubmit={handleOemSubmit} noValidate className="max-w-2xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={oemForm.name}
                  onChange={handleOemChange}
                  placeholder="Name"
                  className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary ${oemErrors.name ? 'border-red-400' : 'border-gray-300'}`}
                />
                {oemErrors.name && <p className="mt-1 text-xs text-red-500">{oemErrors.name}</p>}
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email <span className="text-gray-400">(Optional)</span></label>
                <input
                  type="email"
                  name="email"
                  value={oemForm.email}
                  onChange={handleOemChange}
                  placeholder="Email"
                  className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary ${oemErrors.email ? 'border-red-400' : 'border-gray-300'}`}
                />
                {oemErrors.email && <p className="mt-1 text-xs text-red-500">{oemErrors.email}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Mobile No. <span className="text-red-500">*</span></label>
              <div className="flex gap-2">
                <span className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-600 bg-gray-50">+91</span>
                <div className="flex-1">
                  <input
                    type="tel"
                    name="mobile"
                    value={oemForm.mobile}
                    onChange={handleOemChange}
                    placeholder="Enter Mobile No."
                    className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary ${oemErrors.mobile ? 'border-red-400' : 'border-gray-300'}`}
                  />
                  {oemErrors.mobile && <p className="mt-1 text-xs text-red-500">{oemErrors.mobile}</p>}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">Requirement Details <span className="text-red-500">*</span></label>
              <textarea
                name="requirement"
                value={oemForm.requirement}
                onChange={handleOemChange}
                rows={4}
                className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none ${oemErrors.requirement ? 'border-red-400' : 'border-gray-300'}`}
              />
              {oemErrors.requirement && <p className="mt-1 text-xs text-red-500">{oemErrors.requirement}</p>}
            </div>
            <div className="text-center">
              <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-semibold px-10 py-2.5 rounded transition-colors text-sm">
                Send Enquiry
              </button>
            </div>
          </form>
        </div>

      </main>


      {/* Quick Quote Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col sm:flex-row">

              {/* Left – product info */}
              <div className="sm:w-48 bg-gray-50 border-r border-gray-200 p-4 flex flex-col items-center justify-center gap-3">
                <p className="text-sm font-semibold text-gray-800 text-center leading-snug">OEM Services for Blood Collection Tubes</p>
                <div className="w-28 h-28 flex items-center justify-center">
                  <svg viewBox="0 0 200 160" className="w-full" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="30" width="55" height="55" rx="6" fill="none" stroke="#1e3a8a" strokeWidth="3" transform="rotate(45 32.5 57.5)" />
                    <text x="32" y="62" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1e3a8a">O</text>
                    <rect x="73" y="30" width="55" height="55" rx="6" fill="none" stroke="#1e3a8a" strokeWidth="3" transform="rotate(45 100.5 57.5)" />
                    <text x="100" y="62" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1e3a8a">E</text>
                    <rect x="141" y="30" width="55" height="55" rx="6" fill="none" stroke="#1e3a8a" strokeWidth="3" transform="rotate(45 168.5 57.5)" />
                    <text x="168" y="62" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1e3a8a">M</text>
                  </svg>
                </div>
                <div className="text-xs text-gray-600 text-center space-y-0.5">
                  <p><span className="font-medium">Price :</span> <span className="text-primary font-semibold">₹ 1.00 - 3.00</span></p>
                  <p><span className="font-medium">MOQ :</span> 1000 Piece</p>
                </div>
              </div>

              {/* Right – form */}
              <div className="flex-1 flex flex-col">
                <div className="bg-[#1D3A7A] flex items-center justify-between px-5 py-3">
                  <h3 className="text-white font-bold text-base">Get a Quick Quote</h3>
                  <button onClick={closeModal} className="text-white/80 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-full w-7 h-7 flex items-center justify-center transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleModalSubmit} noValidate className="p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">Quantity <span className="text-red-500">*</span></label>
                      <input
                        name="quantity"
                        value={modalForm.quantity}
                        onChange={handleModalChange}
                        placeholder="Quantity"
                        className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary ${modalErrors.quantity ? 'border-red-400' : 'border-gray-300'}`}
                      />
                      {modalErrors.quantity && <p className="mt-1 text-xs text-red-500">{modalErrors.quantity}</p>}
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 mb-1 block">Measurement Units</label>
                      <div className="flex items-center border border-gray-300 rounded px-3 py-2 text-sm gap-2 bg-white">
                        <span className="flex-1 text-gray-700">{modalForm.unit}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Mobile No. <span className="text-red-500">*</span></label>
                    <div className="flex gap-2">
                      <select className="border border-gray-300 rounded px-2 py-2 text-sm focus:outline-none focus:border-primary bg-white">
                        <option>IN +91</option>
                      </select>
                      <div className="flex-1">
                        <input
                          name="mobile"
                          value={modalForm.mobile}
                          onChange={handleModalChange}
                          placeholder="Enter Mobile No."
                          className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary ${modalErrors.mobile ? 'border-red-400' : 'border-gray-300'}`}
                        />
                        {modalErrors.mobile && <p className="mt-1 text-xs text-red-500">{modalErrors.mobile}</p>}
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-[#231F20] hover:bg-[#1D3A7A] text-white text-sm font-semibold py-3 rounded transition-colors">
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default OemServices
