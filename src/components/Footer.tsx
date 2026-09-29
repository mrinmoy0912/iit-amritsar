import React from 'react';
import { NAV_LINKS } from '../utils/constants';
import { GraduationCap, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-800">
          
          {/* Logo & Intro */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="font-serif font-bold text-lg text-white tracking-tight">
                  IIM AMRITSAR
                </div>
                <div className="text-[10px] tracking-wider uppercase text-slate-400 font-semibold mt-0.5">
                  Indian Institute of Management
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              An Institution of National Importance under the IIM Act 2017, dedicated to creating future business leaders and impactful research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">Programs</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#programs" className="hover:text-white transition-colors">MBA (Flagship)</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">MBA in Business Analytics</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Ph.D. Doctoral Program</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Executive Education</a></li>
            </ul>
          </div>

          {/* Legal / Accreditation */}
          <div>
            <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">Accreditation</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Member of the Association to Advance Collegiate Schools of Business (AACSB) and evaluated under premier national frameworks.
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-lg transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Indian Institute of Management Amritsar. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#home" className="hover:text-slate-400">Terms of Use</a>
            <a href="#home" className="hover:text-slate-400">RTI</a>
          </div>
        </div>

      </div>
    </footer>
  );
};