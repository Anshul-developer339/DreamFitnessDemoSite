import React, { useState } from 'react';
import { X, CheckCircle2, Ticket, Flame, MessageSquare, Phone, Calendar } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({
  isOpen,
  onClose,
  defaultPlan,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [passGenerated, setPassGenerated] = useState(false);
  const [passId, setPassId] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleGeneratePass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    const clean = phone.replace(/\D/g, '');
    if (clean.length < 10) {
      setError('Please provide a valid 10-digit phone number.');
      return;
    }

    const generatedId = `DFG-${Math.floor(1000 + Math.random() * 9000)}`;
    setPassId(generatedId);
    setPassGenerated(true);
  };

  const resetAndClose = () => {
    setName('');
    setPhone('');
    setPassGenerated(false);
    setError('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-[#12141c] border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
        {/* Header bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-tr from-orange-500 to-red-600 rounded-lg text-white">
              <Flame className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-base font-extrabold font-display text-white uppercase">
                {passGenerated ? 'Your 1-Day Trial Pass' : 'Claim Free 1-Day Workout Pass'}
              </h3>
              <p className="text-xs text-neutral-400">Dream Fitness Gym · Metro Pillar 870 Muradnagar</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8">
          {passGenerated ? (
            <div className="space-y-6">
              {/* Pass Card */}
              <div className="bg-gradient-to-br from-[#1c1f2e] to-[#12141c] border-2 border-orange-500/50 rounded-2xl p-6 relative overflow-hidden shadow-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400">
                      VIP 1-Day Workout Pass
                    </span>
                    <h4 className="text-xl font-black text-white font-display uppercase mt-0.5">
                      {name}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1">Pass No: {passId}</p>
                  </div>
                  <Ticket className="w-8 h-8 text-orange-500" />
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-neutral-500 block">Valid Location</span>
                    <span className="text-neutral-200 font-semibold">Pillar 870, GT Rd</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Access Hours</span>
                    <span className="text-neutral-200 font-semibold">Daily till 11:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-neutral-300 text-center">
                Show this pass at the front desk when you arrive. You will get complete access to all
                imported machines, free weights, and cardio stations.
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${GYM_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Hi Dream Fitness Gym! I generated my 1-Day Trial Pass (${passId}) for ${name}. Looking forward to visiting!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 text-xs uppercase tracking-wider font-extrabold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Pass to WhatsApp</span>
                </a>
                <button
                  onClick={resetAndClose}
                  className="py-3 px-6 text-xs uppercase tracking-wider font-bold text-neutral-300 bg-white/10 hover:bg-white/15 rounded-xl transition-all cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleGeneratePass} className="space-y-4">
              {defaultPlan && (
                <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-xl text-xs text-orange-300">
                  Selected Interest: <strong>{defaultPlan}</strong>
                </div>
              )}

              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-400">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-neutral-300 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0d0f17] border border-white/10 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-neutral-300 mb-1.5">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0d0f17] border border-white/10 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="p-3 bg-white/5 rounded-xl text-xs text-neutral-400 space-y-1">
                <div className="text-neutral-200 font-semibold">Included with your Free Pass:</div>
                <div>✓ 1 Full workout session on imported equipment</div>
                <div>✓ Guidance from certified trainers</div>
                <div>✓ Free body composition check</div>
              </div>

              <button
                type="submit"
                className="w-full py-4 text-xs uppercase tracking-wider font-extrabold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-xl hover:from-orange-600 hover:to-red-700 shadow-xl shadow-orange-500/30 active:scale-95 transition-all cursor-pointer"
              >
                Generate Instant Free Pass
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
