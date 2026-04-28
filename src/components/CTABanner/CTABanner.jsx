import { motion } from 'framer-motion'

const CTABanner = () => {
  return (
    <section className="bg-[#ED1B24] py-20 relative overflow-hidden">

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Diagonal accent bars */}
      <div
        className="absolute top-0 left-0 bottom-0 w-24 border-r border-white/20"
        style={{ transform: 'skewX(-12deg) translateX(-20%)' }}
      />
      <div
        className="absolute top-0 right-0 bottom-0 w-24 border-l border-white/20"
        style={{ transform: 'skewX(-12deg) translateX(20%)' }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >

        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-0.5 bg-[#FDB813]" />
          <p className="text-[#FDB813] text-xs font-bold uppercase tracking-[0.3em]">QUALITY ASSURED</p>
          <div className="w-8 h-0.5 bg-[#FDB813]" />
        </div>

        <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-snug mb-10">
          Our products consist of all aspects of the international materials guidelines!
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/919825156800?text=Hello! I'm interested in Hreedrak Bioscience products. Please share more details and pricing."
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-[#231F20] hover:bg-black text-white font-semibold px-10 py-3.5 rounded transition-colors"
          >
            Submit an Inquiry
          </a>
          <button className="bg-[#FDB813] hover:bg-[#e0a810] text-[#231F20] font-semibold px-10 py-3.5 rounded transition-colors">
            View Products
          </button>
        </div>

      </motion.div>
    </section>
  )
}

export default CTABanner
