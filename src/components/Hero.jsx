import React from 'react';
import { ArrowRight, Code, Database, Layout } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[700px] flex items-center px-gutter pt-32 pb-12 md:pb-20 overflow-hidden bg-grid">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-fixed-dim rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="flex flex-col items-start text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/50 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
            <span className="font-label-md text-label-md text-primary tracking-wide">ACCEPTING NEW PROJECTS FOR Q3</span>
          </div>

          <h1 className="font-display-lg-mobile text-4xl md:text-6xl text-on-surface max-w-2xl tracking-tight mb-6">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-secondary to-primary-container animate-text-gradient bg-[length:200%_auto]">Digital Excellence</span>
          </h1>
          
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            We engineer premium frontend solutions and modern software architecture for teams that demand precision, performance, and uncompromising quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#projects" className="btn btn-primary w-full sm:w-auto group relative overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]">
              <span className="relative z-10 flex items-center">
                View Our Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="#contact" className="btn btn-secondary w-full sm:w-auto group transition-all hover:scale-[1.02] active:scale-[0.98]">
              Book a Discovery Call
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="relative lg:ml-auto w-full max-w-[600px] mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-fixed to-secondary-fixed opacity-50 dark:opacity-30 blur-2xl rounded-2xl animate-pulse duration-1000"></div>
          
          <div className="relative z-10 w-full aspect-video rounded-xl shadow-ambient-blue border border-outline-variant/20 bg-surface/80 backdrop-blur-md overflow-hidden flex flex-col">
             <div className="h-8 bg-surface-container-low border-b border-outline-variant/30 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-outline-variant/50"></div>
                <div className="w-3 h-3 rounded-full bg-outline-variant/50"></div>
                <div className="w-3 h-3 rounded-full bg-outline-variant/50"></div>
             </div>
             <div className="flex-1 w-full p-8 bg-surface-container-lowest/50 flex flex-col items-center justify-center font-mono-sm text-outline relative overflow-hidden">
                
                {/* Floating glass badges */}
                <motion.div 
                  className="absolute top-6 left-6 bg-white/60 dark:bg-black/60 backdrop-blur border border-white/40 dark:border-white/10 px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2 text-primary"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Code className="w-4 h-4" /> <span>React.js</span>
                </motion.div>

                <motion.div 
                  className="absolute bottom-10 right-6 bg-white/60 dark:bg-black/60 backdrop-blur border border-white/40 dark:border-white/10 px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2 text-primary"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Database className="w-4 h-4" /> <span>GraphQL</span>
                </motion.div>

                <motion.div 
                  className="absolute top-1/2 -right-4 bg-white/60 dark:bg-black/60 backdrop-blur border border-white/40 dark:border-white/10 px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-2 text-primary"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Layout className="w-4 h-4" /> <span>Tailwind</span>
                </motion.div>

                <div className="text-center z-10 bg-white/80 dark:bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-outline-variant/20 dark:border-white/10 shadow-sm">
                  <div className="text-primary-container font-semibold mb-1">// Vertex Works Engine</div>
                  <div className="animate-pulse">Architecture initialized...</div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
