import { useState, useLayoutEffect, useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { findProduct, getRelatedProducts } from '../../data/products'
import SEOMeta from '../../components/SEO/SEOMeta'


const ProductDetail = () => {
  const { categorySlug, productSlug } = useParams()
  const product = findProduct(categorySlug, productSlug)

  useLayoutEffect(() => { window.scrollTo(0, 0); setActiveImg(0) }, [productSlug])

  const [activeImg, setActiveImg] = useState(0)

  const images = product?.images ?? [product?.image]

  const [form, setForm] = useState({
    name: '', email: '', mobile: '', quantity: '', purpose: '',
    requirement: 'I am interested. Kindly send the quotation for the same.',
  })
  const [errors, setErrors] = useState({})
  const [showSticky, setShowSticky] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalForm, setModalForm] = useState({ quantity: '', unit: 'piece', mobile: '' })
  const [modalErrors, setModalErrors] = useState({})

  const openModal = (e) => { e.preventDefault(); setShowModal(true) }
  const closeModal = () => { setShowModal(false); setModalErrors({}) }

  const handleModalChange = (e) => {
    setModalForm({ ...modalForm, [e.target.name]: e.target.value })
    setModalErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!product) return <Navigate to="/404" replace />

  const related = getRelatedProducts(categorySlug, productSlug)
  const categoryPath = `/products/${categorySlug}`
  const quickSpecs = product.specs.slice(0, 4)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const validateForm = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address'
    if (!form.mobile.trim()) errs.mobile = 'Mobile number is required'
    else if (!/^\d{7,15}$/.test(form.mobile)) errs.mobile = 'Enter a valid mobile number (digits only)'
    if (!form.requirement.trim()) errs.requirement = 'Requirement details are required'
    return errs
  }

  const validateModal = () => {
    const errs = {}
    if (!modalForm.quantity.trim()) errs.quantity = 'Quantity is required'
    else if (isNaN(modalForm.quantity) || Number(modalForm.quantity) <= 0) errs.quantity = 'Enter a valid quantity'
    if (!modalForm.mobile.trim()) errs.mobile = 'Mobile number is required'
    else if (!/^\d{7,15}$/.test(modalForm.mobile)) errs.mobile = 'Enter a valid mobile number (digits only)'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validateForm()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    const msg =
      `*Product Enquiry - ${product.name}*\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Mobile: +91 ${form.mobile}\n` +
      (form.quantity ? `Quantity: ${form.quantity} piece\n` : '') +
      (form.purpose ? `Purpose: ${form.purpose}\n` : '') +
      `Requirement: ${form.requirement}`
    window.open(`https://wa.me/919825156800?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const handleModalSubmit = (e) => {
    e.preventDefault()
    const errs = validateModal()
    if (Object.keys(errs).length > 0) { setModalErrors(errs); return }
    const msg =
      `*Quick Quote - ${product.name}*\n` +
      `Quantity: ${modalForm.quantity} ${modalForm.unit}\n` +
      `Mobile: +91 ${modalForm.mobile}`
    window.open(`https://wa.me/919825156800?text=${encodeURIComponent(msg)}`, '_blank')
    closeModal()
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: `https://www.hreedrakbioscience.com${product.image}`,
    description: product.description,
    brand: { '@type': 'Brand', name: 'Hreedrak Bioscience' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: product.price.replace(/[₹\s]/g, '').split('–')[0],
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Hreedrak Bioscience Private Limited' },
    },
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title={product.name}
        description={`Buy ${product.name} from Hreedrak Bioscience. Price: ${product.price}. MOQ: ${product.moq}. CDSCO certified, CE marked, manufactured in ISO 7 clean room, Surat, India.`}
        canonical={`/products/${categorySlug}/${productSlug}`}
        ogImage={`https://www.hreedrakbioscience.com${product.image}`}
        structuredData={structuredData}
      />
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-blue-50 border-b border-blue-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 mb-3">
            HREEDRAK BIOSCIENCE PRIVATE LIMITED
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">{product.name}</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-[#1D4ED8] transition-colors">Home</Link>
            <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <Link to={categoryPath} className="hover:text-[#1D4ED8] transition-colors">{product.categoryName}</Link>
            <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">

        {/* Top product section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-8">

            {/* Left – image + thumbnails */}
            <div className="md:w-72 flex-shrink-0">
              <div className="border border-gray-200 rounded-lg bg-gray-50 flex items-center justify-center h-64">
                <img src={images[activeImg]} alt={product.name} className="h-56 w-auto object-contain mx-auto" />
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 mt-3 flex-wrap">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`w-16 h-16 border-2 rounded bg-gray-50 flex items-center justify-center transition-colors ${
                        activeImg === i ? 'border-primary' : 'border-gray-200 hover:border-primary'
                      }`}
                    >
                      <img src={img} alt={product.name} className="h-12 w-auto object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right – details */}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <h1 className="text-xl font-bold text-gray-800 leading-snug">{product.name}</h1>
                <button className="text-gray-400 hover:text-primary flex-shrink-0 mt-0.5" title="Share">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>

              <div className="mt-2 mb-1">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
                <span className="text-gray-500 text-sm ml-1">/ piece</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                <span className="font-semibold text-gray-700">{product.moq}</span> (MOQ)
              </p>

              {/* Quantity + Get Best Price */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <input
                  type="number"
                  placeholder="Quantity"
                  className="border border-gray-300 rounded px-3 py-2 text-sm w-28 focus:outline-none focus:border-primary"
                />
                <span className="text-sm text-gray-500 border border-gray-300 rounded px-3 py-2">piece</span>
                <button onClick={openModal} className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2 rounded transition-colors">
                  Get Best Price
                </button>
              </div>

              {/* Quick specs */}
              <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden mb-6">
                {quickSpecs.map((s) => (
                  <div key={s.label} className="flex text-sm">
                    <span className="w-40 px-4 py-2.5 bg-gray-50 text-gray-500 flex-shrink-0">{s.label}</span>
                    <span className="px-4 py-2.5 text-gray-700 font-medium">{s.value}</span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex gap-3 flex-wrap">
                <button onClick={openModal} className="flex items-center gap-2 border border-gray-300 hover:border-primary hover:text-primary text-gray-700 text-sm font-semibold px-5 py-2.5 rounded transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Request to Call
                </button>
                <button onClick={openModal} className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Product Details</h2>
          <div className="border border-gray-100 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {product.details.map((d, i) => (
                <div key={d.label} className={`flex text-sm border-b border-gray-100 ${i % 2 === 0 ? 'sm:border-r sm:border-gray-100' : ''}`}>
                  <span className="w-44 px-4 py-2.5 bg-gray-50 text-gray-500 flex-shrink-0">{d.label}</span>
                  <span className="px-4 py-2.5 text-gray-700 font-medium">{d.value}</span>
                </div>
              ))}
            </div>
          </div>

          {product.description && (
            <p className="text-sm text-gray-600 leading-relaxed mt-5">{product.description}</p>
          )}

          <div className="mt-5 text-center">
            <button onClick={openModal} className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-8 py-2.5 rounded transition-colors">
              Yes! I am interested
            </button>
          </div>
        </div>

        {/* Enquiry Form */}
        <div id="enquiry-form" className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-6">
            Looking for &quot;{product.name}&quot; ?
          </h2>

          <form onSubmit={handleSubmit} noValidate className="max-w-2xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Name <span className="text-red-500">*</span></label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Email <span className="text-red-500">*</span></label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Mobile No. <span className="text-red-500">*</span></label>
                <div className="flex gap-2">
                  <select className="border border-gray-300 rounded px-2 py-2 text-sm focus:outline-none focus:border-primary bg-white">
                    <option>+91</option>
                  </select>
                  <div className="flex-1">
                    <input
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="Enter Mobile No."
                      className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary ${errors.mobile ? 'border-red-400' : 'border-gray-300'}`}
                    />
                    {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500 mb-1 block">Quantity</label>
                <div className="flex gap-2">
                  <input
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    placeholder="Estimated Quantity"
                    className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-primary"
                  />
                  <span className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-500 bg-gray-50">piece</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1 block">Purpose of Requirement</label>
              <div className="flex gap-4">
                {['Reselling', 'End Use'].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                    <input type="radio" name="purpose" value={opt} checked={form.purpose === opt}
                      onChange={handleChange} className="accent-primary" />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-1 block">Requirement Details <span className="text-red-500">*</span></label>
              <textarea
                name="requirement"
                value={form.requirement}
                onChange={handleChange}
                rows={3}
                className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none ${errors.requirement ? 'border-red-400' : 'border-gray-300'}`}
              />
              {errors.requirement && <p className="mt-1 text-xs text-red-500">{errors.requirement}</p>}
            </div>

            <div className="text-center">
              <button type="submit" className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-8 py-2.5 rounded transition-colors">
                Send Enquiry
              </button>
            </div>
          </form>
        </div>

        {/* Explore More Products */}
        {related.length > 0 && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-800 text-center mb-6">Explore More Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {related.map((p) => (
                <div key={p.slug} className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:shadow-md transition-shadow">
                  <div className="h-28 flex items-center justify-center mb-3">
                    <img src={p.image} alt={p.name} className="h-20 w-auto object-contain" />
                  </div>
                  <p className="text-xs text-center text-gray-700 font-medium mb-3 leading-snug">{p.name}</p>
                  <Link
                    to={`/products/${p.categorySlug}/${p.slug}`}
                    className="bg-primary hover:bg-primary-dark text-white text-xs font-semibold px-4 py-1.5 rounded transition-colors w-full text-center"
                  >
                    Get Best Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      <Footer />

      {/* Sticky Inquiry Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-[#0F172A] border-t border-[#1D4ED8]/40 shadow-2xl transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
          <div className="flex-1 min-w-0 hidden sm:block">
            <p className="text-white text-sm font-semibold truncate">{product.name}</p>
            <p className="text-[#3B82F6] text-xs">{product.price} / piece &nbsp;·&nbsp; MOQ: {product.moq}</p>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <a
              href={`https://wa.me/919825156800?text=${encodeURIComponent(`Hello! I'm interested in ${product.name}. Please share more details and pricing.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <button
              onClick={openModal}
              className="bg-[#1D4ED8] hover:bg-[#3B82F6] text-white text-sm font-semibold px-5 py-2 rounded transition-colors"
            >
              Get Best Price
            </button>
          </div>
        </div>
      </div>

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
                <p className="text-sm font-semibold text-gray-800 text-center leading-snug">{product.name}</p>
                <div className="w-28 h-28 flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="h-24 w-auto object-contain" />
                </div>
                <div className="text-xs text-gray-600 text-center space-y-0.5">
                  <p><span className="font-medium">Price :</span> <span className="text-primary font-semibold">{product.price}</span></p>
                  <p><span className="font-medium">MOQ :</span> {product.moq}</p>
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
                        <button
                          type="button"
                          className="text-orange-500 text-xs font-semibold flex items-center gap-1 hover:text-orange-600"
                          onClick={() => {
                            const u = window.prompt('Enter unit', modalForm.unit)
                            if (u) setModalForm({ ...modalForm, unit: u })
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                          Edit
                        </button>
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

                  <button type="submit" className="w-full bg-[#0F172A] hover:bg-[#1D3A7A] text-white text-sm font-semibold py-3 rounded transition-colors">
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

export default ProductDetail
