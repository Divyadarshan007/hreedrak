import { motion } from 'framer-motion'

const Partner = () => {
  return (
    <section id="partner" className="overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2"
      >

        {/* Left panel — Dark */}
        <div className="bg-[#231F20] px-8 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#FDB813]" />
            <p className="text-[#FDB813] text-xs font-bold uppercase tracking-[0.3em]">JOIN WITH US</p>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight">
            Partner With Us<br />
            For Quality<br />
            Healthcare Solutions
          </h2>
        </div>

        {/* Right panel — Light */}
        <div className="bg-[#EEF3FA] px-8 sm:px-12 lg:px-16 py-16 lg:py-20 flex flex-col justify-center">
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-8 max-w-lg">
            We invite partners who share our passion for quality and excellence to collaborate.
            Together, we can bring specialized solutions to laboratories and healthcare providers,
            ensuring safe and efficient sample handling across the industry. Partner with Hreedrak Bioscience to
            drive healthcare solutions that truly make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#FDB813] hover:bg-[#e0a810] text-[#231F20] font-semibold px-7 py-3 rounded transition-colors">
              Contact Us
            </button>
            <button className="bg-[#034DA2] hover:bg-[#023585] text-white font-semibold px-7 py-3 rounded transition-colors">
              Learn More
            </button>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Partner
