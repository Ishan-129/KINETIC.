import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, User, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const AuraClinicPreview: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState('Invisalign Clear Aligners');
  const [selectedDoctor, setSelectedDoctor] = useState('Dr. Sarah Chen, DDS');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const treatments = [
    { name: 'Invisalign Clear Aligners', time: '45 min consultation', price: 'From $3,400', popular: true },
    { name: 'Handcrafted Porcelain Veneers', time: '60 min cosmetic review', price: 'From $1,200/tooth', popular: false },
    { name: 'Enamel Micro-Bonding', time: '30 min session', price: 'From $450/tooth', popular: false },
    { name: 'Laser Teeth Whitening', time: '45 min in-office', price: '$499 special', popular: false },
  ];

  const doctors = ['Dr. Sarah Chen, DDS', 'Dr. Marcus Vance, Prosthodontist'];
  const times = ['09:00 AM', '10:30 AM', '02:00 PM', '04:15 PM'];

  if (bookingConfirmed) {
    return (
      <div className="bg-obsidian-950 border border-emerald-500/40 rounded-none p-8 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-none bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h4 className="text-2xl font-bold text-white mb-2">Appointment Reserved</h4>
        <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
          Your consultation for <strong className="text-white">{selectedTreatment}</strong> with <strong className="text-white">{selectedDoctor}</strong> at {selectedTime} has been registered. An SMS confirmation with calendar invite has been sent.
        </p>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setBookingConfirmed(false)}
        >
          Reset Demo Flow
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-obsidian-950 border border-surface-border rounded-none p-6 sm:p-8">
      {/* Mock Clinic Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-surface-border gap-4">
        <div>
          <div className="flex items-center gap-2 text-sky-400 text-xs font-mono mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AURA DENTAL & FACIAL AESTHETICS — LIVE EXPERIENCE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Schedule Your Cosmetic Smile Consultation
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Transparent pricing, zero waiting room paperwork, instant direct confirmation.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-none text-xs font-mono w-fit">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Next Available Today</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Step 1: Select Treatment */}
        <div className="lg:col-span-6 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <span>01.</span> Select Clinical Focus
          </h4>
          <div className="space-y-2.5">
            {treatments.map((t) => {
              const isSelected = selectedTreatment === t.name;
              return (
                <div
                  key={t.name}
                  onClick={() => setSelectedTreatment(t.name)}
                  className={`p-3.5 rounded-none border cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-sky-500/10 border-sky-400/50 text-white'
                      : 'bg-obsidian-900 border-surface-border text-slate-300 hover:border-slate-600'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold">{t.name}</span>
                      {t.popular && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-none bg-sky-400/20 text-sky-300">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {t.time}
                      </span>
                      <span>•</span>
                      <span className="text-slate-300 font-mono">{t.price}</span>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-none border flex items-center justify-center ${
                    isSelected ? 'border-sky-400 bg-sky-400' : 'border-slate-600'
                  }`}>
                    {isSelected && <div className="w-2 h-2 bg-obsidian-950" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Slot & Doctor */}
        <div className="lg:col-span-6 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <span>02.</span> Select Specialist & Slot
          </h4>

          {/* Doctor selector */}
          <div className="space-y-2">
            <span className="text-xs text-slate-400">Practitioner:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {doctors.map((doc) => (
                <button
                  key={doc}
                  onClick={() => setSelectedDoctor(doc)}
                  className={`p-2.5 rounded-none border text-xs font-medium flex items-center gap-2 transition-all ${
                    selectedDoctor === doc
                      ? 'bg-sky-500/10 border-sky-400 text-white'
                      : 'bg-obsidian-900 border-surface-border text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <User className="w-3.5 h-3.5 text-sky-400" />
                  <span className="truncate">{doc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Times */}
          <div className="space-y-2">
            <span className="text-xs text-slate-400">Available Times:</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {times.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2 px-3 rounded-none border text-xs font-mono transition-all text-center ${
                    selectedTime === time
                      ? 'bg-sky-400 text-obsidian-950 font-bold border-sky-400'
                      : 'bg-obsidian-900 border-surface-border text-slate-300 hover:border-slate-500'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Confirmation Box */}
          <div className="pt-4 border-t border-surface-border mt-4">
            <div className="bg-obsidian-900/80 p-3.5 rounded-none border border-surface-border mb-4 text-xs text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-sky-400" />
                <span>Today, {selectedTime}</span>
              </span>
              <span className="text-slate-400">No prepayment required</span>
            </div>

            <Button
              variant="glow"
              size="md"
              className="w-full text-sm"
              onClick={() => setBookingConfirmed(true)}
            >
              Confirm Consultation in 1 Tap
            </Button>
            <p className="text-[11px] text-center text-slate-500 mt-2">
              This interactive widget demonstrates the exact frictionless booking experience we build for clinics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
