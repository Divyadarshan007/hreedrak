import { useState, useEffect, useCallback, useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const testimonialsData = [
  {
    name: 'Jenish Patel',
    company: 'Creative Events',
    content: "Hreedrak's vacuum blood collection tubes have redefined our pre-analytical efficiency. Handling large-scale events is high-pressure, which is why we demand reliability in our specimen collection. Their tubes ensure high-quality samples and consistent results without any hemolysis issues even during our busiest seasons!",
    rating: 5,
    isFeatured: true,
    isActive: true,
    order: 0,
    mediaType: 'image',
    image: '/testimonial/images/jenish.PNG',
    video: '',
  },
  {
    name: 'Ram Mandloi',
    company: 'Reynak Opticals',
    content: "Precision in blood sampling is critical, and Hreedrak's vacuum collection systems are our gold standard. At Reynak Opticals, clarity and precision are everything. Their professional team provides clear, accurate solutions that have significantly improved our clinical workflows.",
    rating: 5,
    isFeatured: true,
    isActive: true,
    order: 1,
    mediaType: 'image',
    image: '/testimonial/images/ram.PNG',
    video: '',
  },
  {
    name: 'Ajay Mishra',
    company: 'Prime Patch Properties',
    content: "We trust Hreedrak's specialized vacuum systems for absolute sample integrity. Hreedrak helped us tackle diagnostics with their world-class blood collection tubes. Their products deliver exactly what they promised—real results and unmatched durability.",
    rating: 5,
    isFeatured: true,
    isActive: true,
    order: 2,
    mediaType: 'image',
    image: '/testimonial/images/ajay.PNG',
    video: '',
  },
  {
    name: 'Dr. Hitesh Chauhan',
    company: 'Lumive Aesthetics',
    content: "Hreedrak's vacuum tube technology ensures sample stability and reduces the need for re-draws. As a medical professional, I value precision and excellence. Hreedrak Bioscience combines advanced engineering to deliver world-class clinical results for every specimen.",
    rating: 5,
    isFeatured: true,
    isActive: true,
    order: 3,
    mediaType: 'image',
    image: '/testimonial/images/hitesh.PNG',
    video: '',
  },
  {
    name: 'Dhruv Dave',
    company: 'V-link Life Solutions',
    content: "The consistency of Hreedrak's blood collection tubes has made a noticeable difference in our operational confidence. Quality and care are at the heart of what we do, and I found the same at Hreedrak. Their advanced vacuum systems set a new benchmark for clinical standards.",
    rating: 5,
    isFeatured: true,
    isActive: true,
    order: 4,
    mediaType: 'image',
    image: '/testimonial/images/dhruv.PNG',
    video: '',
  },
  {
    name: 'Nikunj Mangukiya',
    company: 'Greenable Solar Solution',
    content: "Hreedrak’s high-quality blood collection tubes are invaluable for maintaining our high standards of health safety. Working in solar energy means valuing efficiency. Their expert guidance on specimen protection and their premium vacuum systems are truly top-tier.",
    rating: 5,
    isFeatured: true,
    isActive: true,
    order: 5,
    mediaType: 'image',
    image: '/testimonial/images/nikunj.PNG',
    video: '',
  },
  {
    name: 'Dr. Brijesha Chauhan',
    company: 'Radiance Hair & Skin Clinic & Academy',
    content: "I highly recommend Hreedrak for their state-of-the-art vacuum technology and durable collection systems. I understand the importance of quality in clinical diagnostics. Hreedrak sets a high benchmark for accuracy and consistent performance in complex laboratory environments.",
    rating: 5,
    isFeatured: true,
    isActive: true,
    order: 6,
    mediaType: 'image',
    image: '/testimonial/images/brijesha.PNG',
    video: '',
  },
  {
    name: 'Ad Niket Mehta',
    company: 'Mehta Wealth Portfolio Management',
    content: "Hreedrak's vacuum tubes are a worthy investment in our professional health and clinical confidence. Professionalism and long-term results are what I look for. Hreedrak applies the same philosophy to their blood collection systems, delivering reliability every time.",
    rating: 5,
    isFeatured: true,
    isActive: true,
    order: 7,
    mediaType: 'image',
    image: '/testimonial/images/niket.PNG',
    video: '',
  },
  {
    name: 'Mayank Soni',
    company: 'Bluebird Beverages',
    content: "Hreedrak delivers exceptional quality with their range of blood collection tubes and diagnostic consumables. Freshness and quality are our business, and that's exactly what Hreedrak provides. Their amazing technology makes every diagnostic phase a seamless experience.",
    rating: 5,
    isFeatured: true,
    isActive: true,
    order: 8,
    mediaType: 'image',
    image: '/testimonial/images/mayank.PNG',
    video: '',
  },
  {
    name: 'Kapil Singh',
    company: 'Zaploom Technologies',
    content: "Hreedrak’s use of the latest vacuum blood collection technology has completely redefined professional standards for us. At Zaploom, we love innovation. Their advanced systems and tube coatings are highly effective and world-class.",
    rating: 5,
    isFeatured: true,
    isActive: true,
    order: 9,
    mediaType: 'image',
    image: '/testimonial/images/KapilSuare.png',
    video: '',
  },
];

const GAP = 24 // px gap between cards
const CLONE = 3 // clones on each side

// Track layout: [...last2, ...all4, ...first2]
const track = [...testimonialsData.slice(-CLONE), ...testimonialsData, ...testimonialsData.slice(0, CLONE)]

const Stars = ({ count }) => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: 5 }).map((_, j) => (
      <svg key={j} className={`w-5 h-5 ${j < count ? 'text-[#FDB813]' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
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
        const width = window.innerWidth
        let count = 1
        if (width >= 1024) count = 3
        else if (width >= 640) count = 2
        else count = 1
        
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
    if (trackIndex >= CLONE + testimonialsData.length) {
      setAnimated(false)
      setTrackIndex(CLONE)
    } else if (trackIndex < CLONE) {
      setAnimated(false)
      setTrackIndex(CLONE + testimonialsData.length - 1)
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

  const realIndex = ((trackIndex - CLONE) % testimonialsData.length + testimonialsData.length) % testimonialsData.length
  const cardWidth = stepSize > 0 ? stepSize - GAP : 0

  return (
    <section id="testimonials">
      <div className="bg-[#EEF3FA] py-20 px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-7xl mx-auto animate-on-scroll">

          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#993F97]" />
              <p className="text-[#993F97] text-xs font-bold uppercase tracking-[0.3em]">TESTIMONIALS</p>
              <div className="w-8 h-0.5 bg-[#993F97]" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#231F20] leading-tight max-w-2xl">
              What Our Customers Say
            </h2>
          </div>

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
                {track.map((item, i) => {
                  const firstPeriod = item.content.indexOf('.');
                  const headline = firstPeriod !== -1 ? item.content.slice(0, firstPeriod + 1) : item.content;
                  
                  return (
                    <div
                      key={i}
                      style={{ 
                        width: cardWidth > 0 ? `${cardWidth}px` : cardsPerView === 1 ? 'calc(100%)' : `calc(${100/cardsPerView}% - ${GAP}px)`, 
                        flexShrink: 0 
                      }}
                      className="bg-white rounded-2xl px-8 py-8 border border-gray-100 shadow-sm flex flex-col"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border-2 border-green-50">
                          {item.image ? (
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random`;
                              }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-purple-100 text-[#993F97] font-bold">
                              {item.name[0]}
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="text-[#231F20] text-lg font-bold leading-tight">{item.name}</p>
                          <p className="text-gray-400 text-sm">{item.company}</p>
                        </div>
                      </div>

                      <Stars count={item.rating} />
                      
                      <div className="flex-grow">
                        <h3 className="text-[#231F20] text-xl font-bold leading-snug mb-3">
                          {headline}
                        </h3>
                        <p className="text-gray-500 text-base leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  )
                })}
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
          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => { setAnimated(true); setTrackIndex(CLONE + i) }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === realIndex ? 'bg-[#993F97] w-6' : 'bg-[#993F97]/30'}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
