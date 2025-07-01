import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission. I provide detailed receipts with all necessary codes that you can submit to your insurance company for potential out-of-network reimbursement. Many clients find they receive partial reimbursement through their insurance plans."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom. I offer secure, HIPAA-compliant video sessions that provide the same quality of care as in-person meetings. Virtual sessions are available Monday, Wednesday, and Friday from 1 PM–5 PM, providing flexibility for busy schedules."
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required. If you need to cancel or reschedule your appointment, please provide at least 24 hours notice to avoid being charged for the session. I understand that emergencies happen, and we can discuss individual circumstances on a case-by-case basis."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Common questions about therapy sessions and my practice
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-emerald-700 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-sage-50 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Have More Questions?
          </h3>
          <p className="text-gray-700 mb-6">
            I'm here to help. Feel free to reach out with any questions about therapy, 
            my approach, or how we can work together.
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
