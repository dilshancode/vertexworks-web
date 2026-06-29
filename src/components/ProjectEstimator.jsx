import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Calculator, ArrowRight, Check } from 'lucide-react';

const projectTypes = [
  { id: 'landing', name: 'Landing Webpage', basePrice: 5000, baseWeeks: 4 },
  { id: 'saas', name: 'SaaS Frontend', basePrice: 12000, baseWeeks: 8 },
  { id: 'portal', name: 'Enterprise Portal', basePrice: 18000, baseWeeks: 10 }
];

const addonsList = [
  { id: 'animations', name: 'Advanced Framer Motion Animations', price: 1500, weeks: 1 },
  { id: 'cms', name: 'Headless CMS Integration', price: 2000, weeks: 2 },
  { id: 'auth', name: 'User Authentication & Roles', price: 1500, weeks: 1 },
  { id: 'payments', name: 'Stripe Payments Integration', price: 1800, weeks: 1 }
];

const ProjectEstimator = () => {
  const [selectedType, setSelectedType] = useState('landing');
  const [pagesCount, setPagesCount] = useState(5);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [estimate, setEstimate] = useState({ price: 0, weeks: 0 });

  useEffect(() => {
    const typeObj = projectTypes.find(t => t.id === selectedType);
    let totalPrice = typeObj.basePrice;
    let totalWeeks = typeObj.baseWeeks;

    // Page count multiplier for SaaS/Portal, additive for landing page
    if (selectedType === 'landing') {
      totalPrice += (pagesCount - 1) * 300;
    } else {
      totalPrice += (pagesCount - 5) * 500;
    }

    // Addons calculations
    selectedAddons.forEach(addonId => {
      const addon = addonsList.find(a => a.id === addonId);
      if (addon) {
        totalPrice += addon.price;
        totalWeeks += addon.weeks;
      }
    });

    setEstimate({ price: totalPrice, weeks: totalWeeks });
  }, [selectedType, pagesCount, selectedAddons]);

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  return (
    <section id="estimator" className="pt-[40px] md:pt-[60px] pb-[40px] md:pb-[60px] bg-surface-container-low">
      <div className="container-custom max-w-[1000px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-on-surface mb-4">
            Scope Estimator
          </h2>
          <p className="text-base text-on-surface-variant max-w-xl mx-auto">
            Select your architectural goals below to calculate an instant cost and timeline projection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-surface p-6 md:p-8 rounded-2xl border border-outline-variant/20 flex flex-col gap-8 shadow-sm">
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-3 tracking-wide uppercase">
                1. Select Architecture Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {projectTypes.map(type => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelectedType(type.id);
                      if (type.id !== 'landing' && pagesCount < 5) {
                        setPagesCount(5);
                      }
                    }}
                    className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${selectedType === type.id ? 'bg-primary-container text-white border-primary-container shadow-sm' : 'border-outline-variant/30 hover:border-outline text-on-surface-variant bg-surface-container-lowest'}`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Page Count Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-on-surface tracking-wide uppercase">
                  2. Number of Views / Pages
                </label>
                <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded">
                  {pagesCount} {pagesCount === 1 ? 'Page' : 'Pages'}
                </span>
              </div>
              <input
                type="range"
                min={selectedType === 'landing' ? 1 : 5}
                max={25}
                value={pagesCount}
                onChange={(e) => setPagesCount(Number(e.target.value))}
                className="w-full h-2 bg-outline-variant/30 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-on-surface-variant/70 mt-1">
                <span>{selectedType === 'landing' ? '1 Page' : '5 Pages'}</span>
                <span>25 Pages</span>
              </div>
            </div>

            {/* Step 3: Addons */}
            <div>
              <label className="block text-sm font-semibold text-on-surface mb-3 tracking-wide uppercase">
                3. Integrations & Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonsList.map(addon => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-lg border text-left flex items-start gap-3 transition-all ${isSelected ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant/30 hover:border-outline text-on-surface-variant bg-surface-container-lowest'}`}
                    >
                      <div className={`w-5 h-5 rounded border mt-0.5 flex items-center justify-center shrink-0 ${isSelected ? 'bg-primary border-primary text-white' : 'border-outline-variant bg-white dark:bg-black/20'}`}>
                        {isSelected && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <div className="text-xs font-semibold">{addon.name}</div>
                        <div className="text-[11px] opacity-75">+ {addon.weeks} {addon.weeks === 1 ? 'week' : 'weeks'}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Display Panel */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#004ac6] to-[#002060] text-white p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col justify-between shadow-lg relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full filter blur-2xl -translate-x-10 -translate-y-10"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6">
                <Calculator className="w-4 h-4" />
                <span className="text-xs font-semibold tracking-wider uppercase">Projection Summary</span>
              </div>

              <div className="mb-6">
                <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-1">Estimated Cost</div>
                <div className="text-4xl font-bold tracking-tight">
                  ${estimate.price.toLocaleString()} - ${(estimate.price * 1.15).toLocaleString()}
                </div>
                <div className="text-[11px] text-white/50 mt-1">Calculated based on average digital craftsmanship scale.</div>
              </div>

              <hr className="border-white/10 my-6" />

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-fixed" />
                </div>
                <div>
                  <div className="text-white/60 text-xs font-semibold uppercase tracking-wider">Estimated Delivery</div>
                  <div className="text-xl font-bold">{estimate.weeks} - {estimate.weeks + 2} Weeks</div>
                </div>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <a 
                href="#contact"
                className="w-full bg-white text-primary hover:bg-surface-container-low transition-all font-semibold rounded-lg py-4 px-6 flex items-center justify-center gap-2 group text-sm shadow-md"
              >
                Submit Scope Request
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimator;
