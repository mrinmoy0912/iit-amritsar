import React from 'react';
import { CAMPUS_HIGHLIGHTS } from '../utils/constants';
import { Target, Eye, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full">
            About IIM Amritsar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-4">
            Legacy of Rigor, Innovation, and Leadership
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Established in 2015, the Indian Institute of Management Amritsar is the 15th IIM set up by the Ministry of Education, Government of India. Located in Punjab's premier spiritual and commercial hub, the institute fosters a culture of excellence.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex gap-6 items-start">
            <div className="p-4 bg-white rounded-xl shadow-xs text-brand-primary">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To build leaders of tomorrow by imparting cutting-edge management education rooted in Indian ethos, contemporary research, and strong corporate collaboration.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex gap-6 items-start">
            <div className="p-4 bg-white rounded-xl shadow-xs text-brand-primary">
              <Eye className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To be a global center of excellence in management education and research, recognized for shaping entrepreneurial minds and ethical leaders.
              </p>
            </div>
          </div>
        </div>

        {/* Campus & Infrastructure Highlights */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl font-bold text-slate-900">Campus & Infrastructure</h3>
            <p className="text-slate-500 text-sm mt-1">Designed for holistic development and immersive learning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAMPUS_HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-primary">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Fully Enabled</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};