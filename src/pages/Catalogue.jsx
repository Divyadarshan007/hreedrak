import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { allProducts } from '../data/products'

const categories = [
  'Vacuum Blood Collection Tubes',
  'Non Vacuum Blood Collection Tubes',
  'Single Cap Blood Collection Tubes',
]

const Catalogue = () => {
  const grouped = categories.map((cat) => ({
    name: cat,
    products: allProducts.filter((p) => p.categoryName === cat || p.categoryName.replace(' ', ' ') === cat),
  }))

  return (
    <>
      <div className="no-print">
        <Navbar />
      </div>

      <main className="min-h-screen bg-white">

        {/* Hero Banner — hidden during print */}
        <div className="no-print bg-blue-50 border-b border-blue-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 mb-3">
              HREEDRAK BIOSCIENCE PRIVATE LIMITED
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Product Catalogue</h1>
          </div>
        </div>

        {/* Breadcrumb + Download button — hidden during print */}
        <div className="no-print bg-gray-50 border-b border-gray-100 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
            <nav className="flex items-center gap-2 text-xs text-gray-500">
              <Link to="/" className="hover:text-[#1D4ED8] transition-colors">Home</Link>
              <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-medium">Product Catalogue</span>
            </nav>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 bg-[#1D4ED8] hover:bg-[#1E3A8A] text-white text-xs font-semibold px-4 py-2 rounded transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>

        {/* Print-only header */}
        <div className="hidden print:block px-8 py-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-extrabold text-black">Hreedrak Bioscience Private Limited</h1>
              <p className="text-sm text-gray-600 mt-1">166, First Floor, SITP-1, RJD Park, Ichchhapor, Surat, Gujarat – 394510</p>
              <p className="text-sm text-gray-600">Phone: 08048116653 | Email: hreedrakbioscience@gmail.com</p>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p className="font-bold text-black">Product Catalogue</p>
              <p>www.jadkohealthcare.com</p>
            </div>
          </div>
        </div>

        {/* Catalogue content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 print-container">
          {grouped.map((group) => (
            <div key={group.name} className="mb-12 print:mb-8 print:break-inside-avoid-page">
              <h2 className="text-xl font-extrabold text-[#0F172A] mb-4 pb-2 border-b-2 border-[#1D4ED8] print:text-lg">
                {group.name}
              </h2>
              {/* Mobile card view */}
              <div className="sm:hidden space-y-3">
                {group.products.map((product, i) => {
                  const size = product.details?.find((d) => d.label === 'Size')?.value || '—'
                  const material = product.specs?.find((s) => s.label === 'Material')?.value || '—'
                  return (
                    <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-contain rounded border border-gray-100 bg-gray-50 flex-shrink-0"
                        />
                        <Link
                          to={`/products/${product.categorySlug}/${product.slug}`}
                          className="font-semibold text-[#0F172A] hover:text-[#1D4ED8] transition-colors text-sm leading-snug"
                        >
                          {product.name}
                        </Link>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                        <div>
                          <span className="text-gray-400 uppercase tracking-wide">Material</span>
                          <p className="text-gray-700 font-medium mt-0.5">{material}</p>
                        </div>
                        <div>
                          <span className="text-gray-400 uppercase tracking-wide">Size</span>
                          <p className="text-gray-700 font-medium mt-0.5">{size}</p>
                        </div>
                        <div>
                          <span className="text-gray-400 uppercase tracking-wide">Price / Unit</span>
                          <p className="text-[#0F172A] font-semibold mt-0.5">{product.price}</p>
                        </div>
                        <div>
                          <span className="text-gray-400 uppercase tracking-wide">MOQ</span>
                          <p className="text-gray-700 font-medium mt-0.5">{product.moq}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Desktop table view */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#0F172A] print:bg-gray-100">
                      <th className="text-left px-4 py-3 text-white print:text-black font-semibold text-xs uppercase tracking-wide w-8">#</th>
                      <th className="text-left px-4 py-3 text-white print:text-black font-semibold text-xs uppercase tracking-wide">Product Name</th>
                      <th className="text-left px-4 py-3 text-white print:text-black font-semibold text-xs uppercase tracking-wide">Material</th>
                      <th className="text-left px-4 py-3 text-white print:text-black font-semibold text-xs uppercase tracking-wide">Size</th>
                      <th className="text-left px-4 py-3 text-white print:text-black font-semibold text-xs uppercase tracking-wide">Price / Unit</th>
                      <th className="text-left px-4 py-3 text-white print:text-black font-semibold text-xs uppercase tracking-wide">MOQ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.products.map((product, i) => {
                      const size = product.details?.find((d) => d.label === 'Size')?.value || '—'
                      const material = product.specs?.find((s) => s.label === 'Material')?.value || '—'
                      return (
                        <tr key={product.id} className={i % 2 === 0 ? 'bg-white' : 'bg-[#EFF6FF] print:bg-gray-50'}>
                          <td className="px-4 py-3 text-gray-400 text-xs">{i + 1}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-10 h-10 object-contain rounded border border-gray-100 bg-gray-50 flex-shrink-0 no-print"
                              />
                              <div>
                                <Link
                                  to={`/products/${product.categorySlug}/${product.slug}`}
                                  className="font-medium text-[#0F172A] hover:text-[#1D4ED8] transition-colors no-print"
                                >
                                  {product.name}
                                </Link>
                                <span className="hidden print:block font-medium text-black">{product.name}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-gray-600">{material}</td>
                          <td className="px-4 py-3 text-gray-600">{size}</td>
                          <td className="px-4 py-3 font-semibold text-[#0F172A]">{product.price}</td>
                          <td className="px-4 py-3 text-gray-600">{product.moq}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {/* Footer note */}
          <div className="mt-8 border-t border-gray-200 pt-6 text-sm text-gray-500">
            <p><strong className="text-[#0F172A]">Note:</strong> Prices are indicative and subject to order quantity, packaging, and delivery terms. Contact us for final pricing and availability.</p>
            <p className="mt-2">All products are manufactured in an ISO 7 Clean Room facility | CDSCO Certified | CE Marked | ISO 9001:2015 | ISO 13485:2016</p>
          </div>
        </div>

      </main>

      <div className="no-print">
        <Footer />
      </div>
    </>
  )
}

export default Catalogue
