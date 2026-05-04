import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const closeTimer = useRef(null)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const handleProductsEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setProductsOpen(true)
  }
  const handleProductsLeave = () => {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 180)
  }
  const moreItems = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Request a Quote', href: '/request-quote' },
    { name: 'Download Catalogue', href: '/catalogue', target: '_blank' },
  ]

  const productCategories = [
    {
      name: 'Vacuum Blood Collection Tube',
      href: '/products/vacuum-blood-collection-tubes',
      subItems: [
        { name: 'Clot Activator', href: '/products/vacuum-blood-collection-tubes/clot-activator-vacuum-blood-collection-tube' },
        { name: 'Sodium Fluoride', href: '/products/vacuum-blood-collection-tubes/sodium-fluoride-vacuum-blood-collection-tube' },
        { name: 'K2 EDTA', href: '/products/vacuum-blood-collection-tubes/k2-edta-vacuum-blood-collection-tube' },
        { name: 'K3 EDTA', href: '/products/vacuum-blood-collection-tubes/k3-edta-vacuum-blood-collection-tube' },
        { name: 'Plain Serum', href: '/products/vacuum-blood-collection-tubes/plain-serum-vacuum-blood-collection-tube' },
        { name: 'Gel + Clot Activator', href: '/products/vacuum-blood-collection-tubes/gel-plus-clot-activator-vacuum-blood-collection-tube'},
        { name: 'Gel Lithium Heparin', href: '/products/vacuum-blood-collection-tubes/gel-plus-clot-activator-vacuum-blood-collection-tube'},
        { name: 'Lithium Heparin', href: '/products/vacuum-blood-collection-tubes/gel-plus-clot-activator-vacuum-blood-collection-tube'},
        { name: 'Sodium Heparin', href: '/products/vacuum-blood-collection-tubes/gel-plus-clot-activator-vacuum-blood-collection-tube'},
        { name: 'Sodium Citrate 3.2', href: '/products/vacuum-blood-collection-tubes/gel-plus-clot-activator-vacuum-blood-collection-tube'},
        { name: 'Sodium Citrate 3.8', href: '/products/vacuum-blood-collection-tubes/gel-plus-clot-activator-vacuum-blood-collection-tube'},
      ],
    },
    {
      name: '⁠Non-vacuum Safety Cap Blood Collection Tube',
      href: '/products/non-vacuum-blood-collection-tubes',
      subItems: [
        { name: 'Clot Activator', href: '/products/non-vacuum-blood-collection-tubes/clot-activator-non-vacuum-blood-collection-tube' },
        { name: 'Sodium Fluoride', href: '/products/non-vacuum-blood-collection-tubes/sodium-fluoride-non-vacuum-blood-collection-tube' },
        { name: 'K2 EDTA', href: '/products/non-vacuum-blood-collection-tubes/k2-edta-non-vacuum-blood-collection-tube' },
        { name: 'K3 EDTA', href: '/products/non-vacuum-blood-collection-tubes/k3-edta-non-vacuum-blood-collection-tube' },
        { name: 'Plain Serum', href: '/products/non-vacuum-blood-collection-tubes/plain-non-vacuum-blood-collection-tube' },
        { name: 'Gel + Clot Activator', href: '/products/non-vacuum-blood-collection-tubes/gel-plus-clot-activator-non-vacuum-blood-collection-tube' },
        { name: 'Gel Lithium Heparin', href: '/products/non-vacuum-blood-collection-tubes/gel-plus-clot-activator-non-vacuum-blood-collection-tube' },
        { name: 'Lithium Heparin', href: '/products/non-vacuum-blood-collection-tubes/gel-plus-clot-activator-non-vacuum-blood-collection-tube' },
        { name: 'Sodium Heparin', href: '/products/non-vacuum-blood-collection-tubes/gel-plus-clot-activator-non-vacuum-blood-collection-tube' },
        { name: 'Sodium Citrate 3.2', href: '/products/non-vacuum-blood-collection-tubes/gel-plus-clot-activator-non-vacuum-blood-collection-tube' },
        { name: 'Sodium Citrate 3.8', href: '/products/non-vacuum-blood-collection-tubes/gel-plus-clot-activator-non-vacuum-blood-collection-tube' },
      ],
    },
    {
      name: 'Non-vacuum Single Cap Blood Collection Tube',
      href: '/products/single-cap-blood-collection-tubes',
      subItems: [
        { name: 'Clot Activator', href: '/products/single-cap-blood-collection-tubes/clot-activator-single-cap-blood-collection-tube' },
        { name: 'Sodium Fluoride', href: '/products/single-cap-blood-collection-tubes/sodium-fluoride-blood-collection-tube' },
        { name: 'K2 EDTA', href: '/products/single-cap-blood-collection-tubes/k2-edta-blood-collection-tube' },
        { name: 'K3 EDTA', href: '/products/single-cap-blood-collection-tubes/k3-edta-blood-collection-tube' },
        { name: 'Plain Serum', href: '/products/single-cap-blood-collection-tubes/plain-serum-blood-collection-tube' },
      ],
    },
    {
      name: 'Micro/ Pediatric Tube',
      href: '/products/micro-pediatric-tubes',
      subItems: [
        { name: 'Clot Activator', href: '/products/micro-pediatric-tubes/clot-activator-micro-pediatric-tube' },
        { name: 'K2 EDTA', href: '/products/micro-pediatric-tubes/k2-edta-micro-pediatric-tube' },
        { name: 'K3 EDTA', href: '/products/micro-pediatric-tubes/k3-edta-micro-pediatric-tube' },
      ],
    },
    {
      name: 'Polystyrene Disposable ESR Pipette',
      href: '/products/polystyrene-disposable-esr-pipette/polystyrene-disposable-esr-pipette',
      subItems: [],
    },
    {
      name: 'OEM Services for Blood Collection Tubes',
      href: '/oem-services',
      subItems: [],
    },
  ]

  const mainCategories = productCategories.filter(c => c.subItems.length > 0)
  const otherCategories = productCategories.filter(c => c.subItems.length === 0)

  const navLinkClass = (path) =>
    `text-base font-bold transition-colors pb-0.5 ${isActive(path)
      ? 'text-[#ED1B24] border-b-2 border-[#ED1B24]'
      : 'text-gray-600 hover:text-[#231F20]'
    }`

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">

      {/* ── 7-colour palette ribbon ── */}
      <div className="h-1 flex">
        <div className="flex-1 bg-[#034DA2]" />
        <div className="flex-1 bg-[#231F20]" />
        <div className="flex-1 bg-[#ED1B24]" />
        <div className="flex-1 bg-[#FDB813]" />
        <div className="flex-1 bg-[#00A650]" />
        <div className="flex-1 bg-[#993F97]" />
        <div className="flex-1 bg-[#6D6E72]" />
      </div>

      {/* ── Main nav bar ── */}
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/">
            <img src="/12577-comp-image.png" alt="Hreedrak Bioscience" className="h-14 w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link to="/" className={navLinkClass('/')}>Home</Link>

            {/* Products trigger — no relative needed, mega-menu lives at nav level */}
            <button
              className="text-gray-600 hover:text-[#231F20] text-base font-bold flex items-center gap-1 transition-colors"
              onMouseEnter={handleProductsEnter}
              onMouseLeave={handleProductsLeave}
            >
              Products
              <svg className={`w-3 h-3 mt-0.5 transition-transform duration-150 ${productsOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            <Link to="/about" className={navLinkClass('/about')}>About Us</Link>
            {moreItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={navLinkClass(item.href)}
                target={item.target}
                rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#231F20] hover:text-[#034DA2] transition-colors"
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

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-1">
            <Link to="/" className="block py-2 px-3 text-sm text-gray-700 hover:text-[#034DA2] hover:bg-[#EEF3FA] rounded transition-colors" onClick={() => setMobileOpen(false)}>Home</Link>

            {/* Mobile Products accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between py-2 px-3 text-sm text-gray-700 hover:bg-[#EEF3FA] rounded transition-colors"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                <span>Products</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileProductsOpen && (
                <div className="ml-3 mt-1 space-y-1 border-l-2 border-[#ED1B24] pl-3">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.href}
                      to={cat.href}
                      className="block py-2 px-2 text-sm text-gray-600 hover:text-[#034DA2] hover:bg-[#EEF3FA] rounded transition-colors"
                      onClick={() => { setMobileOpen(false); setMobileProductsOpen(false) }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="block py-2 px-3 text-sm text-gray-700 hover:text-[#034DA2] hover:bg-[#EEF3FA] rounded transition-colors" onClick={() => setMobileOpen(false)}>About Us</Link>
            {moreItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 px-3 text-sm text-gray-700 hover:text-[#034DA2] hover:bg-[#EEF3FA] rounded transition-colors"
                onClick={() => setMobileOpen(false)}
                target={item.target}
                rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* ── Products mega-menu ── full-width, never overflows ── */}
      {productsOpen && (
        <div
          className="bg-white border-t border-gray-100 shadow-xl"
          onMouseEnter={handleProductsEnter}
          onMouseLeave={handleProductsLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">

              {/* Three main category columns */}
              {mainCategories.map((cat) => (
                <div key={cat.name}>
                  <Link
                    to={cat.href}
                    className="block text-[16px] font-bold uppercase tracking-[0.15em] mb-3 hover:underline"
                    style={{ color: '#034DA2' }}
                    onClick={() => setProductsOpen(false)}
                  >
                    {cat.name}
                  </Link>
                  <ul className="space-y-2">
                    {cat.subItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          className="flex items-start gap-2 text-sm leading-snug transition-colors hover:text-[#034DA2]"
                          style={{ color: '#231F20' }}
                          onClick={() => setProductsOpen(false)}
                        >
                          <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#ED1B24' }} />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Fourth column: other products */}
              <div>
                <p className="text-[16px] font-bold uppercase tracking-[0.15em] mb-3" style={{ color: '#034DA2' }}>
                  More
                </p>
                {otherCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    to={cat.href}
                    className="flex items-start gap-2 text-sm leading-snug mb-3 transition-colors hover:text-[#034DA2]"
                    style={{ color: '#231F20' }}
                    onClick={() => setProductsOpen(false)}
                  >
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: '#ED1B24' }} />
                    {cat.name}
                  </Link>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}

    </nav>
  )
}

export default Navbar
