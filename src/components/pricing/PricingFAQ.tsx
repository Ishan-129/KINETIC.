import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { PRICING_FAQS } from '../../data/pricingData';

export const PricingFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 pb-6 border-b border-white/[0.06] flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#525C71] uppercase font-bold block mb-2">
            Clarifications //
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-black text-[#ECEEF2] tracking-tight uppercase">
            Frequently Asked Questions
          </h3>
        </div>
        <span className="text-xs font-mono text-[#525C71]">
          Everything clear before you spend ₹1.
        </span>
      </div>

      <div className="divide-y divide-white/[0.05]">
        {PRICING_FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-4 sm:py-5">
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                className="w-full text-left flex items-center justify-between gap-4 font-display text-base sm:text-lg font-bold text-[#ECEEF2] hover:text-[#C7FF3D] transition-colors focus:outline-none uppercase"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span
                  className="w-6 h-6 border border-white/[0.10] flex items-center justify-center shrink-0 transition-colors"
                  style={{ borderColor: isOpen ? 'rgba(199,255,61,0.4)' : undefined, color: isOpen ? '#C7FF3D' : '#525C71' }}
                >
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="pt-3 pr-10 text-sm sm:text-base text-[#8A92A6] leading-relaxed font-body">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
