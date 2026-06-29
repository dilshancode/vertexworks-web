import React from 'react';
import { Triangle, MessageSquare, Briefcase, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-outline-variant/30 py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <Triangle className="w-6 h-6 text-primary fill-primary" />
              <span className="font-headline-md text-xl font-bold text-on-surface">
                Vertex Works
              </span>
            </a>
            <p className="font-body-sm text-sm text-on-surface-variant max-w-xs mb-6">
              Digital Craftsmanship for modern software teams. We build the interfaces of tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-outline hover:text-primary transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="text-outline hover:text-primary transition-colors">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="https://github.com/vertexworks" className="text-outline hover:text-primary transition-colors">
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-label-md text-on-surface font-semibold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 font-body-sm text-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Frontend Engineering</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Design Systems</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Backend Integration</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Platform Modernization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-label-md text-on-surface font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 font-body-sm text-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-label-md text-on-surface font-semibold mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 font-body-sm text-sm text-on-surface-variant">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono-sm text-xs text-outline">
            &copy; {new Date().getFullYear()} Vertex Works Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary-container"></span>
            <span className="font-mono-sm text-xs text-outline">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
