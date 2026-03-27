const socialLinks = [
  {
    name: 'Facebook',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

const Footer = () => {
  return (
    <footer className="bg-[#231F20] text-white" id="footer">
      {/* Multicolor top strip */}
      <div className="h-1.5 flex">
        <div className="flex-1 bg-[#034DA2]" />
        <div className="flex-1 bg-[#231F20]" />
        <div className="flex-1 bg-[#ED1B24]" />
        <div className="flex-1 bg-[#FDB813]" />
        <div className="flex-1 bg-[#00A650]" />
        <div className="flex-1 bg-[#993F97]" />
        <div className="flex-1 bg-[#6D6E72]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Col 1: Logo + description + socials */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#034DA2] flex items-center justify-center text-white font-bold text-base flex-shrink-0">H</div>
              <div className="leading-tight">
                <p className="text-white font-extrabold text-lg tracking-wide leading-none">Hreedrak</p>
                <p className="text-[#A8C4E8] text-[9px] font-medium tracking-widest">BIOSCIENCE PVT LTD</p>
              </div>
            </a>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Established in 2024, we are manufacturers, exporters & wholesalers of CDSCO-certified blood collection tubes — serving diagnostic labs and hospitals worldwide from Surat, Gujarat, India.
            </p>
            <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-widest mb-3">Follow Us</p>
            <div className="flex gap-2 flex-wrap">
              {socialLinks.map((s) => {
                const brandColors = {
                  'Facebook': '#1877F2',
                  'X (Twitter)': '#000000',
                  'Instagram': '#E1306C',
                  'LinkedIn': '#0A66C2',
                  'YouTube': '#FF0000',
                }
                const c = brandColors[s.name] || '#555'
                return (
                  <a
                    key={s.name}
                    href="#"
                    title={s.name}
                    className="w-8 h-8 rounded flex items-center justify-center text-white transition-all hover:scale-110"
                    style={{ backgroundColor: c }}
                  >
                    {s.icon}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-[#FDB813]">Products</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Vacuum Blood Collection Tubes', href: '/products/vacuum-blood-collection-tubes' },
                { label: 'Non-Vacuum Blood Collection Tubes', href: '/products/non-vacuum-blood-collection-tubes' },
                { label: 'Single Cap Blood Collection Tubes', href: '/products/single-cap-blood-collection-tubes' },
                { label: 'ESR Pipettes', href: '#' },
                { label: 'OEM Services', href: '/oem-services' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 text-sm hover:text-[#034DA2] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-[#00A650]">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#' },
                { label: 'About Us', href: '#about' },
                { label: 'Our Products', href: '#products' },
                { label: 'Our Certificate', href: '/about' },
                { label: 'Request a Quote', href: '/request-quote' },
                { label: 'Download Catalogue', href: '/catalogue' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 text-sm hover:text-[#034DA2] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-[#ED1B24]">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#034DA2] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Email</p>
                  <a href="mailto:hreedrakbioscience@gmail.com" className="text-gray-300 text-sm hover:text-[#FDB813] transition-colors">
                    hreedrakbioscience@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#00A650] rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-xs mb-0.5">Phone</p>
                  <a href="tel:08048116653" className="text-gray-300 text-sm hover:text-[#00A650] transition-colors">
                    08048116653
                  </a>
                </div>
              </div>
              <div className="w-full h-32 rounded-lg overflow-hidden border border-[#ED1B24]/40 mt-2">
                <iframe
                  title="Hreedrak Bioscience Private Limited Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7440.021072628313!2d72.73207609357911!3d21.191740399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d1d75a725ed%3A0x8bd68c87184611a!2sRJD%20Integrated%20Textile%20Park%20Ltd!5e0!3m2!1sen!2sin!4v1774354704807!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale opacity-70"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#023585] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            <p className="text-gray-500 text-xs">
              All Rights Reserved.{' '}
              <span className="text-gray-300 font-bold">HREEDRAK BIOSCIENCE PRIVATE LIMITED</span>
            </p>
            <p className="text-gray-500 text-xs mt-0.5">
              Developed &amp; Managed By Zaploom Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
