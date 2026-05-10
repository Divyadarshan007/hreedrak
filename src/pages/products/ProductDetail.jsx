import { useState, useLayoutEffect, useEffect, useRef } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { findProduct, getRelatedProducts } from '../../data/products'
import SEOMeta from '../../components/SEO/SEOMeta'
import ProductCard from '../../components/Products/ProductCard'

const placeholderImg = '/elementor-placeholder-image.png'

/* ── Palette ─────────────────────────────────────────────────────
   PRIMARY  #034DA2   FONT  #231F20   ACCENT  #ED1B24
   GREEN    #00A650   GRAY  #6D6E72
──────────────────────────────────────────────────────────────── */
const PRIMARY = '#034DA2'
const FONT    = '#231F20'
const ACCENT  = '#ED1B24'
const GREEN   = '#00A650'
const GRAY    = '#6D6E72'


const ProductDetail = () => {
  const { categorySlug, productSlug } = useParams()
  const product = findProduct(categorySlug, productSlug)

  useLayoutEffect(() => { window.scrollTo(0, 0); setActiveImg(0) }, [productSlug])

  const [activeImg, setActiveImg] = useState(0)
  const images = (product?.images && product.images.length > 0 && product.images[0] !== '') 
    ? product.images 
    : [product?.image || placeholderImg]

  const [form, setForm] = useState({
    name: '', email: '', mobile: '', quantity: '', purpose: '',
    requirement: 'I am interested. Kindly send the quotation for the same.',
  })
  const [errors, setErrors] = useState({})
  const [showSticky, setShowSticky] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalForm, setModalForm] = useState({ quantity: '', unit: 'piece', mobile: '', email: '' })
  const [modalErrors, setModalErrors] = useState({})
  const [showShare, setShowShare] = useState(false)
  const [copiedTarget, setCopiedTarget] = useState(null)
  const shareRef = useRef(null)

  const openModal  = (e) => { if (e) e.preventDefault(); setShowModal(true) }
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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (shareRef.current && !shareRef.current.contains(e.target)) setShowShare(false)
    }
    if (showShare) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showShare])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopiedTarget('link')
      setTimeout(() => setCopiedTarget(null), 1500)
    })
  }

  const handleInstagramShare = () => {
    window.open('https://www.instagram.com', '_blank')
    setShowShare(false)
  }

  if (!product) return <Navigate to="/404" replace />

  const related    = getRelatedProducts(categorySlug, productSlug)
  const categoryPath = `/products/${categorySlug}`

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const validateForm = () => {
    const errs = {}
    if (!form.name.trim())    errs.name = 'Name is required'
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address'
    if (!form.mobile.trim())  errs.mobile = 'Mobile number is required'
    else if (!/^\d{7,15}$/.test(form.mobile)) errs.mobile = 'Enter a valid mobile number (digits only)'
    if (!form.quantity.trim()) errs.quantity = 'Quantity is required'
    else if (isNaN(form.quantity) || Number(form.quantity) <= 0) errs.quantity = 'Enter a valid quantity'
    if (!form.requirement.trim()) errs.requirement = 'Requirement details are required'
    return errs
  }

  const validateModal = () => {
    const errs = {}
    if (!modalForm.quantity.trim()) errs.quantity = 'Quantity is required'
    else if (isNaN(modalForm.quantity) || Number(modalForm.quantity) <= 0) errs.quantity = 'Enter a valid quantity'
    if (!modalForm.mobile.trim()) errs.mobile = 'Mobile number is required'
    else if (!/^\d{7,15}$/.test(modalForm.mobile)) errs.mobile = 'Enter a valid mobile number (digits only)'
    if (modalForm.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(modalForm.email)) errs.email = 'Enter a valid email address'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validateForm()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    const msg =
      `*Product Enquiry - ${product.name}*\n` +
      `Name: ${form.name}\n` +
      (form.email ? `Email: ${form.email}\n` : '') +
      `Mobile: +91 ${form.mobile}\n` +
      (form.quantity ? `Quantity: ${form.quantity} piece\n` : '') +
      (form.purpose  ? `Purpose: ${form.purpose}\n` : '') +
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
      `Mobile: +91 ${modalForm.mobile}` +
      (modalForm.email.trim() ? `\nEmail: ${modalForm.email}` : '')
    window.open(`https://wa.me/919825156800?text=${encodeURIComponent(msg)}`, '_blank')
    closeModal()
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type':    'Product',
    name:       product.name,
    image:      `https://www.hreedrakbioscience.com${product.image}`,
    description: product.description,
    brand:      { '@type': 'Brand', name: 'Hreedrak Bioscience' },
    offers: {
      '@type':        'Offer',
      priceCurrency:  'INR',
      price:          product.price.replace(/[₹\s]/g, '').split('–')[0],
      availability:   'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Hreedrak Bioscience Private Limited' },
    },
  }

  /* ── field style helper ── */
  const fieldCls = (err) =>
    `w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none transition-colors ${
      err ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-[#034DA2]'
    }`

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOMeta
        title={product.name}
        description={`Buy ${product.name} from Hreedrak Bioscience. CDSCO certified, CE marked, manufactured in ISO 7 clean room, Surat, India.`}
        canonical={`/products/${categorySlug}/${productSlug}`}
        ogImage={`https://www.hreedrakbioscience.com${product.image}`}
        structuredData={structuredData}
      />

      {/* ── Breadcrumb ── */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs" style={{ color: GRAY }}>
            <Link to="/" className="hover:underline transition-colors" style={{ color: GRAY }}>Home</Link>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <Link to={categoryPath} className="hover:underline transition-colors" style={{ color: GRAY }}>{product.categoryName}</Link>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="font-medium" style={{ color: FONT }}>{product.name}</span>
          </nav>
        </div>
      </div>

      <main className="flex-1">

        {/* ── PRODUCT DETAIL — specs left, images right ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

          {/* Product header: category + name + price */}
          <div className="mb-8 pb-6 border-b border-gray-100">
            <p className="text-[16px] font-bold uppercase tracking-[0.2em] mb-2" style={{ color: ACCENT }}>
              {product.categoryName}
            </p>
            <div className="flex items-start gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold leading-snug flex-1" style={{ color: FONT }}>
                {product.name}
              </h1>
              {/* Share */}
              <div className="relative flex-shrink-0 mt-1" ref={shareRef}>
                <button
                  onClick={() => setShowShare((v) => !v)}
                  className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors"
                  style={{ borderColor: GRAY + '60', color: GRAY }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
                {showShare && (
                  <div className="absolute z-50 bg-white border border-gray-200 rounded-xl shadow-xl w-52 py-2 text-sm" style={{ top: 'calc(100% + 8px)', right: '0' }}>
                    <p className="px-4 py-1.5 text-xs font-semibold uppercase tracking-wide" style={{ color: GRAY }}>Share via</p>
                    <a href={`https://wa.me/?text=${encodeURIComponent(product.name + ' – ' + window.location.href)}`} target="_blank" rel="noopener noreferrer" onClick={() => setShowShare(false)} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                      WhatsApp
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" onClick={() => setShowShare(false)} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors">
                      <svg className="w-4 h-4 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                      Facebook
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(product.name)}`} target="_blank" rel="noopener noreferrer" onClick={() => setShowShare(false)} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 transition-colors">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                      X (Twitter)
                    </a>
                    <button onClick={handleInstagramShare} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 w-full transition-colors">
                      <svg className="w-4 h-4 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                      Instagram
                    </button>
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <button onClick={handleCopyLink} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 text-gray-700 w-full transition-colors">
                        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        {copiedTarget === 'link' ? 'Copied!' : 'Copy Link'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-10 h-0.5 rounded-full mb-4" style={{ backgroundColor: ACCENT }} />
          </div>

          {/* Two-column: specs (left) | images stacked (right) */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

            {/* LEFT — Product details in bold label : value format */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-6 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                <h2 className="text-lg font-extrabold" style={{ color: FONT }}>Product Details</h2>
              </div>

              <div className="space-y-3 mb-7">

                {/* Specs (Business Type, Brand Name, Material, Shape, etc.) */}
                {product.specs && product.specs
                  .filter(s => ![
                    'Business Type', 'Brand Name', 'Shape', 'Color',
                    'Application', 'Size', 'Type', 'Country of Origin',
                    'Condition', 'Product Code'
                  ].includes(s.label))
                  .map((s) => (
                  <div key={s.label} className="flex items-start text-sm">
                    <span className="font-bold uppercase tracking-wide flex-shrink-0 w-52 leading-snug" style={{ color: FONT }}>{s.label}</span>
                    <span className="flex-shrink-0 font-medium mx-2" style={{ color: GRAY }}>:</span>
                    <span className="font-medium leading-snug" style={{ color: GRAY }}>{s.value}</span>
                  </div>
                ))}
                {/* Remaining product details */}
                {product.details
                  .filter(d => ![
                    'Business Type', 'Brand Name', 'Shape', 'Color',
                    'Application', 'Size', 'Type', 'Country of Origin',
                    'Condition', 'Product Code'
                  ].includes(d.label))
                  .map((d) => (
                  <div key={d.label} className="flex items-start text-sm">
                    <span className="font-bold uppercase tracking-wide flex-shrink-0 w-52 leading-snug" style={{ color: FONT }}>{d.label}</span>
                    <span className="flex-shrink-0 font-medium mx-2" style={{ color: GRAY }}>:</span>
                    <span className="font-medium leading-snug" style={{ color: GRAY }}>{d.value}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              {product.description && (
                <div className="rounded-r-xl p-5 border-l-4 mb-7" style={{ backgroundColor: '#EEF3FA', borderLeftColor: PRIMARY }}>
                  <p className="text-sm leading-relaxed text-gray-700">{product.description}</p>
                </div>
              )}

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={openModal}
                  className="flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-lg transition-opacity hover:opacity-90 text-white"
                  style={{ backgroundColor: PRIMARY }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get Best Price
                </button>
              </div>

            </div>

            {/* RIGHT — Images */}
            <div className="lg:w-[480px] flex-shrink-0">
              <div className="flex flex-col gap-4">
                {/* Main image — unique framed structure */}
                {images[0] && (
                  <div className="relative">
                    {/* Decorative offset shadow block */}
                    <div
                      className="absolute inset-0 rounded-2xl translate-x-3 translate-y-3"
                      style={{ backgroundColor: PRIMARY + '22', zIndex: 0 }}
                    />
                    {/* Accent top-left corner bar */}
                    <div
                      className="absolute -top-2 -left-2 w-12 h-12 rounded-tl-2xl border-t-4 border-l-4 z-10"
                      style={{ borderColor: PRIMARY }}
                    />
                    {/* Accent bottom-right corner bar */}
                    <div
                      className="absolute -bottom-2 -right-2 w-12 h-12 rounded-br-2xl border-b-4 border-r-4 z-10"
                      style={{ borderColor: ACCENT }}
                    />
                    {/* Image container */}
                    <div
                      className="relative z-[1] rounded-2xl overflow-hidden border-2 shadow-xl"
                      style={{ backgroundColor: '#EEF3FA', borderColor: '#C5D6F0' }}
                    >
                      <img 
                        src={images[0]} 
                        alt={product.name} 
                        className="w-full h-auto object-cover" 
                        onError={(e) => { e.target.src = placeholderImg }}
                      />

                    </div>
                  </div>
                )}
                {/* Thumbnail strip */}
                {images.length > 1 && (
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {images.slice(1).map((img, i, arr) => (
                      <div
                        key={i + 1}
                        className={`rounded-xl overflow-hidden aspect-square border-2 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer ${arr.length % 2 !== 0 && i === arr.length - 1 ? 'col-span-2' : ''}`}
                        style={{ backgroundColor: '#EEF3FA', borderColor: '#C5D6F0' }}
                        onClick={() => setActiveImg(i + 1)}
                      >
                        <img 
                          src={img || placeholderImg} 
                          alt={product.name} 
                          className="w-full h-full object-cover" 
                          onError={(e) => { e.target.src = placeholderImg }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* ── Related products ── */}
        {related.length > 0 && (
          <div className="border-t border-gray-100 bg-[#EEF3FA]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ backgroundColor: ACCENT }} />
                  <h2 className="text-2xl font-bold text-gray-900">Explore More Products</h2>
                </div>
                <div className="h-px flex-1 bg-gray-200 ml-8 hidden sm:block" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    to={`/products/${p.categorySlug}/${p.slug}`}
                    className="group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="h-36 w-full rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-105" style={{ backgroundColor: '#F8FAFC' }}>
                      <img 
                        src={p.image || placeholderImg} 
                        alt={p.name} 
                        className="h-24 w-auto object-contain" 
                        onError={(e) => { e.target.src = placeholderImg }}
                      />
                    </div>
                    <h3 className="text-[14px] text-center font-bold text-gray-900 mb-6 leading-tight flex-1 line-clamp-2">
                      {p.name}
                    </h3>
                    <span
                      className="text-[12px] font-bold px-6 py-2.5 rounded-lg w-full text-center text-white transition-all duration-300 shadow-md group-hover:shadow-lg active:scale-95"
                      style={{ backgroundColor: PRIMARY }}
                    >
                      View Details
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>



      {/* ── Sticky inquiry bar ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 border-t shadow-2xl transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ backgroundColor: FONT, borderTopColor: PRIMARY + '60' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
          <div className="flex-1 min-w-0 hidden sm:block">
            <p className="text-white text-sm font-semibold truncate">{product.name}</p>

          </div>
          <div className="flex items-center gap-3 ml-auto">
            <a
              href={`https://wa.me/919825156800?text=${encodeURIComponent(`Hello! I'm interested in ${product.name}. Please share more details and pricing.`)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#00A650' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp
            </a>
            <button
              onClick={openModal}
              className="text-white text-sm font-semibold px-5 py-2 rounded-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: PRIMARY }}
            >
              Get Best Price
            </button>
          </div>
        </div>
      </div>

      {/* ── Quick Quote Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col sm:flex-row">
              {/* Left – product info */}
              <div className="sm:w-48 border-r border-gray-200 p-4 flex flex-col items-center justify-center gap-3" style={{ backgroundColor: '#EEF3FA' }}>
                <p className="text-sm font-semibold text-center leading-snug" style={{ color: FONT }}>{product.name}</p>
                <div className="w-28 h-28 flex items-center justify-center">
                  <img 
                    src={product.image || placeholderImg} 
                    alt={product.name} 
                    className="h-24 w-auto object-contain" 
                    onError={(e) => { e.target.src = placeholderImg }}
                  />
                </div>

              </div>
              {/* Right – form */}
              <div className="flex-1 flex flex-col">
                <div className="flex items-center justify-between px-5 py-3" style={{ backgroundColor: FONT }}>
                  <h3 className="text-white font-bold text-base">Get a Quick Quote</h3>
                  <button onClick={closeModal} className="text-white/70 hover:text-white w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <form onSubmit={handleModalSubmit} noValidate className="p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs mb-1 block" style={{ color: GRAY }}>Quantity <span style={{ color: ACCENT }}>*</span></label>
                      <input name="quantity" value={modalForm.quantity} onChange={handleModalChange} placeholder="Quantity" className={fieldCls(modalErrors.quantity)} />
                      {modalErrors.quantity && <p className="mt-1 text-xs text-red-500">{modalErrors.quantity}</p>}
                    </div>
                    <div>
                      <label className="text-xs mb-1 block" style={{ color: GRAY }}>Unit</label>
                      <div className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-gray-50" style={{ color: GRAY }}>{modalForm.unit}</div>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs mb-1 block" style={{ color: GRAY }}>Mobile No. <span style={{ color: ACCENT }}>*</span></label>
                    <div className="flex gap-2">
                      <select className="border border-gray-200 rounded-lg px-2 py-2.5 text-sm focus:outline-none bg-white">
                        <option>IN +91</option>
                      </select>
                      <div className="flex-1">
                        <input name="mobile" value={modalForm.mobile} onChange={handleModalChange} placeholder="Enter Mobile No." className={fieldCls(modalErrors.mobile)} />
                        {modalErrors.mobile && <p className="mt-1 text-xs text-red-500">{modalErrors.mobile}</p>}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs mb-1 block" style={{ color: GRAY }}>Email <span className="text-gray-400 font-normal">(Optional)</span></label>
                    <input name="email" type="email" value={modalForm.email} onChange={handleModalChange} placeholder="Enter Email Address" className={fieldCls(modalErrors.email)} />
                    {modalErrors.email && <p className="mt-1 text-xs text-red-500">{modalErrors.email}</p>}
                  </div>
                  <button type="submit" className="w-full text-white text-sm font-semibold py-3 rounded-lg transition-opacity hover:opacity-90" style={{ backgroundColor: PRIMARY }}>
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
