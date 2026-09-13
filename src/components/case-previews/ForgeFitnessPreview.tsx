import React, { useState } from 'react';
import { Dumbbell, Clock, Flame, Users, Ticket, QrCode } from 'lucide-react';
import { Button } from '../ui/Button';

export const ForgeFitnessPreview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [claimedPass, setClaimedPass] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const categories = ['All', 'Strength', 'Conditioning', 'Recovery'];

  const classes = [
    {
      id: '1',
      title: 'Barbell Strength & Power',
      time: '06:00 AM – 07:00 AM',
      coach: 'Coach Tyler',
      intensity: 'High',
      category: 'Strength',
      spotsLeft: 3,
    },
    {
      id: '2',
      title: 'Engine & Metabolic Conditioning',
      time: '07:30 AM – 08:30 AM',
      coach: 'Coach Elena',
      intensity: 'Peak',
      category: 'Conditioning',
      spotsLeft: 5,
    },
    {
      id: '3',
      title: 'Functional Hypertrophy (Upper)',
      time: '12:00 PM – 01:00 PM',
      coach: 'Coach Tyler',
      intensity: 'Moderate-High',
      category: 'Strength',
      spotsLeft: 2,
    },
    {
      id: '4',
      title: 'Decompression, Mobility & Breathwork',
      time: '05:30 PM – 06:30 PM',
      coach: 'Coach Sarah',
      intensity: 'Low',
      category: 'Recovery',
      spotsLeft: 8,
    }
  ];

  const filtered = activeCategory === 'All' 
    ? classes 
    : classes.filter(c => c.category === activeCategory);

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName) return;
    setClaimedPass(true);
  };

  if (claimedPass) {
    return (
      <div className="bg-obsidian-950 border border-amber-500/40 rounded-2xl p-8 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-4">
          <Ticket className="w-8 h-8" />
        </div>
        <h4 className="text-2xl font-bold text-white mb-1">VIP Day Pass Issued!</h4>
        <p className="text-xs font-mono text-amber-400 mb-6">PASS ID: #FORGE-{Math.floor(100000 + Math.random() * 900000)}</p>

        <div className="max-w-xs mx-auto bg-obsidian-900 border border-surface-border rounded-xl p-6 mb-6 text-left relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-4">
            <span className="font-extrabold text-white tracking-wider text-sm">FORGE ATHLETICS</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              ACTIVE
            </span>
          </div>
          <div className="text-sm font-semibold text-white">{userName || 'Athlete Guest'}</div>
          <div className="text-xs text-slate-400 mb-4">{userPhone || 'Mobile verified'}</div>

          <div className="flex items-center justify-between pt-3 border-t border-surface-border">
            <div className="text-[10px] font-mono text-slate-400">Valid: 7 Days from Issue</div>
            <QrCode className="w-8 h-8 text-slate-200" />
          </div>
        </div>

        <Button
          size="sm"
          variant="secondary"
          onClick={() => setClaimedPass(false)}
        >
          Reset Demo Flow
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-obsidian-950 border border-surface-border rounded-2xl p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-surface-border gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono mb-1">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>FORGE ATHLETIC CLUB — TIMETABLE & TRIAL ENGINE</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Daily Training Schedule & 1-Click Pass
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Replaced clunky PDF downloads with live, filterable session booking.
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-obsidian-900 border border-surface-border p-1 rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-amber-400 text-obsidian-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Classes & Pass Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Classes Column */}
        <div className="lg:col-span-7 space-y-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl bg-obsidian-900 border border-surface-border hover:border-slate-600 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h5 className="font-semibold text-white text-sm">{item.title}</h5>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {item.intensity}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-400 mt-1.5">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" /> {item.time}
                  </span>
                  <span>•</span>
                  <span>{item.coach}</span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-surface-border/40">
                <span className="text-xs font-mono text-amber-400 flex items-center gap-1">
                  <Users className="w-3 h-3" /> {item.spotsLeft} spots left
                </span>
                <button
                  onClick={() => setClaimedPass(true)}
                  className="px-3 py-1.5 rounded-lg bg-obsidian-800 hover:bg-obsidian-700 text-white text-xs font-medium border border-surface-border transition-colors"
                >
                  Reserve
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 1-Click Pass Generator Column */}
        <div className="lg:col-span-5 bg-gradient-to-br from-amber-500/10 via-obsidian-900 to-obsidian-900 border border-amber-500/30 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400 text-xs font-mono mb-3 border border-amber-400/20">
              <Flame className="w-3 h-3" /> 100% Free Trial Pass
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Experience The Club Floor</h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Try any class, sauna & cold plunge with full coaching support. No credit card required.
            </p>

            <form onSubmit={handleClaim} className="space-y-3">
              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-obsidian-950 border border-surface-border rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-slate-600"
                />
              </div>
              <div>
                <label className="text-[11px] font-mono text-slate-400 block mb-1">Mobile Phone Number</label>
                <input
                  type="tel"
                  required
                  value={userPhone}
                  onChange={(e) => setUserPhone(e.target.value)}
                  placeholder="+1 (555) 019-2834"
                  className="w-full bg-obsidian-950 border border-surface-border rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-slate-600"
                />
              </div>

              <Button
                type="submit"
                variant="glow"
                size="md"
                className="w-full mt-2 bg-gradient-to-r from-amber-500 to-orange-600 shadow-amber-500/20"
              >
                Claim Free Day Pass
              </Button>
            </form>
          </div>

          <div className="mt-4 pt-4 border-t border-surface-border/60 text-[11px] text-slate-500 text-center">
            Instantly generates digital Apple/Google wallet passes directly in browser.
          </div>
        </div>
      </div>
    </div>
  );
};
