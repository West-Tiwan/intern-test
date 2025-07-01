import { useEffect, useState } from 'react'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="flex w-full min-h-screen">
        {/* Left Side - Background Image (Hidden on mobile) */}
        <div className="relative w-1/2 overflow-hidden hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-emerald-900/30 z-10"></div>
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat will-change-transform"
            style={{
              backgroundImage: "url('https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg')",
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
        </div>

        {/* Right Side - Content (Full width on mobile) */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-emerald-800 to-emerald-900 flex items-center">
          <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-12 py-8 md:py-0">
            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-4 sm:mb-6 leading-tight">
                Professional Counseling for Healing and Growth
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl text-emerald-100 mb-6 sm:mb-8 leading-relaxed">
                Find peace, overcome challenges, and build stronger relationships with compassionate, 
                evidence-based therapy in Los Angeles.
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="bg-white hover:bg-emerald-100 text-emerald-800 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-300 text-center text-sm sm:text-base"
                >
                  Book a Free Consult
                </a>
                <a
                  href="#about"
                  className="border-2 border-white text-white hover:bg-white hover:text-emerald-800 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-300 text-center text-sm sm:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
