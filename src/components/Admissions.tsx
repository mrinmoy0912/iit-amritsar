import React from 'react';
import { ADMISSION_STEPS } from '../utils/constants';
import { FileText, CheckCircle, HelpCircle } from 'lucide-react';

export const Admissions: React.FC = () => {
  return (
    <section id="admissions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
            Admissions 2025
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4">
            Your Journey to IIM Amritsar
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            We seek candidates with exceptional academic pedigree, intellectual curiosity, and leadership potential. Here is how you can join our upcoming cohort.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ADMISSION_STEPS.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative group hover:shadow-md transition-all">
              <div className="text-3xl font-serif font-bold text-brand-primary/40 group-hover:text-brand-primary transition-colors mb-4">
                {item.step}
              </div>
              <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Admission Info Box */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-amber-400 uppercase">
                <FileText className="w-4 h-4" />
                <span>Eligibility & Shortlisting Norms</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">Ready to take the next step in your career?</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Shortlisting is strictly based on CAT overall and sectional percentiles, academic records in 10th, 12th, graduation, and relevant work experience. Diversity weightage is awarded to encourage gender and academic inclusivity.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-primary text-white font-medium hover:bg-brand-primary/90 transition-all shadow-lg text-center"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Admission Query</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 text-slate-200 font-medium hover:bg-slate-700 transition-all border border-slate-700 text-center"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Download Brochure</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};