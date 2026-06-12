import { useState, useEffect } from 'react'

const BANNERS = [
  '/banners/Frame 7 (3).png',
  '/banners/Frame 8 (1).png'
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % BANNERS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full bg-white relative !py-0 !pt-0 !pb-0 overflow-hidden md:h-screen">
      {/* Banner Slides */}
      <div className="relative w-full h-full md:h-screen">
        {BANNERS.map((banner, index) => (
          <div
            key={banner}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <img
              src={banner}
              alt={`NSR ProSkills Academy Banner ${index + 1}`}
              className="w-full h-full object-cover block"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {BANNERS.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === activeSlide ? 'w-8 bg-[#00a86b]' : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
          />
        ))}
      </div>
    </div>
  )
}
