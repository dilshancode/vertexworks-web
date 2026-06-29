import React from 'react';

const techs = [
  { name: 'React', color: 'text-[#00d8ff] border-[#00d8ff]/20 bg-[#00d8ff]/5' },
  { name: 'TypeScript', color: 'text-[#3178c6] border-[#3178c6]/20 bg-[#3178c6]/5' },
  { name: 'Tailwind CSS', color: 'text-[#38bdf8] border-[#38bdf8]/20 bg-[#38bdf8]/5' },
  { name: 'Next.js', color: 'text-on-surface border-outline-variant/30 bg-surface-container-low' },
  { name: 'GraphQL', color: 'text-[#e10098] border-[#e10098]/20 bg-[#e10098]/5' },
  { name: 'Vite', color: 'text-[#646cff] border-[#646cff]/20 bg-[#646cff]/5' },
  { name: 'Node.js', color: 'text-[#339933] border-[#339933]/20 bg-[#339933]/5' },
  { name: 'Framer Motion', color: 'text-[#f81ce5] border-[#f81ce5]/20 bg-[#f81ce5]/5' }
];

const TechMarquee = () => {
  return (
    <div className="w-full bg-surface border-y border-outline-variant/20 py-8 overflow-hidden">
      <div className="marquee max-w-full">
        <div className="marquee-content gap-12">
          {techs.map((tech, idx) => (
            <div 
              key={`tech-orig-${idx}`}
              className={`flex items-center gap-3 px-6 py-2 rounded-full border text-sm font-semibold tracking-wide ${tech.color}`}
            >
              <span className="w-2 h-2 rounded-full bg-current"></span>
              {tech.name}
            </div>
          ))}
        </div>
        <div className="marquee-content gap-12" aria-hidden="true">
          {techs.map((tech, idx) => (
            <div 
              key={`tech-dup-${idx}`}
              className={`flex items-center gap-3 px-6 py-2 rounded-full border text-sm font-semibold tracking-wide ${tech.color}`}
            >
              <span className="w-2 h-2 rounded-full bg-current"></span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechMarquee;
