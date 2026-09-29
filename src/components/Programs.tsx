import React, { useState } from 'react';
import { PROGRAMS_DATA } from '../utils/constants';
import { Clock, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';

export const Programs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(PROGRAMS_DATA[0].id);

  const currentProgram = PROGRAMS_DATA.find((p) => p.id === activeTab) || PROGRAMS_DATA[0];

  return (
    <section id="programs" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
            Academic Offerings
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4">
            Programs Designed for Future Leaders
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Choose from our flagship full-time management degrees, specialized business analytics tracks, and doctoral research programs.
          </p>
        </div>

        {/* Program Tabs navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {PROGRAMS_DATA.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActiveTab(prog.id)}
              className={`px-5 py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-200 flex items-center gap-2 ${
                activeTab === prog.id
                  ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{prog.title.split('(')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Active Program Details Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200 max-w-4xl mx-auto animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">Program Overview</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-1">{currentProgram.title}</h3>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl text-slate-700 font-medium text-sm">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>{currentProgram.duration}</span>
            </div>
          </div>

          <div className="py-6 space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">Description</h4>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">{currentProgram.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h5 className="font-serif font-bold text-slate-900 mb-2">Eligibility Criteria</h5>
                <p className="text-slate-600 text-sm leading-relaxed">{currentProgram.eligibility}</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h5 className="font-serif font-bold text-slate-900 mb-2">Key Highlights</h5>
                <ul className="space-y-2">
                  {currentProgram.highlights.map((high, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                      <span>{high}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">Admissions open for Academic Year 2025-27</span>
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary text-white font-medium hover:bg-brand-primary/90 transition-colors shadow-sm text-sm"
            >
              <span>View Admission Process</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};