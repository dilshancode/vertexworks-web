import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="contact" className="pt-[40px] md:pt-[80px] pb-[100px] md:pb-[140px] px-5">
      <div className="container-custom max-w-[1000px] mx-auto bg-gradient-to-br from-primary to-[#002060] rounded-2xl relative overflow-hidden border border-white/10 shadow-xl shadow-primary/5">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-[0.03] rounded-full mix-blend-overlay filter blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary opacity-30 rounded-full mix-blend-overlay filter blur-3xl -translate-x-1/4 translate-y-1/4"></div>
        
        <div className="relative z-10 px-8 py-16 md:py-24 md:px-20 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-tight mb-6 max-w-2xl">
            Ready to elevate your digital infrastructure?
          </h2>
          <p className="text-base text-blue-100/90 max-w-xl mb-10 leading-relaxed">
            Partner with Vertex Works to build scalable, high-performance applications that drive business growth and user engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="mailto:hello@vertexworks.com" className="btn bg-white text-primary-container hover:bg-surface-container-low w-full sm:w-auto group text-sm px-6 py-3.5">
              Start a Conversation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
