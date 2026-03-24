import { useEffect, useRef } from 'react'

/**
 * Returns a ref to attach to any element.
 * Once the element enters the viewport, the class "is-visible" is added,
 * triggering the CSS fade-in/slide-up transition defined in index.css.
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el) // animate once
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
