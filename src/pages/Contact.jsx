import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOMeta from '../components/SEO/SEOMeta'

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    ),
    label: 'Contact Person',
    value: 'Mr. Patel',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    value: '166, First Floor, SITP-1, RJD Park, Ichchhapor, Surat, Gujarat, India – 394510',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Call Us',
    value: '08048116653',
    href: 'tel:08048116653',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'hreedrakbioscience@gmail.com',
    href: 'mailto:hreedrakbioscience@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Web Address',
    value: 'www.hreedrakbioscience.com',
    href: '#',
  },
]

const countryCodes = ['+91', '+1', '+44', '+61', '+971', '+65', '+49', '+33']

const Contact = () => {
  const [form, setForm] = useState({
    product: '',
    name: '',
    email: '',
    countryCode: '+91',
    mobile: '',
    enquiry: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.product.trim()) errs.product = 'This field is required'
    if (!form.name.trim()) errs.name = 'Name is required'
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address'
    if (!form.mobile.trim()) errs.mobile = 'Mobile number is required'
    else if (!/^\d{7,15}$/.test(form.mobile)) errs.mobile = 'Enter a valid mobile number (digits only)'
    if (!form.enquiry.trim()) errs.enquiry = 'Enquiry details are required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    const msg =
      `*New Enquiry from Website*\n` +
      `Product/Service: ${form.product}\n` +
      `Name: ${form.name}\n` +
      (form.email ? `Email: ${form.email}\n` : '') +
      `Mobile: ${form.countryCode} ${form.mobile}\n` +
      `Enquiry: ${form.enquiry}`
    window.open(`https://wa.me/919825156800?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
  }

  const handleCancel = () => {
    setForm({ product: '', name: '', email: '', countryCode: '+91', mobile: '', enquiry: '' })
    setErrors({})
    setSubmitted(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#EEF3FA]">
      <SEOMeta
        title="Contact Us — Get in Touch"
        description="Contact Hreedrak Bioscience for blood collection tube enquiries. Phone: 08048116653. Email: hreedrakbioscience@gmail.com. Based in Surat, Gujarat, India."
        canonical="/contact"
      />
      {/* Hero Banner */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #034DA2 0%, #023585 55%, #231F20 100%)' }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" style={{ backgroundColor: '#ffffff07' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center relative">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-2" style={{ color: '#A8C4E8' }}>
            HREEDRAK BIOSCIENCE PRIVATE LIMITED
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Contact Us</h1>
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
            <span className="text-gray-700 font-medium">Contact Us</span>
          </nav>
        </div>
      </div>

      <main className="flex-1 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left: Contact Info */}
              <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
                <p className="text-[#034DA2] text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  GET IN TOUCH
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#231F20] mb-1">
                  Hreedrak Bioscience
                </h2>
                <p className="text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider">
                  Private Limited
                </p>
                <div className="w-10 h-0.5 bg-[#034DA2] mb-8" />

                <div className="space-y-0">
                  {contactDetails.map((item, i) => (
                    <div key={item.label}>
                      <div className="flex items-start gap-4 py-5">
                        <div className="w-10 h-10 rounded-full bg-[#231F20] flex items-center justify-center flex-shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm text-[#231F20] hover:text-[#034DA2] transition-colors font-medium"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm text-[#231F20] font-medium leading-relaxed">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                      {i < contactDetails.length - 1 && (
                        <div className="h-px bg-gray-100 ml-14" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="mt-8 rounded-xl overflow-hidden border border-[#A8C4E8] h-44">
                  <iframe
                    title="Hreedrak Bioscience Private Limited Location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=72.78%2C21.16%2C72.95%2C21.24&layer=mapnik&marker=21.2007%2C72.8577"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="p-8 lg:p-12">
                <p className="text-[#034DA2] text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  SEND A MESSAGE
                </p>
                <h2 className="text-2xl font-extrabold text-[#231F20] mb-8">
                  Submit Your Requirement
                </h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#EEF3FA] flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-[#034DA2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-500 text-sm mb-6">
                      Your enquiry has been submitted. We will get back to you shortly.
                    </p>
                    <button
                      onClick={handleCancel}
                      className="bg-[#034DA2] hover:bg-[#023585] text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Product / Service Looking for <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        placeholder="Product / Service Looking for"
                        className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${errors.product ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-[#034DA2] focus:ring-[#034DA2]'}`}
                      />
                      {errors.product && <p className="mt-1 text-xs text-red-500">{errors.product}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-[#034DA2] focus:ring-[#034DA2]'}`}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email <span className="text-gray-400">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-[#034DA2] focus:ring-[#034DA2]'}`}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Mobile <span className="text-red-500">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select
                          name="countryCode"
                          value={form.countryCode}
                          onChange={handleChange}
                          className="border border-gray-200 rounded-lg px-3 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#034DA2] focus:ring-1 focus:ring-[#034DA2] transition-colors bg-white"
                        >
                          {countryCodes.map((code) => (
                            <option key={code} value={code}>{code}</option>
                          ))}
                        </select>
                        <div className="flex-1">
                          <input
                            type="tel"
                            name="mobile"
                            value={form.mobile}
                            onChange={handleChange}
                            placeholder="Mobile"
                            className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${errors.mobile ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-[#034DA2] focus:ring-[#034DA2]'}`}
                          />
                          {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Enquiry Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="enquiry"
                        value={form.enquiry}
                        onChange={handleChange}
                        placeholder="Your Requirement"
                        rows={4}
                        className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors resize-none ${errors.enquiry ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-gray-200 focus:border-[#034DA2] focus:ring-[#034DA2]'}`}
                      />
                      {errors.enquiry && <p className="mt-1 text-xs text-red-500">{errors.enquiry}</p>}
                    </div>

                    <div className="flex gap-3 pt-1">
                      <button
                        type="submit"
                        className="bg-[#034DA2] hover:bg-[#023585] text-white text-sm font-semibold px-7 py-3 rounded-lg transition-colors"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold px-7 py-3 rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Contact
