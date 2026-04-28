import { motion } from 'framer-motion'

const certImages = [
  { src: '/certificates/ce.png', alt: 'CE Certification' },
  { src: '/certificates/iso-9001.png', alt: 'ISO 9001 Certification' },
  { src: '/certificates/iso-13485.png', alt: 'ISO 13485 Certification' },
  { src: '/certificates/make-in-india.png', alt: 'Make in India' },
  { src: '/certificates/cdsco.png', alt: 'CDSCO' },
  { src: '/certificates/swach-bharat.png', alt: 'Swach Bharat' },
]

const Certifications = () => {
  return (
    <section className="bg-white py-12" id="certifications">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-wrap items-center justify-center gap-10">
          {certImages.map((cert, i) => (
            <img
              key={i}
              src={cert.src}
              alt={cert.alt}
              className="h-24 w-auto object-contain"
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certifications
