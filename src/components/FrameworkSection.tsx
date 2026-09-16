import React from 'react';

export const FrameworkSection: React.FC = () => {
  const stages = [
    {
      num: '01',
      title: 'DISCOVER',
      headline: 'Get found.',
      description: 'Search, social and local visibility.',
    },
    {
      num: '02',
      title: 'TRUST',
      headline: 'Look like the obvious choice.',
      description: 'Brand, website and content.',
    },
    {
      num: '03',
      title: 'CONVERT',
      headline: 'Turn attention into enquiries.',
      description: 'Landing pages, WhatsApp and lead systems.',
    },
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#FDFCF9] border-t border-sand-300/80 relative" id="framework">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-sand-400/60">
          <div>
            <span className="text-xs sm:text-sm font-mono tracking-[0.2em] text-slate-500 uppercase font-semibold block mb-3">
              The Architecture
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-none">
              Discover → Trust → Convert
            </h2>
          </div>
          <p className="text-slate-600 text-base sm:text-lg max-w-md font-normal leading-relaxed">
            Every page has one job: move visitors closer to action. No fluff, no dead ends.
          </p>
        </div>

        {/* 3 Open Editorial Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
          {stages.map((stage) => (
            <div key={stage.num} className="flex flex-col space-y-4">
              <span className="font-mono text-5xl sm:text-6xl lg:text-7xl font-bold text-sand-400 leading-none">
                {stage.num}
              </span>

              <h3 className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-slate-900 uppercase pt-2">
                {stage.title}
              </h3>

              <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                {stage.headline}
              </h4>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
