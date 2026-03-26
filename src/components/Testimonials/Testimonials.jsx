import { useState, useEffect, useCallback, useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const chips = [
  { quote: 'Top manufacturer of tailor-made items in the city, satisfactory output', name: 'Tushar Dhande', role: '', rating: 5 },
  { quote: 'The product I got designed from them is of finest quality', name: 'Rajinder Saini', role: '', rating: 5 },
  { quote: 'Incredible quality from these products from your company', name: 'Rahul', role: '', rating: 5 },
  { quote: 'Kudos to the team for delivering such an exceptional service. They truly care about their customers', name: 'Manoj Kumar', role: '', rating: 5 },
]

const GAP = 20 // px gap between cards
const CLONE = 2 // clones on each side

// Track layout: [...last2, ...all4, ...first2]
const track = [...chips.slice(-CLONE), ...chips, ...chips.slice(0, CLONE)]

const Stars = ({ count }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: count }).map((_, j) => (
      <svg key={j} className="w-3.5 h-3.5 text-[#FDB813]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const Testimonials = () => {
  const ref = useScrollAnimation()
  const containerRef = useRef(null)
  const [trackIndex, setTrackIndex] = useState(CLONE) // start at first real card
  const [animated, setAnimated] = useState(true)
  const [stepSize, setStepSize] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(2)

  // Measure card step size (card width + gap)
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth
        const mobile = window.innerWidth < 640
        const count = mobile ? 1 : 2
        setCardsPerView(count)
        setStepSize((w + GAP) / count)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const goNext = useCallback(() => {
    setAnimated(true)
    setTrackIndex((i) => i + 1)
  }, [])

  const goPrev = () => {
    setAnimated(true)
    setTrackIndex((i) => i - 1)
  }

  // After reaching a clone, silently jump to the real counterpart
  const handleTransitionEnd = useCallback(() => {
    if (trackIndex >= CLONE + chips.length) {
      setAnimated(false)
      setTrackIndex(CLONE)
    } else if (trackIndex < CLONE) {
      setAnimated(false)
      setTrackIndex(CLONE + chips.length - 1)
    }
  }, [trackIndex])

  // Re-enable animation after silent jump
  useEffect(() => {
    if (!animated) {
      const t = setTimeout(() => setAnimated(true), 50)
      return () => clearTimeout(t)
    }
  }, [animated])

  useEffect(() => {
    const timer = setInterval(goNext, 4000)
    return () => clearInterval(timer)
  }, [goNext])

  const realIndex = ((trackIndex - CLONE) % chips.length + chips.length) % chips.length
  const cardWidth = stepSize > 0 ? stepSize - GAP : 0

  return (
    <section id="testimonials">
      <div className="bg-[#EEF3FA] py-16 px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-5xl mx-auto animate-on-scroll">

          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#993F97]" />
            <p className="text-[#993F97] text-xs font-bold uppercase tracking-[0.3em]">TESTIMONIALS</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#231F20] mb-10">What Our Customers Say</h2>

          <div className="relative">
            {/* Viewport */}
            <div className="overflow-hidden" ref={containerRef}>
              {/* Sliding track */}
              <div
                className="flex"
                style={{
                  gap: `${GAP}px`,
                  transform: `translateX(-${trackIndex * stepSize}px)`,
                  transition: animated ? 'transform 500ms ease-in-out' : 'none',
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {track.map((chip, i) => (
                  <div
                    key={i}
                    style={{ width: cardWidth > 0 ? `${cardWidth}px` : cardsPerView === 1 ? 'calc(100%)' : 'calc(50% - 10px)', flexShrink: 0 }}
                    className="bg-white rounded-lg px-6 py-6 border-b-4 border-[#993F97] shadow-md"
                  >
                    <Stars count={chip.rating} />
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">"{chip.quote}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t border-[#A8C4E8]">
                      <div className="w-8 h-8 rounded-full bg-[#231F20] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {chip.name[0]}
                      </div>
                      <div>
                        <p className="text-[#231F20] text-xs font-bold">{chip.name}</p>
                        {chip.role && <p className="text-gray-400 text-[10px] mt-0.5">{chip.role}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev button */}
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#993F97]/40 shadow flex items-center justify-center text-[#993F97] hover:bg-[#993F97] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Next button */}
            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#993F97]/40 shadow flex items-center justify-center text-[#993F97] hover:bg-[#993F97] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {chips.map((_, i) => (
              <button
                key={i}
                onClick={() => { setAnimated(true); setTrackIndex(CLONE + i) }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === realIndex ? 'bg-[#993F97] w-5' : 'bg-[#993F97]/30'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
