const Services = () => {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Learn effective coping strategies and evidence-based techniques to manage anxiety, reduce stress, and regain control over your daily life. Through personalized approaches, we'll work together to identify triggers and develop healthy response patterns.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Cognitive-behavioral techniques", "Mindfulness practices", "Stress reduction strategies", "Panic attack management"]
    },
    {
      title: "Relationship Counseling",
      description: "Strengthen your relationships through improved communication, conflict resolution, and deeper emotional connection. Whether you're working on romantic relationships, family dynamics, or friendships, we'll explore patterns and build healthier interactions.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Communication skills", "Conflict resolution", "Emotional intimacy", "Couples therapy"]
    },
    {
      title: "Trauma Recovery",
      description: "Navigate the healing process from traumatic experiences with compassionate support and proven therapeutic approaches. We'll work at your pace to process difficult experiences and develop resilience for moving forward with hope and strength.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["EMDR therapy", "Trauma-informed care", "PTSD treatment", "Healing support"]
    }
  ]

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 sm:mb-6">
            How I Can Help You
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized therapeutic services designed to support your unique journey toward healing, 
            growth, and lasting positive change.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12 sm:space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 sm:h-80 lg:h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="max-w-xl">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3 sm:mb-4 text-center lg:text-left">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-center lg:text-left">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 justify-center lg:justify-start">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-center lg:text-left">
                    <a
                      href="#contact"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors duration-300 inline-block text-sm sm:text-base"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mt-16 sm:mt-20 bg-gray-50 rounded-xl p-6 sm:p-8 md:p-12">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">
              Session Fees
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Transparent pricing for quality care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm text-center">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Individual Session</h4>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-2">$200</div>
              <p className="text-gray-600 text-sm sm:text-base">Per session</p>
            </div>
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm text-center">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Couples Session</h4>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-2">$240</div>
              <p className="text-gray-600 text-sm sm:text-base">Per session</p>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              <strong>Office Hours:</strong> In-person: Tue & Thu, 10 AM–6 PM | Virtual: Mon, Wed & Fri, 1 PM–5 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
