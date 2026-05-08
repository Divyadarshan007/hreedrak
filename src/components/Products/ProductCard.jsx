import { Link } from 'react-router-dom'

/**
 * ProductCard component for the product list grid.
 * Displays: Category, Product Name, Brand Name, and MOQ.
 * Optimized for a compact grid view.
 */
const ProductCard = ({ product }) => {
  // Extract Material from specs or use default
  const material = product.specs?.find(s => s.label === 'Material')?.value || 'PET/PP/PS'
  
  return (
    <Link 
      to={`/products/${product.categorySlug}/${product.slug}`}
      className="group block bg-[#F3F4F6] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Image Section - Shortened height for a more compact view */}
      <div className="aspect-[3/2] bg-white overflow-hidden flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section - Balanced spacing for a cleaner visual rhythm */}
      <div className="px-5 pt-5 pb-6 relative">
        <div className="mb-5">
          {/* Product Name - Stronger emphasis with clear line height */}
          <h3 className="text-[1.125rem] font-extrabold text-gray-900 leading-tight group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
        </div>

        {/* Material - Enhanced visibility with larger text */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-bold text-gray-800 leading-none">{material}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
