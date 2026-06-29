import React, { useState, useEffect } from 'react';
import { Menu, X, Triangle, Sun, Moon } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) return storedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['services', 'projects', 'process', 'faq'];
      const scrollPosition = window.scrollY + 120; // 120px offset for active detection

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      
      // Clear active state if near top
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-surface/90 backdrop-blur-md border-outline-variant/30 shadow-sm'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="container-custom h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Triangle className="w-6 h-6 text-primary fill-primary group-hover:rotate-180 transition-transform duration-500" />
          <span className="font-bold text-2xl text-on-surface">
            Vertex Works
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {['Services', 'Projects', 'Process', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                "font-medium text-sm transition-colors duration-200 relative py-1",
                activeSection === item.toLowerCase()
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              )}
            >
              {item}
              {activeSection === item.toLowerCase() && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => {
              const newTheme = theme === 'dark' ? 'light' : 'dark';
              setTheme(newTheme);
            }}
            className="p-2.5 rounded-full hover:bg-surface-variant/50 border border-outline-variant/20 transition-colors text-on-surface-variant hover:text-primary flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex btn btn-primary px-5 py-2 text-xs"
          >
            Get Started
          </a>
          <button
            className="md:hidden text-on-surface p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-outline-variant/30 p-5 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          {['Services', 'Projects', 'Process', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium text-base text-on-surface hover:text-primary transition-colors duration-200 py-2 border-b border-outline-variant/20 last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary w-full mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
