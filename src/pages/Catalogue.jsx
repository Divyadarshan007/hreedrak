import { Link } from 'react-router-dom'
import { allProducts } from '../data/products'

const categories = [
  'Vacuum Blood Collection Tube',
  '⁠Non-vacuum Safety Cap Blood Collection Tube',
  'Non-vacuum Single Cap Blood Collection Tube',
  'Micro/ Pediatric Tube',
  'Polystyrene Disposable ESR Pipette',
]

const Catalogue = () => {
  const grouped = categories.map((cat) => ({
    name: cat,
    products: allProducts.filter((p) => p.categoryName === cat),
  }))

  const getAllFields = (product) => {
    return [...(product.specs || []), ...(product.details || [])]
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Action Bar — Hidden during print */}
      <div className="no-print bg-[#034DA2] py-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-white hover:text-blue-200 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-semibold">Back to Site</span>
            </Link>
          </div>
          <button
            onClick={() => window.print()}
            className="bg-white text-[#034DA2] hover:bg-blue-50 px-6 py-2.5 rounded-full font-bold shadow-md transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Catalogue (PDF)
          </button>
        </div>
      </div>

      {/* Print-only Corporate Header */}
      <div className="hidden print:block p-10 border-b-2 border-[#034DA2]">
        <div className="flex justify-between items-start">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black text-[#034DA2] leading-none mb-4 uppercase tracking-tighter">Hreedrak Bioscience</h1>
            <p className="text-sm font-bold text-gray-800 tracking-wide">PRIVATE LIMITED</p>
            <div className="mt-6 space-y-1 text-xs text-gray-600 font-medium">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#034DA2]"></span>
                166, First Floor, SITP-1, RJD Park, Ichchhapor, Surat, Gujarat – 394510
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#034DA2]"></span>
                Phone: +91 98251 56800 | Email: info@hreedrak.com
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#034DA2]"></span>
                Website: www.hreedrakbioscience.com
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="inline-block bg-[#034DA2] text-white px-6 py-3 rounded-bl-3xl">
              <h2 className="text-xl font-black uppercase tracking-widest">Product Catalogue</h2>
              <p className="text-[10px] text-blue-200 mt-1 font-bold">CERTIFIED MEDICAL SUPPLIES</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {grouped.map((group) => (
          <section key={group.name} className="mb-20 print:mb-0">
            {/* Category Heading */}
            <div className="relative mb-16 print:mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 border-l-8 border-[#034DA2] pl-6 py-2 uppercase tracking-tight print:text-2xl">
                {group.name}
              </h2>
              <div className="absolute -bottom-4 left-0 w-32 h-1.5 bg-[#034DA2]"></div>
            </div>

            <div className="space-y-24 print:space-y-0">
              {group.products.map((product, index) => {
                const fields = getAllFields(product)
                const isEven = index % 2 === 0

                return (
                  <div
                    key={product.id}
                    className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start print:flex-row print:gap-10 print:py-12 print:border-b print:border-gray-100 print:break-inside-avoid ${!isEven ? 'md:flex-row-reverse print:flex-row-reverse' : ''}`}
                  >
                    {/* Product Image */}
                    <div className="w-full md:w-auto flex justify-center print:w-[30%]">
                      <div className="relative group w-full max-w-72 aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm print:p-0 print:border-none print:shadow-none print:rounded-none">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Product Content */}
                    <div className="flex-1 print:w-[70%]">
                      <div className="border-b pb-4 mb-6 print:mb-4">
                        <h3 className="text-2xl font-extrabold text-[#231F20] print:text-xl">
                          {product.name}
                        </h3>
                        {product.price && (
                          <p className="mt-1 text-sm font-bold text-[#034DA2] print:text-[11px]">
                            Price: {product.price} / Piece
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 gap-y-3 mb-6">
                        {fields.map((field, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-4 text-sm">
                            <span className="w-44 font-black text-gray-900 uppercase tracking-tighter shrink-0 print:w-36 print:text-[11px]">
                              {field.label}
                            </span>
                            <span className="text-gray-400 font-bold shrink-0">:</span>
                            <span className="text-gray-700 font-medium leading-relaxed print:text-[11px]">
                              {field.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {product.description && (
                        <p className="text-sm text-gray-600 leading-relaxed border-t pt-4 print:text-[10px] print:pt-3">
                          {product.description}
                        </p>
                      )}

                      {/* Web-only view details link */}
                      <Link
                        to={`/products/${product.categorySlug}/${product.slug}`}
                        className="no-print inline-flex items-center gap-2 mt-6 text-[#034DA2] font-bold hover:gap-4 transition-all"
                      >
                        View More Details
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Page break after category in print if needed */}
            <div className="hidden print:block h-0 w-full mb-12 page-break-after"></div>
          </section>
        ))}
      </div>

      {/* Corporate Certification Footer Note */}
      <div className="bg-gray-50 border-t border-gray-100 py-12 px-6 print:bg-white print:border-none print:py-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-widest">Manufacturing Excellence</p>
              <p className="text-xs text-gray-600 leading-relaxed font-medium">
                All products are manufactured in an <strong className="text-[#034DA2]">ISO 7 Clean Room</strong> facility. 
                Our laboratory supplies are <strong className="text-[#034DA2]">CDSCO Certified</strong>, <strong className="text-[#034DA2]">CE Marked</strong>, 
                and compliant with <strong className="text-[#034DA2]">ISO 9001:2015</strong> & <strong className="text-[#034DA2]">ISO 13485:2016</strong> quality standards.
              </p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-[10px] text-gray-400 font-bold mb-1">DOWNLOADED FROM</p>
              <p className="text-lg font-black text-[#034DA2] tracking-tighter">WWW.HREEDRAKBIOSCIENCE.COM</p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body { background: white !important; -webkit-print-color-adjust: exact; }
          .page-break-after { page-break-after: always; }
          @page { margin: 1cm; size: A4; }
          h2 { border-color: #034DA2 !important; }
        }
      `}} />
    </main>
  )
}

export default Catalogue

