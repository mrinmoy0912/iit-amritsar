import React from 'react';
import { STATS } from '../utils/constants';
import { ArrowRight, Award, Briefcase, TrendingUp, Users, ShieldCheck, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-brand-primary" />;
      case 'Award': return <Award className="w-6 h-6 text-brand-primary" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-brand-primary" />;
      case 'Users': return <Users className="w-6 h-6 text-brand-primary" />;
      default: return <Award className="w-6 h-6 text-brand-primary" />;
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-semibold tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>An Institution of National Importance</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Nurturing Leaders, <br className="hidden sm:inline" />
              <span className="text-brand-primary italic">Inspiring Change</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Welcome to Indian Institute of Management Amritsar. Situated in the historic spiritual city, we blend timeless values with cutting-edge business acumen to shape tomorrow's corporate leaders.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-primary text-white font-medium shadow-lg shadow-brand-primary/20 hover:bg-brand-primary/90 hover:scale-[1.02] transition-all"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>About Institute</span>
              </a>
            </div>

          </div>

          {/* Hero Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
                  alt="IIM Amritsar Campus"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Excellence in Education</span>
                  <h3 className="text-xl font-serif font-bold mt-1">World-Class Campus Experience</h3>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg">
                  100%
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Placement Record</div>
                  <div className="text-sm font-bold text-slate-900">Consistently Outstanding</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex items-start gap-4"
            >
              <div className="p-3 bg-slate-50 rounded-xl">
                {getIcon(stat.icon)}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};