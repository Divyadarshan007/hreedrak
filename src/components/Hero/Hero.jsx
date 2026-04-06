import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
    '/Colorful-liquids-in-laboratory-test-tubes.png',
    '/Medical-innovation-in-action.png'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 6000) // Change image every 6 seconds
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[90vh] overflow-hidden bg-[#231F20]"
    >
      {/* Carousel Images */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt="Healthcare innovation background"
            className={`w-full h-full object-cover animate-kenburns`}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#231F20]/65 z-[1]" />

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'bg-[#FDB813] w-8'
                : 'bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Switch to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  )
}

export default Hero
