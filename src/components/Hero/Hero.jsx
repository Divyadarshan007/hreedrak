import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center min-h-[90vh] overflow-hidden bg-[#231F20]"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#231F20]/50 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8"
          >
            Advancing Diagnostics <br />
            <span className="text-[#FDB813]">Through Innovation</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl"
          >
            Precision-engineered blood collection systems designed for global healthcare standards and reliable patient outcomes.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Hero

