import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, GitCommit, GitPullRequest, ArrowUpRight } from 'lucide-react';

const codeSnippets = {
  'deploy.sh': `git commit -m "feat(core): optimize rendering engine for 60fps"
[main 4f1a2b3] feat(core): optimize rendering...
 2 files changed, 145 insertions(+), 23 deletions(-)
$ npm run deploy
Deploying to production... SUCCESS!`,

  'useFetch.ts': `const useFetch = <T>(url: string): State<T> => {
  const [state, dispatch] = useReducer(reducer, initial);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => dispatch({ type: 'success', data }));
  }, [url]);
  return state;
};`,

  'tailwind.config.ts': `export default {
  theme: {
    extend: {
      colors: {
        primary: '#004ac6',
        surface: '#f8f9ff',
      },
      animation: {
        'text-gradient': 'gradient 6s ease infinite',
      }
    }
  }
};`,

  'query.graphql': `query GetFeaturedProjects {
  projects(limit: 2, order: DESC) {
    id
    title
    description
    tags
    image { url }
  }
}`
};

const GithubShowcase = () => {
  const [activeTab, setActiveTab] = useState('deploy.sh');
  const [terminalText, setTerminalText] = useState('');
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let i = 0;
    setTerminalText('');
    const fullText = codeSnippets[activeTab];
    
    const interval = setInterval(() => {
      setTerminalText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 15);
    
    return () => clearInterval(interval);
  }, [isInView, activeTab]);

  const generateContributionGrid = () => {
    const weeks = 40;
    const days = 7;
    const grid = [];
    
    for (let i = 0; i < days; i++) {
      const row = [];
      for (let j = 0; j < weeks; j++) {
        const isWeekday = i > 0 && i < 6;
        const intensity = isWeekday ? Math.random() : Math.random() * 0.5;
        let level = 0;
        
        if (intensity > 0.8) level = 4;
        else if (intensity > 0.6) level = 3;
        else if (intensity > 0.4) level = 2;
        else if (intensity > 0.2) level = 1;
        
        row.push(level);
      }
      grid.push(row);
    }
    return grid;
  };

  const contributionGrid = React.useMemo(() => generateContributionGrid(), []);

  const getColorClass = (level) => {
    switch(level) {
      case 4: return 'bg-[#39d353] shadow-[0_0_8px_rgba(57,211,83,0.6)]';
      case 3: return 'bg-[#26a641]';
      case 2: return 'bg-[#006d32]';
      case 1: return 'bg-[#0e4429]';
      default: return 'bg-[#161b22]';
    }
  };

  return (
    <section className="bg-[#0d1117] py-[100px] overflow-hidden relative" ref={containerRef}>
      {/* Dark mode background decoration */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full mix-blend-screen filter blur-[120px] animate-pulse duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-fixed rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/3 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 text-white mb-6 shadow-glow-blue"
            >
              <Code2 className="w-6 h-6" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-bold text-3xl md:text-4xl text-white mb-4"
            >
              Code That Speaks
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm text-white/70 mb-8 leading-relaxed"
            >
              We believe in transparency and open-source contributions. Our engineering culture is built on continuous shipping and relentless refactoring.
            </motion.p>
            
            <motion.a 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="https://github.com/vertexworks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-fixed hover:text-white transition-colors text-xs bg-white/5 px-4 py-2 rounded border border-white/10 hover:border-primary-fixed hover:bg-white/10"
            >
              View GitHub Profile <ArrowUpRight className="w-4 h-4 ml-1" />
            </motion.a>
          </div>

          <div className="w-full lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-xl p-[1px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-secondary to-primary-container opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-text-gradient bg-[length:200%_auto]"></div>
              
              <div className="bg-[#010409] rounded-xl p-6 relative z-10 h-full w-full">
                
                {/* Interactive Terminal */}
                <div className="mb-6 font-mono-sm text-[#8b949e] bg-[#161b22] rounded-lg border border-[#30363d] h-52 overflow-hidden shadow-inner flex flex-col">
                   {/* Terminal Header */}
                   <div className="bg-[#161b22]/50 border-b border-[#30363d]/50 px-4 py-2 flex items-center justify-between gap-1.5">
                     <div className="flex gap-1.5">
                       <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                       <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                       <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                     </div>
                     {/* Tabs */}
                     <div className="flex gap-2">
                       {Object.keys(codeSnippets).map((tab) => (
                         <button
                           key={tab}
                           onClick={() => setActiveTab(tab)}
                           className={`px-2.5 py-1 rounded text-xs transition-colors ${activeTab === tab ? 'bg-white/10 text-white font-medium border border-white/10' : 'text-[#8b949e] hover:text-white border border-transparent'}`}
                         >
                           {tab}
                         </button>
                       ))}
                     </div>
                   </div>
                   {/* Terminal Screen */}
                   <div className="p-4 whitespace-pre text-[12px] leading-relaxed flex-1 overflow-y-auto hide-scrollbar text-left font-mono">
                     {terminalText}
                     <span className="inline-block w-2 h-4 bg-primary-fixed ml-1 animate-pulse align-middle"></span>
                   </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-container to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      V
                    </div>
                    <div>
                      <h4 className="text-[#c9d1d9] font-semibold font-body-md text-left">Vertex Works</h4>
                      <p className="text-[#8b949e] text-sm font-mono-sm text-left">@vertexworks</p>
                    </div>
                  </div>
                  <div className="hidden md:flex gap-4">
                    <div className="flex items-center gap-2 text-[#8b949e] text-sm">
                      <GitCommit className="w-4 h-4" /> 1,248
                    </div>
                    <div className="flex items-center gap-2 text-[#8b949e] text-sm">
                      <GitPullRequest className="w-4 h-4" /> 342
                    </div>
                  </div>
                </div>

                {/* Contribution Graph */}
                <div className="overflow-x-auto pb-4 hide-scrollbar cursor-crosshair">
                  <div className="flex flex-col gap-1 min-w-[700px]">
                    {contributionGrid.map((row, i) => (
                      <div key={i} className="flex gap-1">
                        {row.map((level, j) => (
                          <motion.div 
                            key={`${i}-${j}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "50px" }}
                            transition={{ duration: 0.3, delay: (j * 0.01) + (i * 0.04) }}
                            className={`w-[11px] h-[11px] rounded-[2px] transition-transform hover:scale-150 z-10 ${getColorClass(level)}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4 text-xs text-[#8b949e] font-mono-sm">
                  <span>Learn how we build scalable systems</span>
                  <div className="flex items-center gap-2">
                    <span>Less</span>
                    <div className="flex gap-1">
                      <div className="w-[11px] h-[11px] rounded-[2px] bg-[#161b22]"></div>
                      <div className="w-[11px] h-[11px] rounded-[2px] bg-[#0e4429]"></div>
                      <div className="w-[11px] h-[11px] rounded-[2px] bg-[#006d32]"></div>
                      <div className="w-[11px] h-[11px] rounded-[2px] bg-[#26a641]"></div>
                      <div className="w-[11px] h-[11px] rounded-[2px] bg-[#39d353]"></div>
                    </div>
                    <span>More</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubShowcase;
