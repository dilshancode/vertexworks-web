import React from 'react';

const testimonials = [
  {
    quote: "Vertex Works delivered an architecture that scaled effortlessly during our Series B growth phase. Their attention to detail and design system expertise is unmatched in the agency space.",
    author: "Sarah Chen",
    role: "CTO, FinFlow Analytics",
    company: "FinFlow Analytics"
  },
  {
    quote: "The migration from our legacy monolith to a decoupled React frontend was seamless. They didn't just write code; they transformed our engineering culture.",
    author: "Marcus Rodriguez",
    role: "VP of Engineering, CloudScale",
    company: "CloudScale Inc."
  },
  {
    quote: "We needed a team that could move fast without breaking things. Vertex Works engineered a custom framework that cut our time-to-market by half.",
    author: "Elena Rostova",
    role: "Product Lead, Quantum Retail",
    company: "Quantum Retail"
  },
  {
    quote: "Their mastery of modern web technologies is profound. The user experience they built for our platform increased conversion rates by 40%.",
    author: "David Kim",
    role: "Founder, Apex Solutions",
    company: "Apex Solutions"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-[80px] md:pt-[120px] pb-[40px] md:pb-[60px] bg-surface-container-low overflow-hidden">
      <div className="container-custom relative z-10 mb-16">
        <div className="text-center">
          <h2 className="font-bold text-3xl md:text-4xl text-on-surface mb-4">
            Trusted by Engineering Leaders
          </h2>
        </div>
      </div>

      <div className="marquee w-full py-4">
        <div className="marquee-content">
          {testimonials.map((t, idx) => (
            <div 
              key={`orig-${idx}`}
              className="w-[350px] md:w-[450px] shrink-0 bg-surface p-8 md:p-10 rounded-2xl shadow-ambient-blue border border-outline-variant/20 relative transition-colors hover:border-primary-container/30"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 left-6 text-6xl text-primary-fixed/50 font-serif leading-none select-none pointer-events-none">
                "
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <p className="text-base text-on-surface-variant leading-relaxed mb-8 italic">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 bg-primary-fixed rounded-full flex items-center justify-center text-primary-fixed-variant font-bold text-lg">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-headline-md text-base font-semibold text-on-surface">
                      {t.author}
                    </h4>
                    <p className="font-body-sm text-sm text-on-surface-variant line-clamp-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {testimonials.map((t, idx) => (
            <div 
              key={`dup-${idx}`}
              className="w-[350px] md:w-[450px] shrink-0 bg-surface p-8 md:p-10 rounded-2xl shadow-ambient-blue border border-outline-variant/20 relative transition-colors hover:border-primary-container/30"
            >
              {/* Quote Mark */}
              <div className="absolute top-6 left-6 text-6xl text-primary-fixed/50 font-serif leading-none select-none pointer-events-none">
                "
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <p className="text-base text-on-surface-variant leading-relaxed mb-8 italic">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 bg-primary-fixed rounded-full flex items-center justify-center text-primary-fixed-variant font-bold text-lg">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-headline-md text-base font-semibold text-on-surface">
                      {t.author}
                    </h4>
                    <p className="font-body-sm text-sm text-on-surface-variant line-clamp-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
