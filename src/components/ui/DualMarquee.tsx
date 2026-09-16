import React from 'react';

export const DualMarquee: React.FC = () => {
  const row1 = [
    'WEBSITES THAT CONVERT',
    'DIRECT FOUNDER EXECUTION',
    'SUB-SECOND REACT SPEED',
    'FULL SOCIAL MEDIA SYSTEMS',
    'HIGH-INTENT LEAD ADS',
    'ZERO ACCOUNT MANAGERS',
    'WEBSITES THAT CONVERT',
    'DIRECT FOUNDER EXECUTION',
    'SUB-SECOND REACT SPEED',
    'FULL SOCIAL MEDIA SYSTEMS',
    'HIGH-INTENT LEAD ADS',
    'ZERO ACCOUNT MANAGERS',
  ];

  const row2 = [
    'DISCOVER → TRUST → CONVERT',
    '2–3 WEEK RAPID SPRINTS',
    'NO WORDPRESS BLOAT',
    'CLEAR UPFRONT PRICING',
    'MUMBAI / GLOBAL EDGE',
    'LOOKS GOOD • WORKS HARDER',
    'DISCOVER → TRUST → CONVERT',
    '2–3 WEEK RAPID SPRINTS',
    'NO WORDPRESS BLOAT',
    'CLEAR UPFRONT PRICING',
    'MUMBAI / GLOBAL EDGE',
    'LOOKS GOOD • WORKS HARDER',
  ];

  return (
    <div className="border-y border-studio-ink bg-studio-ink text-[#F5F2EB] py-3 overflow-hidden select-none space-y-2">
      {/* Row 1 — Left scroll */}
      <div className="overflow-hidden">
        <div className="animate-marquee-left flex items-center space-x-6 text-xs sm:text-sm font-mono tracking-[0.25em] uppercase font-bold text-[#F5F2EB]/90">
          {row1.map((item, idx) => (
            <React.Fragment key={`r1-${idx}`}>
              <span className="hover:text-accent-acid transition-colors">{item}</span>
              <span className="text-studio-gold">/</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Row 2 — Right scroll */}
      <div className="overflow-hidden border-t border-white/10 pt-2">
        <div className="animate-marquee-right flex items-center space-x-6 text-[11px] sm:text-xs font-mono tracking-[0.2em] uppercase font-semibold text-[#F5F2EB]/70">
          {row2.map((item, idx) => (
            <React.Fragment key={`r2-${idx}`}>
              <span className="hover:text-studio-gold transition-colors">{item}</span>
              <span className="text-accent-acid font-bold">◈</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

