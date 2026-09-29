import React from 'react';
import { RECRUITERS } from '../utils/constants';
import { Briefcase, Building2, Award } from 'lucide-react';

export const Placements: React.FC = () => {
  return (
    <section id="placements" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
            Corporate Relations & Placements
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4">
            Outstanding Career Outcomes
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            IIM Amritsar continues to achieve exceptional placement records with top-tier multinational corporations, consulting powerhouses, and leading financial institutions.
          </p>
        </div>

        {/* Highlights banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold font-serif text-slate-900 mb-1">₹ 58.52 LPA</div>
            <div className="text-sm font-medium text-slate-500">Highest Domestic CTC Offered</div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold font-serif text-slate-900 mb-1">₹ 16.51 LPA</div>
            <div className="text-sm font-medium text-slate-500">Average CTC of the Batch</div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-xs">
            <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold font-serif text-slate-900 mb-1">140+</div>
            <div className="text-sm font-medium text-slate-500">New & Returning Recruiters</div>
          </div>
        </div>

        {/* Recruiters Grid */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl font-bold text-slate-900">Our Prominent Recruiter Partners</h3>
            <p className="text-slate-500 text-sm mt-1">Recruiting across Consulting, Finance, Marketing, Product Management, & Analytics</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {RECRUITERS.map((rec, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center justify-center text-center hover:bg-slate-100 transition-colors">
                <span className="font-serif font-bold text-slate-800 text-lg mb-1">{rec.name}</span>
                <span className="text-xs text-slate-500 font-medium">{rec.category}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};