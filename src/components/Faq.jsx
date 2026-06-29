import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "For a comprehensive web application or enterprise landing page, our engagements typically range from 8 to 12 weeks. This includes discovery, design system creation, frontend engineering, and QA. We provide a detailed sprint schedule before project kickoff."
  },
  {
    question: "Do you integrate with existing backend systems?",
    answer: "Absolutely. We specialize in building decoupled frontend architectures that consume RESTful APIs, GraphQL endpoints, or headless CMS platforms. We routinely integrate with legacy backends to modernize the user experience."
  },
  {
    question: "How do you ensure code quality and maintainability?",
    answer: "Our 'Digital Craftsmanship' philosophy enforces strict ESLint configurations, mandatory TypeScript usage for type safety, automated unit testing, and rigorous peer code reviews. We deliver code that your internal team will love to read and extend."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes. We offer retainer agreements for continuous feature development, performance monitoring, and technical maintenance. We function as an embedded extension of your engineering team."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="pt-[40px] md:pt-[60px] pb-[40px] md:pb-[60px] bg-surface">
      <div className="container-custom max-w-[900px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-on-surface mb-4">
            Common Inquiries
          </h2>
          <p className="text-base text-on-surface-variant">
            Technical and operational details about partnering with Vertex Works.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border border-outline-variant/30 rounded-lg overflow-hidden transition-colors duration-300 ${openIndex === idx ? 'bg-surface-container-low border-primary-container/30' : 'bg-surface-container-lowest hover:border-outline-variant'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span className="font-semibold text-base text-on-surface">
                  {faq.question}
                </span>
                <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-primary-container text-white' : 'bg-surface-container text-on-surface-variant'}`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-0 text-sm text-on-surface-variant leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
