import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-[#231F20] text-white" id="footer">
      {/* Multicolor top strip */}
      <div className="h-1 flex">
        <div className="flex-1 bg-[#034DA2]" />
        <div className="flex-1 bg-[#231F20]" />
        <div className="flex-1 bg-[#ED1B24]" />
        <div className="flex-1 bg-[#FDB813]" />
        <div className="flex-1 bg-[#00A650]" />
        <div className="flex-1 bg-[#993F97]" />
        <div className="flex-1 bg-[#6D6E72]" />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8"
      >
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
              Having experience for more than 10 years, we are manufacturers, exporters & wholesalers of CDSCO-certified blood collection tubes — serving diagnostic labs and hospitals worldwide from Surat, Gujarat, India.
            </p>
          </div>

          {/* Col 2: Products */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider text-[#FDB813]">Products</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Vacuum Blood Collection Tube', href: '/products/vacuum-blood-collection-tubes' },
                { label: '⁠Non-vacuum Safety Cap Blood Collection Tube', href: '/products/non-vacuum-blood-collection-tubes' },
                { label: 'Non-vacuum Single Cap Blood Collection Tube', href: '/products/single-cap-blood-collection-tubes' },
                { label: 'Polystyrene Disposable ESR Pipette', href: '/products/polystyrene-disposable-esr-pipette/polystyrene-disposable-esr-pipette' },
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
                { label: 'Download Catalogue', href: '/catalogue', target: '_blank' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 text-sm hover:text-[#034DA2] transition-colors"
                    target={link.target}
                    rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                  >
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
                  <a href="mailto:info@hreedrak.com" className="text-gray-300 text-sm hover:text-[#FDB813] transition-colors">
                    info@hreedrak.com
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
                  <a href="tel:+919825156800" className="text-gray-300 text-sm hover:text-[#00A650] transition-colors">
                    +91 98251 56800
                  </a>
                </div>
              </div>
              <div className="w-full h-32 rounded-lg overflow-hidden border border-[#ED1B24]/40 mt-2">
                <iframe
                  title="Hreedrak Bioscience Private Limited Location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d281.244077196072!2d72.74164002261436!3d21.190139662766473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDExJzI0LjYiTiA3MsKwNDQnMzAuNSJF!5e1!3m2!1sen!2sin!4v1774951045242!5m2!1sen!2sin"
                  className="w-full h-full border-0 opacity-70"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </motion.div>

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
