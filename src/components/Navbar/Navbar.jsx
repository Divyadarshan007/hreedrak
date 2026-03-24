import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const [certificateOpen, setCertificateOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const closeTimer = useRef(null)
  const certCloseTimer = useRef(null)
  const moreCloseTimer = useRef(null)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const handleProductsEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setProductsOpen(true)
  }

  const handleProductsLeave = () => {
    closeTimer.current = setTimeout(() => {
      setProductsOpen(false)
      setHoveredCategory(null)
    }, 150)
  }

  const handleCertificateEnter = () => {
    if (certCloseTimer.current) clearTimeout(certCloseTimer.current)
    setCertificateOpen(true)
  }

  const handleCertificateLeave = () => {
    certCloseTimer.current = setTimeout(() => setCertificateOpen(false), 150)
  }

  const handleMoreEnter = () => {
    if (moreCloseTimer.current) clearTimeout(moreCloseTimer.current)
    setMoreOpen(true)
  }

  const handleMoreLeave = () => {
    moreCloseTimer.current = setTimeout(() => setMoreOpen(false), 150)
  }

  const certificateItems = [
    { name: 'CE Certificate', href: '/certificates/hreedrak-bioscience-pvt-ltd-ce-1.pdf', download: 'CE-Certificate.pdf' },
    { name: 'ISO 9001-2015', href: '/certificates/iso-9001.pdf', download: 'ISO-9001-2015.pdf' },
    { name: 'ISO 13485-2016', href: '/certificates/iso-13485-2016.pdf', download: 'ISO-13485-2016.pdf' },
  ]

  const moreItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Request a Quote', href: '/request-quote' },
    { name: 'Download Catalogue', href: '/catalogue' },
  ]

  const productCategories = [
    {
      name: 'Vacuum Blood Collection Tubes',
      href: '/products/vacuum-blood-collection-tubes',
      subItems: [
        { name: 'Clot Activator Vacuum Blood Collection Tube', href: '/products/vacuum-blood-collection-tubes' },
        { name: 'Fluoride Vacuum Blood Collection Tube', href: '/products/vacuum-blood-collection-tubes' },
        { name: 'K2 EDTA Vacuum Blood Collection Tube', href: '/products/vacuum-blood-collection-tubes' },
        { name: 'K3 EDTA Vacuum Blood Collection Tube', href: '/products/vacuum-blood-collection-tubes' },
        { name: 'Plain Serum Vacuum Blood Collection Tube', href: '/products/vacuum-blood-collection-tubes' },
      ],
    },
    {
      name: 'Non Vacuum Blood Collection Tubes',
      href: '/products/non-vacuum-blood-collection-tubes',
      subItems: [
        { name: 'Blood Collection Flouride Tube with Double Safety Caps', href: '/products/non-vacuum-blood-collection-tubes' },
        { name: 'Clot Activator Non Vacuum Blood Collection Tube', href: '/products/non-vacuum-blood-collection-tubes' },
        { name: 'K2 EDTA Safety Cap Blood Collection Tube', href: '/products/non-vacuum-blood-collection-tubes' },
        { name: 'K3 EDTA Safety Cap Blood Collection Tube', href: '/products/non-vacuum-blood-collection-tubes' },
        { name: 'Plain Non Vacuum Blood Collection Tube', href: '/products/non-vacuum-blood-collection-tubes' },
      ],
    },
    {
      name: 'Single Cap Blood Collection Tubes',
      href: '/products/single-cap-blood-collection-tubes',
      subItems: [
        { name: 'Clot Activator Single Cap Blood Collection Tube', href: '/products/single-cap-blood-collection-tubes' },
        { name: 'Fluoride Single Cap Blood Collection Tube', href: '/products/single-cap-blood-collection-tubes' },
        { name: 'K2 EDTA Non Vacuum Blood Collection Tube', href: '/products/single-cap-blood-collection-tubes' },
        { name: 'K3 EDTA Single Cap Non Vacuum Blood Collection Tube', href: '/products/single-cap-blood-collection-tubes' },
        { name: 'Plain Serum Blood Collection Tube', href: '/products/single-cap-blood-collection-tubes' },
      ],
    },
    {
      name: 'Polystyrene Disposable ESR Pipette',
      href: '/products/polystyrene-disposable-esr-pipette/polystyrene-disposable-esr-pipette',
      subItems: [],
    },
  ]

  const navLinkClass = (path) =>
    `text-sm font-medium transition-colors pb-0.5 ${
      isActive(path)
        ? 'text-[#0F172A] border-b-2 border-[#1D4ED8]'
        : 'text-gray-600 hover:text-[#0F172A]'
    }`

  return (
    <nav className="bg-white border-b border-[#BFDBFE] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/">
            <img src="/12577-comp-image.png" alt="Hreedrak Bioscience" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link to="/" className={navLinkClass('/')}>
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleProductsEnter}
              onMouseLeave={handleProductsLeave}
            >
              <button className="text-gray-600 hover:text-[#0F172A] text-sm font-medium flex items-center gap-1 transition-colors">
                Products
                <svg className="w-3 h-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {productsOpen && <div className="absolute top-full left-0 w-full h-2" />}
              {productsOpen && (
                <div className="absolute top-full left-0 pt-2 flex shadow-xl rounded-lg z-50 border border-gray-100 mt-0">
                  <div className="bg-white rounded-l-lg py-2 min-w-[260px]">
                    {productCategories.map((cat) => (
                      <div
                        key={cat.name}
                        className={`flex items-center justify-between px-4 py-3 text-sm font-medium cursor-pointer transition-colors ${hoveredCategory === cat.name ? 'bg-[#1D4ED8] text-white' : 'text-[#0F172A] hover:bg-[#EFF6FF]'}`}
                        onMouseEnter={() => setHoveredCategory(cat.name)}
                      >
                        <Link to={cat.href} className="flex-1" onClick={() => setProductsOpen(false)}>
                          {cat.name}
                        </Link>
                        {cat.subItems.length > 0 && (
                          <svg className="w-3 h-3 ml-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                  {hoveredCategory && productCategories.find(c => c.name === hoveredCategory)?.subItems.length > 0 && (
                    <div className="bg-white border-l border-gray-100 rounded-r-lg py-2 min-w-[260px]">
                      {productCategories.find(c => c.name === hoveredCategory).subItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-3 text-sm text-[#0F172A] hover:bg-[#EFF6FF] transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <Link to="/oem-services" className={navLinkClass('/oem-services')}>
              OEM Services for Blood Collection Tubes
            </Link>

            {/* Our Certificate Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleCertificateEnter}
              onMouseLeave={handleCertificateLeave}
            >
              <Link to="/certificates" className={`${navLinkClass('/certificates')} flex items-center gap-1`}>
                Our Certificate
                <svg className="w-3 h-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              {certificateOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg border border-gray-100 py-2 min-w-[200px] z-50">
                  <Link
                    to="/certificates"
                    className="block px-4 py-3 text-sm font-semibold text-[#1D4ED8] hover:bg-[#EFF6FF] transition-colors border-b border-gray-100"
                    onClick={() => setCertificateOpen(false)}
                  >
                    View All Certificates
                  </Link>
                  {certificateItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      download={item.download}
                      className="block px-4 py-3 text-sm text-[#0F172A] hover:bg-[#EFF6FF] transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMoreEnter}
              onMouseLeave={handleMoreLeave}
            >
              <button className="text-gray-600 hover:text-[#0F172A] text-sm font-medium flex items-center gap-1 transition-colors">
                More
                <svg className="w-3 h-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-xl rounded-lg border border-gray-100 py-2 min-w-[180px] z-50">
                  {moreItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-3 text-sm text-[#0F172A] hover:bg-[#EFF6FF] transition-colors"
                      onClick={() => setMoreOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-[#0F172A] hover:text-[#1D4ED8] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#BFDBFE] py-4 space-y-1">
            <Link to="/" className="block py-2 px-3 text-sm text-gray-700 hover:text-[#0F172A] hover:bg-[#EFF6FF] rounded transition-colors" onClick={() => setMobileOpen(false)}>Home</Link>
            {/* Mobile Products Accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2 px-3 text-sm text-gray-700 hover:text-[#0F172A] hover:bg-[#EFF6FF] rounded transition-colors"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                <span>Products</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileProductsOpen && (
                <div className="ml-3 mt-1 space-y-1 border-l-2 border-[#BFDBFE] pl-3">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.href}
                      to={cat.href}
                      className="block py-2 px-2 text-sm text-gray-600 hover:text-[#1D4ED8] hover:bg-[#EFF6FF] rounded transition-colors"
                      onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/oem-services" className="block py-2 px-3 text-sm text-gray-700 hover:text-[#0F172A] hover:bg-[#EFF6FF] rounded transition-colors" onClick={() => setMobileOpen(false)}>OEM Services</Link>
            <Link to="/certificates" className="block py-2 px-3 text-sm text-gray-700 hover:text-[#0F172A] hover:bg-[#EFF6FF] rounded transition-colors" onClick={() => setMobileOpen(false)}>Our Certificates</Link>
            {moreItems.map((item) => (
              <Link key={item.name} to={item.href} className="block py-2 px-3 text-sm text-gray-700 hover:text-[#0F172A] hover:bg-[#EFF6FF] rounded transition-colors" onClick={() => setMobileOpen(false)}>{item.name}</Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
