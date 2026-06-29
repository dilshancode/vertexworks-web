import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  {
    id: '01',
    title: 'Discovery & Architecture',
    description: 'We begin by deeply understanding your business constraints and technical requirements. Our architects map out the optimal data structures, component hierarchies, and deployment strategies before writing a single line of code.'
  },
  {
    id: '02',
    title: 'Design Systems Engineering',
    description: 'Translating brand guidelines into robust, accessible React component libraries. We establish the foundational design tokens (typography, spacing, colors) ensuring UI consistency across the entire application.'
  },
  {
    id: '03',
    title: 'Sprint Implementation',
    description: 'Agile development cycles with continuous integration. We build features incrementally, maintaining high test coverage and strict linting rules to guarantee pristine code quality and prevent technical debt.'
  },
  {
    id: '04',
    title: 'Performance & Handoff',
    description: 'Rigorous optimization phases focusing on Core Web Vitals, bundle size reduction, and render performance. The final deliverable includes comprehensive documentation and a seamless knowledge transfer to your team.'
  }
];

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="pt-[40px] md:pt-[60px] pb-[40px] md:pb-[60px] bg-surface-container-lowest bg-grid relative overflow-hidden" ref={containerRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-30 dark:opacity-20 -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/3">
            <div className="sticky top-32">
              <h2 className="font-bold text-3xl md:text-4xl text-on-surface mb-6">
                The Engine Room
              </h2>
              <p className="text-base text-on-surface-variant max-w-sm">
                Our methodology is engineered for predictability. We combine rigorous technical planning with agile execution to deliver complex software on time, every time.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 relative">
            {/* Scroll-linked vertical line */}
            <div className="absolute left-[19px] sm:left-[35px] top-0 bottom-0 w-[2px] bg-outline-variant/30 hidden sm:block"></div>
            <motion.div 
              className="absolute left-[19px] sm:left-[35px] top-0 w-[2px] bg-primary hidden sm:block" 
              style={{ height: lineHeight, originY: 0 }}
            />

            <div className="flex flex-col gap-12 sm:gap-20">
              {steps.map((step) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative group flex gap-6 sm:gap-12"
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-shrink-0 relative z-10 w-10 h-10 rounded-full bg-surface border-2 border-outline-variant/30 items-center justify-center group-hover:border-primary transition-colors duration-500 mt-1 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div>
                    <div className="font-mono-sm text-primary mb-2 text-sm">
                      Phase {step.id}
                    </div>
                    <h3 className="font-semibold text-lg text-on-surface mb-4">
                      {step.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed max-w-2xl bg-surface/50 backdrop-blur-sm p-6 rounded-xl border border-outline-variant/20 shadow-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
