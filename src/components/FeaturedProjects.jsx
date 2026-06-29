import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Dashboard',
    description: 'A high-performance analytics dashboard processing real-time financial data with complex state management.',
    tags: ['React', 'TypeScript', 'Zustand', 'Tailwind'],
    image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-400x300.svg',
    link: '#'
  },
  {
    title: 'Enterprise E-Commerce',
    description: 'Headless commerce architecture providing sub-second page loads and seamless checkout flows.',
    tags: ['Next.js', 'GraphQL', 'Framer Motion'],
    image: 'https://www.gstatic.com/labs-code/stitch/stitch-placeholder-400x300.svg',
    link: '#'
  }
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="pt-[40px] md:pt-[60px] pb-[80px] md:pb-[120px] bg-surface">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-bold text-3xl md:text-4xl text-on-surface mb-4">
              Featured Work
            </h2>
            <p className="text-base text-on-surface-variant">
              A selection of recent projects showcasing our commitment to technical excellence and user experience.
            </p>
          </div>
          <a href="#" className="btn btn-secondary whitespace-nowrap text-xs px-4 py-2">
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-6 bg-surface-container border border-outline-variant/20 aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-inverse-surface/0 group-hover:bg-inverse-surface/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white rounded-full p-4 shadow-lg">
                    <ArrowUpRight className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3.5 py-1 bg-surface-container-low text-primary font-medium text-[12px] rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="font-semibold text-xl text-on-surface mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
