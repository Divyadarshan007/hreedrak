import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const certImages = [
  { src: '/certificates/ce.png', alt: 'CE Certification' },
  { src: '/certificates/iso-9001.png', alt: 'ISO 9001 Certification' },
  { src: '/certificates/iso-13485.png', alt: 'ISO 13485 Certification' },
  { src: '/certificates/make-in-india.png', alt: 'Make in India' },
  { src: '/certificates/cdsco.png', alt: 'CDSCO' },
  { src: '/certificates/swach-bharat.png', alt: 'Swach Bharat' },
]

const Certifications = () => {
  const ref = useScrollAnimation()
  return (
    <section className="bg-white py-12" id="certifications">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
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
      </div>
    </section>
  )
}

export default Certifications
