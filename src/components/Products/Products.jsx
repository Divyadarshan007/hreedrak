import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const productCategories = {
  vacuum: [
    { id: 1, name: 'K2 EDTA Vacuum Blood Collection Tube', image: '/productImage/vaccum_tubes/k2-edta-vacuum-blood-collection-tube-1740491889-7886336.jpg', price: '₹2.75 – ₹4.00 / piece', moq: '5000 piece', slug: 'k2-edta-vacuum-blood-collection-tube', categorySlug: 'vacuum-blood-collection-tubes' },
    { id: 2, name: 'Clot Activator Vacuum Blood Collection Tube', image: '/productImage/vaccum_tubes/vacuum-clot-activator-blood-collection-tube-1740496023-7886366.jpg', price: '₹2.75 – ₹4.00 / piece', moq: '5000 piece', slug: 'clot-activator-vacuum-blood-collection-tube', categorySlug: 'vacuum-blood-collection-tubes' },
    { id: 3, name: 'K3 EDTA Vacuum Blood Collection Tube', image: '/productImage/vaccum_tubes/k3-edta-vacuum-blood-collection-tubes-1740491241-7886279.jpg', price: '₹2.75 – ₹4.00 / piece', moq: '5000 piece', slug: 'k3-edta-vacuum-blood-collection-tube', categorySlug: 'vacuum-blood-collection-tubes' },
    { id: 4, name: 'Fluoride Vacuum Blood Collection Tube', image: '/productImage/vaccum_tubes/fluoride-vacuum-blood-collection-tube-1740496500-7886414.jpg', price: '₹2.75 – ₹4.00 / piece', moq: '5000 piece', slug: 'fluoride-vacuum-blood-collection-tube', categorySlug: 'vacuum-blood-collection-tubes' },
    { id: 5, name: 'Plain Serum Vacuum Blood Collection Tube', image: '/productImage/vaccum_tubes/vacuum-plain-serum-blood-collection-tube-1740637011-7886589.jpg', price: '₹3.00 – ₹5.00 / piece', moq: '6000 piece', slug: 'plain-serum-vacuum-blood-collection-tube', categorySlug: 'vacuum-blood-collection-tubes' },
  ],
  nonVacuum: [
    { id: 6, name: 'Blood Collection Fluoride Tube with Double Safety Caps', image: '/productImage/non_vaccum_tubes/fluoride-safety-cap-blood-collection-tube-1740581900-7886495.jpg', price: '₹1.40 – ₹1.80 / piece', moq: '10000 piece', slug: 'blood-collection-flouride-tube-with-double-safety-caps', categorySlug: 'non-vacuum-blood-collection-tubes' },
    { id: 7, name: 'Clot Activator Non Vacuum Blood Collection Tube', image: '/productImage/non_vaccum_tubes/clot-activator-safety-cap-blood-collection-tube-1740581205-7886494.jpg', price: '₹1.40 – ₹1.80 / piece', moq: '10000 piece', slug: 'clot-activator-non-vacuum-blood-collection-tube', categorySlug: 'non-vacuum-blood-collection-tubes' },
    { id: 8, name: 'K2 EDTA Safety Cap Blood Collection Tube', image: '/productImage/non_vaccum_tubes/k2-edta-safety-cap-blood-collection-tube-1740580690-7886490.jpg', price: '₹1.40 – ₹1.80 / piece', moq: '10000 piece', slug: 'k2-edta-safety-cap-blood-collection-tube', categorySlug: 'non-vacuum-blood-collection-tubes' },
    { id: 9, name: 'K3 EDTA Safety Cap Blood Collection Tube', image: '/productImage/non_vaccum_tubes/k3-edta-safety-cap-blood-collection-tube-1740580332-7886474.jpg', price: '₹1.40 – ₹1.80 / piece', moq: '10000 piece', slug: 'k3-edta-safety-cap-blood-collection-tube', categorySlug: 'non-vacuum-blood-collection-tubes' },
    { id: 10, name: 'Plain Non Vacuum Blood Collection Tube', image: '/productImage/non_vaccum_tubes/non-vacuum-double-cap-plain-blood-collection-tube-1740637631-7886598.jpg', price: '₹1.40 – ₹1.80 / piece', moq: '10000 piece', slug: 'plain-non-vacuum-blood-collection-tube', categorySlug: 'non-vacuum-blood-collection-tubes' },
  ],
  singleCap: [
    { id: 11, name: 'Clot Activator Single Cap Blood Collection Tube', image: '/productImage/single_cap_tubes/single-cap-clot-activator-blood-collection-tube-1740497900-7886439.jpg', price: '₹1.20 – ₹1.60 / piece', moq: '12000 piece', slug: 'clot-activator-single-cap-blood-collection-tube', categorySlug: 'single-cap-blood-collection-tubes' },
    { id: 12, name: 'Fluoride Single Cap Blood Collection Tube', image: '/productImage/single_cap_tubes/fluoride-single-cap-blood-collection-tube-1740498240-7886448.jpg', price: '₹1.20 – ₹1.60 / piece', moq: '12000 piece', slug: 'fluoride-single-cap-blood-collection-tube', categorySlug: 'single-cap-blood-collection-tubes' },
    { id: 13, name: 'K2 EDTA Non Vacuum Blood Collection Tube', image: '/productImage/single_cap_tubes/k2-edta-single-cap-blood-collection-tube-1740497396-7886431.jpg', price: '₹1.20 – ₹1.60 / piece', moq: '12000 piece', slug: 'k2-edta-non-vacuum-blood-collection-tube', categorySlug: 'single-cap-blood-collection-tubes' },
    { id: 14, name: 'K3 EDTA Single Cap Non Vacuum Blood Collection Tube', image: '/productImage/single_cap_tubes/k3-edta-single-cap-tube-1740497811-7886427.jpg', price: '₹1.20 – ₹1.60 / piece', moq: '12000 piece', slug: 'k3-edta-single-cap-non-vacuum-blood-collection-tube', categorySlug: 'single-cap-blood-collection-tubes' },
    { id: 15, name: 'Plain Serum Blood Collection Tube', image: '/productImage/single_cap_tubes/plain-serum-blood-collection-tubes-1740637606-7886572.jpg', price: '₹1.20 – ₹1.60 / piece', moq: '12000 piece', slug: 'plain-serum-blood-collection-tube', categorySlug: 'single-cap-blood-collection-tubes' },
  ],
  esrPipette: [
    { id: 16, name: 'Polystyrene Disposable ESR Pipette', image: '/productImage/polystyrene-disposable-esr-pipette-1740635071-7886616.jpg', price: '₹3.50 – ₹5.50 / piece', moq: '3000 piece', slug: 'polystyrene-disposable-esr-pipette', categorySlug: 'polystyrene-disposable-esr-pipette' },
  ],
}

const tabs = [
  { key: 'vacuum', label: 'Vacuum Tubes' },
  { key: 'nonVacuum', label: 'Non-Vacuum Tubes' },
  { key: 'singleCap', label: 'Single Cap Tubes' },
  { key: 'esrPipette', label: 'Polystyrene Disposable ESR Pipette' },
]

const countryCodes = [
  { code: '+91', flag: '🇮🇳', name: 'IN' },
  { code: '+1', flag: '🇺🇸', name: 'US' },
  { code: '+44', flag: '🇬🇧', name: 'GB' },
  { code: '+971', flag: '🇦🇪', name: 'AE' },
  { code: '+966', flag: '🇸🇦', name: 'SA' },
  { code: '+60', flag: '🇲🇾', name: 'MY' },
  { code: '+65', flag: '🇸🇬', name: 'SG' },
  { code: '+61', flag: '🇦🇺', name: 'AU' },
]

function InquireModal({ product, onClose }) {
  const [quantity, setQuantity] = useState('')
  const [unit] = useState('piece')
  const [countryCode, setCountryCode] = useState('+91')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!quantity.trim()) errs.quantity = 'Quantity is required'
    else if (isNaN(quantity) || Number(quantity) <= 0) errs.quantity = 'Enter a valid quantity'
    if (!mobile.trim()) errs.mobile = 'Mobile number is required'
    else if (!/^\d{7,15}$/.test(mobile)) errs.mobile = 'Enter a valid mobile number (digits only)'
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email address'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    const msg =
      `*Quick Quote - ${product.name}*\n` +
      `Quantity: ${quantity} ${unit}\n` +
      `Mobile: ${countryCode} ${mobile}` +
      (email.trim() ? `\nEmail: ${email}` : '')
    window.open(`https://wa.me/919825156800?text=${encodeURIComponent(msg)}`, '_blank')
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl relative overflow-hidden">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white text-sm font-bold hover:bg-gray-600 transition-colors"
        >
          ✕
        </button>

        <div className="flex flex-col sm:flex-row">

          {/* Left — product info */}
          <div className="sm:w-5/12 bg-gray-50 p-5 flex flex-col">
            <div className="bg-gray-200 rounded text-white text-sm font-semibold px-3 py-2 mb-4 leading-tight">
              <span className="text-gray-800">{product.name}</span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="h-44 w-auto object-contain"
              />
            </div>
            <div className="mt-4 text-sm text-gray-800">
              <p className="mt-1"><span className="font-semibold">MOQ :</span> {product.moq}</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="sm:w-7/12 flex flex-col">

            {/* Header */}
            <div className="bg-[#023585] text-white text-center py-4 px-6">
              <h2 className="text-lg font-bold">Get a Quick Quote</h2>
            </div>

            <form onSubmit={handleSubmit} noValidate className="p-5 flex flex-col gap-4">

              {/* Quantity + Unit row */}
              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="block text-xs text-gray-600 mb-1">Quantity <span className="text-red-500">*</span></label>
                  <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => { setQuantity(e.target.value); setErrors((p) => ({ ...p, quantity: '' })) }}
                    className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#034DA2] ${errors.quantity ? 'border-red-400' : 'border-gray-300'}`}
                  />
                  {errors.quantity && <p className="mt-1 text-xs text-red-500">{errors.quantity}</p>}
                </div>
                <div className="flex-1">
                  <label className="block text-xs text-gray-600 mb-1">Measurement Units</label>
                  <div className="flex items-center border border-gray-300 rounded px-3 py-2 gap-2">
                    <span className="flex-1 text-sm text-gray-700">{unit}</span>
                  </div>
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-xs text-gray-600 mb-1">Mobile No. <span className="text-red-500">*</span></label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-2 text-sm focus:outline-none focus:border-[#034DA2] bg-white"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                    ))}
                  </select>
                  <div className="flex-1">
                    <input
                      type="tel"
                      placeholder="Enter Mobile No."
                      value={mobile}
                      onChange={(e) => { setMobile(e.target.value); setErrors((p) => ({ ...p, mobile: '' })) }}
                      className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#034DA2] ${errors.mobile ? 'border-red-400' : 'border-gray-300'}`}
                    />
                    {errors.mobile && <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>}
                  </div>
                </div>
              </div>

              {/* Email (optional) */}
              <div>
                <label className="block text-xs text-gray-600 mb-1">Email <span className="text-gray-400">(Optional)</span></label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: '' })) }}
                  className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-[#034DA2] ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2.5 rounded transition-colors text-sm"
              >
                Send Enquiry
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const Products = () => {
  const [activeTab, setActiveTab] = useState('vacuum')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const navigate = useNavigate()

  return (
    <section className="py-16 lg:py-20 bg-[#EEF3FA]" id="products">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#034DA2]" />
            <p className="text-[#034DA2] text-xs font-bold uppercase tracking-[0.3em]">OUR PRODUCTS</p>
            <div className="w-8 h-0.5 bg-[#034DA2]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#231F20] leading-tight max-w-2xl">
            Blood Collection Tubes
          </h2>
        </div>

        {/* Tab navigation */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeTab === tab.key
                  ? 'bg-[#034DA2] text-white shadow-md'
                  : 'bg-white text-[#023585] border border-[#A8C4E8] hover:border-[#034DA2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {productCategories[activeTab].map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => navigate(`/products/${product.categorySlug}/${product.slug}`)}
              className="bg-white rounded-lg p-5 flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-[#A8C4E8] cursor-pointer"
            >
              <div className="mb-4">
                <img src={product.image} alt={product.name} className="h-40 w-auto mx-auto object-contain" />
              </div>
              <h3 className="text-xs font-bold text-[#231F20] mb-1 leading-snug flex-1">{product.name}</h3>
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedProduct(product) }}
                className="mt-auto border border-[#034DA2] text-[#034DA2] hover:bg-[#034DA2] hover:text-white text-xs font-semibold px-5 py-2 rounded transition-colors w-full"
              >
                Inquire
              </button>
            </motion.div>
          ))}
        </div>

      </motion.div>

      {/* Modal */}
      {selectedProduct && (
        <InquireModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

    </section>
  )
}

export default Products
