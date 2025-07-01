const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg"
                alt="Dr. Serena Blake"
                className="w-full h-64 sm:h-80 lg:h-[600px] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-emerald-900 mb-4 sm:mb-6 text-center lg:text-left">
                About Dr. Serena Blake
              </h2>
              <h3 className="text-lg sm:text-xl text-emerald-800 font-semibold mb-3 sm:mb-4 text-center lg:text-left">
                PsyD, Clinical Psychologist
              </h3>
              
              <div className="prose prose-sm sm:prose-lg text-gray-700 mb-6 sm:mb-8">
                <p className="mb-4 sm:mb-6 text-center lg:text-left">
                  Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                  with eight years of experience and over 500 client sessions. She blends evidence-based 
                  approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                  personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
                </p>
                <p className="text-center lg:text-left">
                  Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                  Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-1 sm:mb-2">8+</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-1 sm:mb-2">500+</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Client Sessions</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 sm:space-y-3 text-gray-700">
                <div className="flex items-center justify-center lg:justify-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <a 
                    href="https://maps.google.com/?q=1287+Maplewood+Drive,+Los+Angeles,+CA+90026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-800 transition-colors cursor-pointer text-sm sm:text-base text-center lg:text-left"
                  >
                    1287 Maplewood Drive, Los Angeles, CA 90026
                  </a>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a 
                    href="tel:+13235550192"
                    className="hover:text-emerald-800 transition-colors cursor-pointer text-sm sm:text-base"
                  >
                    (323) 555-0192
                  </a>
                </div>
                <div className="flex items-center justify-center lg:justify-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a 
                    href="mailto:serena@blakepsychology.com?subject=Therapy Consultation Request"
                    className="hover:text-emerald-800 transition-colors cursor-pointer text-sm sm:text-base break-all sm:break-normal"
                  >
                    serena@blakepsychology.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
