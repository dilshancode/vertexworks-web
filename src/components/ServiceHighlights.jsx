import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Database, LayoutTemplate, Terminal } from 'lucide-react';

const services = [
  {
    title: 'Frontend Engineering',
    description: 'High-performance React applications built with modern architectures and pristine code quality.',
    icon: <MonitorSmartphone className="w-6 h-6 text-primary" />
  },
  {
    title: 'Design Systems',
    description: 'Scalable and highly reusable component libraries tailored to your brand identity.',
    icon: <LayoutTemplate className="w-6 h-6 text-primary" />
  },
  {
    title: 'Backend Integration',
    description: 'Seamless API integration and state management for complex data-driven applications.',
    icon: <Database className="w-6 h-6 text-primary" />
  },
  {
    title: 'Platform Modernization',
    description: 'Upgrading legacy codebases to modern stacks without disrupting business operations.',
    icon: <Terminal className="w-6 h-6 text-primary" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const ServiceCard = ({ service }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div 
      ref={divRef}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative overflow-hidden bg-surface rounded-xl p-8 border border-outline-variant/30 transition-colors duration-300 group hover:border-primary-container/30"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(37, 99, 235, 0.08), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-surface-container-low rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-outline-variant/20 group-hover:border-primary/20">
          {service.icon}
        </div>
        <h3 className="font-semibold text-lg text-on-surface mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

const ServiceHighlights = () => {
  return (
    <section id="services" className="pt-[80px] md:pt-[120px] pb-[40px] md:pb-[60px] bg-surface-container-lowest">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-bold text-3xl md:text-4xl text-on-surface mb-4">
            Digital Capabilities
          </h2>
          <p className="font-body-md text-on-surface-variant text-base">
            Specialized in crafting pixel-perfect interfaces and robust client-side architectures for forward-thinking brands.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
