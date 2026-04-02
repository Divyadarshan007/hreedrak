import { useState, useEffect, useRef } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '150+', label: 'Happy Customers' },
  { value: '25+', label: 'Products' },
  { value: '100%', label: 'Made in India' },
]

const StatCounter = ({ end, label }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef(null)

  // Extract number and suffix
  const numericValue = parseInt(end.match(/\d+/)[0])
  const suffix = end.replace(/\d+/g, '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // easeOutExpo
      const easingProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

      setCount(Math.floor(easingProgress * numericValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, numericValue])

  return (
    <div ref={elementRef} className="flex flex-col items-center gap-2 px-8 py-6 justify-center">
      <span className="text-4xl lg:text-5xl font-bold text-white leading-none">
        {count}{suffix}
      </span>
      <span className="text-white font-semibold text-sm leading-tight text-center">{label}</span>
    </div>
  )
}

const WhyChooseUs = () => {
  const ref = useScrollAnimation()
  return (
    <section className="bg-[#034da2] py-10" id="why-us">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
          {stats.map((stat, i) => (
            <StatCounter key={i} end={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
