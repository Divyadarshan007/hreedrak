import { Link } from 'react-router-dom'
import Navbar from '../../../components/Navbar/Navbar'
import Footer from '../../../components/Footer/Footer'
import { getProductsByCategory } from '../../../data/products'

const nonVacuumProducts = getProductsByCategory('non-vacuum-blood-collection-tubes')


const NonVacuumBloodCollectionTubes = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-blue-50 border-b border-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 mb-3">
            HREEDRAK BIOSCIENCE PRIVATE LIMITED
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Non Vacuum Blood Collection Tubes</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-[#1D4ED8] transition-colors">Home</Link>
            <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 font-medium">Non Vacuum Blood Collection Tubes</span>
          </nav>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">

        <p className="text-gray-400 text-sm mb-6">Showing all {nonVacuumProducts.length} results</p>

        {/* Product List */}
        <div className="space-y-6">
          {nonVacuumProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row">

                {/* Image column */}
                <div className="sm:w-52 lg:w-64 flex-shrink-0 bg-gray-50 flex items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-gray-100">
                  <img src={product.image} alt={product.name} className="h-44 w-auto mx-auto object-contain" />
                </div>

                {/* Content column */}
                <div className="flex-1 p-6 flex flex-col">

                  {/* Header */}
                  <div className="mb-4">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">
                      Non Vacuum Blood Collection Tubes
                    </p>
                    <h2 className="text-lg font-bold text-gray-800 leading-snug mb-2">
                      {product.name}
                    </h2>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-primary font-bold text-base">
                        {product.price} <span className="text-gray-400 font-normal text-xs">/ Piece</span>
                      </span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        MOQ: {product.moq}
                      </span>
                    </div>
                  </div>

                  {/* Specs table */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 mb-5 flex-1">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="flex gap-2 text-sm">
                        <span className="text-gray-500 min-w-[120px] flex-shrink-0">{spec.label}</span>
                        <span className="text-gray-400 flex-shrink-0">:</span>
                        <span className="text-gray-700 font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Read More */}
                  <div>
                    <Link
                      to={`/products/${product.categorySlug}/${product.slug}`}
                      className="inline-block bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-6 py-2 rounded transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default NonVacuumBloodCollectionTubes
