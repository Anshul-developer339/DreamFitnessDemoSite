import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, MessageSquare, Sparkles, User, Dumbbell, Clock } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Weight Loss & Fat Burn',
    preferredTime: 'Evening (5:00 PM – 11:00 PM)',
    requestFemaleTrainer: false,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate name
    if (!formData.name.trim()) {
      setError('Please enter your full name.');
      return;
    }

    // Validate phone number (simple Indian 10-digit mobile check)
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile phone number.');
      return;
    }

    setLoading(true);

    // Simulate immediate smooth confirmation
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Store in localStorage for persistence
      try {
        const stored = JSON.parse(localStorage.getItem('dream_fitness_leads') || '[]');
        stored.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('dream_fitness_leads', JSON.stringify(stored));
      } catch {
        // Ignore localStorage quota errors
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      goal: 'Weight Loss & Fat Burn',
      preferredTime: 'Evening (5:00 PM – 11:00 PM)',
      requestFemaleTrainer: false,
      message: '',
    });
  };

  const getWhatsAppMessageUrl = () => {
    const text = encodeURIComponent(
      `Hi Dream Fitness Gym! I'm ${formData.name}. My fitness goal is ${formData.goal}. I would like to book a free trial and know more about membership plans.`
    );
    return `https://wa.me/${GYM_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0f17] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-widest font-bold text-orange-500 mb-2">
              Start Your Transformation
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-display text-white uppercase tracking-tight">
              Request a Free Callback & Trial
            </h2>
            <p className="mt-4 text-base text-neutral-400 max-w-xl mx-auto">
              Leave your details below. Our certified coaching team will call you back within 30 minutes
              to schedule your free facility tour and 1-day workout trial.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-[#12141c] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-gradient-to-tr from-green-500 to-emerald-600 rounded-2xl mx-auto flex items-center justify-center text-white mb-6 shadow-xl shadow-green-500/20">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase">
                  Callback Request Confirmed!
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base max-w-md mx-auto mt-3">
                  Thank you, <strong className="text-orange-400">{formData.name}</strong>. Our trainer
                  will call you shortly at <strong className="text-white">{formData.phone}</strong> regarding your{' '}
                  <strong className="text-orange-400">{formData.goal}</strong> goal.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3.5 px-6 text-xs uppercase tracking-wider font-extrabold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp Instantly</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto py-3.5 px-6 text-xs uppercase tracking-wider font-bold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-all cursor-pointer border border-white/10"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs font-semibold">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-neutral-300 mb-2">
                      Full Name <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Amit Sharma"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-[#0d0f17] border border-white/10 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone Number field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-neutral-300 mb-2">
                      Phone Number <span className="text-orange-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98765 43210"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-[#0d0f17] border border-white/10 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Fitness Goal field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-neutral-300 mb-2">
                      Primary Fitness Goal
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                        <Dumbbell className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#0d0f17] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                      >
                        <option value="Weight Loss & Fat Burn">Weight Loss & Fat Burn</option>
                        <option value="Muscle Building & Hypertrophy">Muscle Building & Hypertrophy</option>
                        <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                        <option value="General Health & Stamina">General Health & Stamina</option>
                        <option value="Personal Training (1-on-1)">Personal Training (1-on-1)</option>
                        <option value="Cardio & Flexibility">Cardio & Flexibility</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Time field */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-neutral-300 mb-2">
                      Preferred Workout Time
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#0d0f17] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                      >
                        <option value="Morning (5:30 AM – 8:30 AM)">Morning (5:30 AM – 8:30 AM)</option>
                        <option value="Mid-Day (8:30 AM – 11:30 AM)">Mid-Day (8:30 AM – 11:30 AM)</option>
                        <option value="Evening (5:00 PM – 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                        <option value="Late Night (8:00 PM – 11:00 PM)">Late Night (8:00 PM – 11:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Female Trainer Checkbox */}
                <div className="p-4 bg-[#0d0f17] border border-white/5 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="femaleTrainerCheck"
                      checked={formData.requestFemaleTrainer}
                      onChange={(e) => setFormData({ ...formData, requestFemaleTrainer: e.target.checked })}
                      className="w-4 h-4 rounded text-orange-500 focus:ring-orange-500 focus:ring-offset-0 bg-[#12141c] border-white/20"
                    />
                    <label htmlFor="femaleTrainerCheck" className="text-xs sm:text-sm text-neutral-200 cursor-pointer">
                      I would like guidance from a <strong>Female Certified Trainer</strong>
                    </label>
                  </div>
                  <span className="text-[11px] text-orange-400 font-semibold hidden sm:inline">
                    Available Daily
                  </span>
                </div>

                {/* Submit CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-8 text-sm uppercase tracking-wider font-extrabold text-white bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 rounded-xl hover:from-orange-600 hover:to-red-700 shadow-xl shadow-orange-500/25 active:scale-98 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Scheduling Callback...</span>
                    ) : (
                      <>
                        <span>Submit for Free Callback & 1-Day Trial</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Privacy & Instant Call alternative */}
                <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 pt-2 gap-2">
                  <span>🔒 No spam guaranteed. Your phone number is kept private.</span>
                  <span>
                    Prefer direct calling?{' '}
                    <a
                      href={`tel:${GYM_INFO.phone}`}
                      className="text-orange-400 hover:underline font-semibold"
                    >
                      {GYM_INFO.displayPhone}
                    </a>
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
