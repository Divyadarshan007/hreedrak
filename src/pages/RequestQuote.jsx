import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { allProducts } from '../data/products'

const countryCodes = [
  { code: '+91', name: 'India' },
  { code: '+1', name: 'USA' },
  { code: '+44', name: 'UK' },
  { code: '+971', name: 'UAE' },
  { code: '+966', name: 'Saudi Arabia' },
  { code: '+60', name: 'Malaysia' },
  { code: '+65', name: 'Singapore' },
  { code: '+61', name: 'Australia' },
]

const RequestQuote = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    countryCode: '+91',
    mobile: '',
    country: '',
    message: '',
  })
  const [selections, setSelections] = useState({}) // { productId: quantity }
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const toggleProduct = (id) => {
    setSelections((prev) => {
      if (prev[id] !== undefined) {
        const next = { ...prev }
        delete next[id]
        return next
      }
      return { ...prev, [id]: '' }
    })
  }

  const setQty = (id, qty) => {
    setSelections((prev) => ({ ...prev, [id]: qty }))
  }

  const selectedCount = Object.keys(selections).length
  const [showAllProducts, setShowAllProducts] = useState(false)
  const INITIAL_PRODUCT_COUNT = 5

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address'
    if (!form.mobile.trim()) errs.mobile = 'Mobile number is required'
    else if (!/^\d{7,15}$/.test(form.mobile)) errs.mobile = 'Enter a valid mobile number (digits only)'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    const selectedProductLines = Object.entries(selections)
      .map(([id, qty]) => {
        const product = allProducts.find((p) => String(p.id) === String(id))
        return product ? `  - ${product.name}${qty ? ` (Qty: ${qty})` : ''}` : null
      })
      .filter(Boolean)
      .join('\n')

    const msg =
      `*Quote Request from Website*\n` +
      `Name: ${form.name}\n` +
      (form.company ? `Company: ${form.company}\n` : '') +
      (form.email ? `Email: ${form.email}\n` : '') +
      `Mobile: ${form.countryCode} ${form.mobile}\n` +
      (form.country ? `Country: ${form.country}\n` : '') +
      (selectedProductLines ? `Selected Products:\n${selectedProductLines}\n` : '') +
      (form.message ? `Additional Requirements: ${form.message}` : '')

    window.open(`https://wa.me/919825156800?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#EFF6FF] flex items-center justify-center px-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-10 max-w-md w-full text-center">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold text-[#0F172A] mb-2">Quote Requested!</h2>
            <p className="text-gray-500 text-sm mb-6">Thank you, <strong>{form.name}</strong>. We have received your quote request and will get back to you within 24 hours.</p>
            <Link to="/" className="bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white font-semibold px-7 py-2.5 rounded transition-colors">
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#EFF6FF]">

        {/* Hero Banner */}
        <div className="bg-blue-50 border-b border-blue-100 py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 mb-3">
              HREEDRAK BIOSCIENCE PRIVATE LIMITED
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Request a Quote</h1>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-100 py-3">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-gray-500">
              <Link to="/" className="hover:text-[#1D4ED8] transition-colors">Home</Link>
              <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Request a Quote</span>
            </nav>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <form onSubmit={handleSubmit} noValidate className="space-y-8">

            {/* Contact Details */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-base font-bold text-[#0F172A] mb-5 pb-3 border-b border-gray-100">Your Contact Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full border rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#1D4ED8] transition-colors ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Company / Hospital / Lab</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Organisation name"
                    className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#1D4ED8] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email <span className="text-gray-400">(Optional)</span></label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full border rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#1D4ED8] transition-colors ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Mobile <span className="text-red-500">*</span></label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      className="border border-gray-200 rounded px-2 py-2.5 text-sm text-gray-700 outline-none focus:border-[#1D4ED8] transition-colors bg-white"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.code} value={c.code}>{c.code} {c.name}</option>
                      ))}
                    </select>
                    <div className="flex-1">
                      <input
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        placeholder="Mobile number"
                        className={`w-full border rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#1D4ED8] transition-colors ${errors.mobile ? 'border-red-400' : 'border-gray-200'}`}
                      />
                      {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Country</label>
                  <input
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Your country"
                    className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#1D4ED8] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Product Selection */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
                <h2 className="text-base font-bold text-[#0F172A]">Select Products</h2>
                {selectedCount > 0 && (
                  <span className="bg-[#1D4ED8] text-white text-xs font-bold px-2.5 py-1 rounded-full">{selectedCount} selected</span>
                )}
              </div>
              <div className="space-y-2">
                {(showAllProducts ? allProducts : allProducts.slice(0, INITIAL_PRODUCT_COUNT)).map((product) => {
                  const checked = selections[product.id] !== undefined
                  return (
                    <div
                      key={product.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-colors cursor-pointer ${checked ? 'border-[#1D4ED8] bg-[#EFF6FF]' : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'}`}
                      onClick={() => toggleProduct(product.id)}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleProduct(product.id)}
                        onClick={(e) => e.stopPropagation()}
                        className="w-4 h-4 accent-[#1D4ED8] flex-shrink-0"
                      />
                      <img src={product.image} alt={product.name} className="w-10 h-10 object-contain rounded border border-gray-100 bg-white flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#0F172A] leading-snug truncate">{product.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{product.price} &nbsp;·&nbsp; MOQ: {product.moq}</p>
                      </div>
                      {checked && (
                        <div className="flex items-center gap-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                          <label className="text-xs text-gray-500 whitespace-nowrap">Qty:</label>
                          <input
                            type="number"
                            min="1"
                            placeholder="0"
                            value={selections[product.id]}
                            onChange={(e) => setQty(product.id, e.target.value)}
                            className="w-20 border border-[#1D4ED8] rounded px-2 py-1 text-sm text-center outline-none focus:border-[#1E3A8A]"
                          />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
              {allProducts.length > INITIAL_PRODUCT_COUNT && (
                <button
                  type="button"
                  onClick={() => setShowAllProducts((prev) => !prev)}
                  className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#1D4ED8] hover:text-[#1E3A8A] transition-colors"
                >
                  {showAllProducts ? (
                    <>
                      Show Less
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Show More ({allProducts.length - INITIAL_PRODUCT_COUNT} more)
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Message */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-base font-bold text-[#0F172A] mb-4 pb-3 border-b border-gray-100">Additional Requirements</h2>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Describe any special requirements, customisations, delivery location, or packaging preferences..."
                className="w-full border border-gray-200 rounded px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-[#1D4ED8] transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white font-semibold px-10 py-3.5 rounded transition-colors"
              >
                Submit Quote Request
              </button>
              <p className="text-xs text-gray-400">We respond within 24 hours on business days.</p>
            </div>

          </form>
        </div>

      </main>
      <Footer />
    </>
  )
}

export default RequestQuote
