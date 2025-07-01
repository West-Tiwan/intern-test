const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white text-center">
                Dr. Serena Blake
              </h3>
              <p className="text-emerald-200 text-xs sm:text-sm text-center">PsyD, Licensed Clinical Psychologist</p>
            </div>
            <p className="text-emerald-100 mb-4 sm:mb-6 leading-relaxed max-w-md text-center text-sm sm:text-base">
              Providing compassionate, evidence-based therapy for individuals and couples in Los Angeles.
              Your journey toward healing and growth starts here.
            </p>
          </div>
          {/* Contact Info */}
          <div className="md:col-span-2 flex flex-col justify-start items-center">
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Get In Touch</h4>
            <div className="space-y-3 sm:space-y-4 w-full max-w-sm">
              <div className="flex items-start group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-700 rounded-lg flex items-center justify-center mr-2 sm:mr-3 mt-0.5 group-hover:bg-emerald-600 transition-colors flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-emerald-100 text-xs sm:text-sm font-medium">Office</p>
                  <a
                    href="https://maps.google.com/?q=1287+Maplewood+Drive,+Los+Angeles,+CA+90026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-white transition-colors text-xs sm:text-sm leading-relaxed break-words"
                  >
                    1287 Maplewood Drive, Los Angeles, CA 90026
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-700 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-emerald-600 transition-colors flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-emerald-100 text-xs sm:text-sm font-medium">Phone</p>
                  <a
                    href="tel:+13235550192"
                    className="text-emerald-200 hover:text-white transition-colors text-xs sm:text-sm"
                  >
                    (323) 555-0192
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-700 rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-emerald-600 transition-colors flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-emerald-100 text-xs sm:text-sm font-medium">Email</p>
                  <a
                    href="mailto:serena@blakepsychology.com?subject=Therapy Consultation Request"
                    className="text-emerald-200 hover:text-white transition-colors text-xs sm:text-sm break-all sm:break-normal"
                  >
                    serena@blakepsychology.com
                  </a>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-emerald-700/50 rounded-lg">
                <h5 className="font-semibold mb-2 sm:mb-3 text-white text-xs sm:text-sm">Office Hours</h5>
                <div className="text-emerald-200 text-xs sm:text-sm space-y-1 sm:space-y-2">
                  <div className="flex justify-between items-center">
                    <span>In-person:</span>
                    <span className="font-medium text-right">Tue & Thu, 10 AM–6 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Virtual:</span>
                    <span className="font-medium text-right">Mon, Wed & Fri, 1 PM–5 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-emerald-200 text-xs sm:text-sm">
                © 2025 Dr. Serena Blake, PsyD. All rights reserved.
              </p>
              <p className="text-emerald-300 text-xs mt-1">
                Licensed Clinical Psychologist • CA License #PSY12345
              </p>
            </div>
            <div className="text-emerald-300 text-xs text-center md:text-right">
              <p>This website is for informational purposes only and does not constitute medical advice.</p>
              <p className="mt-1">In case of emergency, please call 911 or go to your nearest emergency room.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
