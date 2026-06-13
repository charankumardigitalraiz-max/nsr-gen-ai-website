import { useState, useEffect } from 'react'

const MOBILE_BANNER = '/banners/Frame 11 (7).png'

const DESKTOP_BANNERS = [
  {
    src: '/banners/Frame 7 (3).png',
    alt: 'NSR ProSkills Academy — GenAI training banner 1',
  },
  {
    src: '/banners/Frame 8 (1).png',
    alt: 'NSR ProSkills Academy — GenAI training banner 2',
  },
  {
    src: '/banners/Frame 9 (2).png',
    alt: 'NSR ProSkills Academy — GenAI training banner 3',
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % DESKTOP_BANNERS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="home-hero relative w-full overflow-hidden bg-white !py-0">
      {/* Mobile — single banner, natural height (1024×576 / 16:9) */}
      <div className="w-full px-4 pt-[calc(var(--site-nav-height)+0.75rem)] md:hidden">
        <img
          src={MOBILE_BANNER}
          alt="Become job-ready with Generative AI skills and real-world industry projects"
          className="block h-auto w-full"
          width={1024}
          height={576}
          loading="eager"
        />
      </div>

      {/* Desktop — full-screen carousel */}
      <div className="relative hidden min-h-screen w-full md:block md:h-screen">
        {DESKTOP_BANNERS.map((banner, index) => (
          <div
            key={banner.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={banner.src}
              alt={banner.alt}
              className="block h-full w-full object-cover object-center"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {DESKTOP_BANNERS.map((banner, index) => (
            <button
              key={banner.src}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeSlide ? 'w-8 bg-[#00a86b]' : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
