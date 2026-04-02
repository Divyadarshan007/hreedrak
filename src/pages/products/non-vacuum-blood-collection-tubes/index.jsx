import { Link } from 'react-router-dom'
import { getProductsByCategory } from '../../../data/products'
import ProductCard from '../../../components/Products/ProductCard'

const nonVacuumProducts = getProductsByCategory('non-vacuum-blood-collection-tubes')


const NonVacuumBloodCollectionTubes = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Hero Banner */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #034DA2 0%, #023585 55%, #231F20 100%)' }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" style={{ backgroundColor: '#ffffff07' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center relative">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-2" style={{ color: '#A8C4E8' }}>
            HREEDRAK BIOSCIENCE PRIVATE LIMITED
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">Non Vacuum Blood Collection Tubes</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-900 font-semibold uppercase tracking-wider">Non Vacuum Blood Collection Tubes</span>
          </nav>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Collection</h2>
            <p className="text-gray-500 font-medium tracking-wide italic">Showing all {nonVacuumProducts.length} high-quality results</p>
          </div>
          <div className="h-1 w-20 bg-primary rounded-full hidden md:block" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nonVacuumProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default NonVacuumBloodCollectionTubes
