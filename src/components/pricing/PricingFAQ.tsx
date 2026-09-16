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
    <div className="mt-20 sm:mt-24 max-w-4xl mx-auto">
      <div className="mb-10 pb-6 border-b border-sand-400/80 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono tracking-[0.2em] text-slate-500 uppercase font-semibold block mb-2">
            Clarifications
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight uppercase">
            Frequently Asked Questions
          </h3>
        </div>
        <span className="text-xs font-mono text-slate-500">
          Everything clear before you spend ₹1.
        </span>
      </div>

      <div className="divide-y divide-sand-300">
        {PRICING_FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="py-4 sm:py-5">
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                className="w-full text-left flex items-center justify-between gap-4 font-display text-base sm:text-lg font-bold text-slate-900 hover:text-accent-gold transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span className="w-6 h-6 rounded-full border border-sand-400 flex items-center justify-center text-slate-700 shrink-0">
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="pt-3 pr-10 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
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

