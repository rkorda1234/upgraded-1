import React, { useEffect } from "react";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Bell, 
  Sparkles, 
  Mail, 
  Home, 
  BookOpen, 
  ShieldCheck, 
  Gift, 
  Zap, 
  Clock 
} from "lucide-react";

interface WaitingListThankYouViewProps {
  onBackToHome: () => void;
  onExploreCourses: () => void;
}

export default function WaitingListThankYouView({ onBackToHome, onExploreCourses }: WaitingListThankYouViewProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] pt-24 pb-28 text-left font-sans antialiased">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        
        {/* Main Content Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-gray-150 rounded-3xl p-8 sm:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.02)] space-y-8 relative overflow-hidden text-center sm:text-left"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

          {/* Success Icon Badge */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center shrink-0 shadow-xl shadow-black/10">
              <Bell className="w-8 h-8 text-emerald-400" />
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/80 rounded-full text-[11px] font-mono font-bold text-emerald-800 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Priority Waitlist Registration Confirmed
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-black font-display tracking-tight leading-tight">
                You're On The VIP Waiting List!
              </h1>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Thank you for registering your interest with Upgraded Real Estate Academy. Your spot on our priority notification list has been reserved.
              </p>
            </div>
          </div>

          {/* HIGHLIGHT BOX */}
          <div className="bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl relative z-10 border border-neutral-800">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Early Access Guarantee
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans tracking-tight">
                What Happens Next?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans font-normal">
                As a waitlist member, you get exclusive priority benefits before our courses open to the general public.
              </p>
            </div>
          </div>

          {/* NEXT STEPS / BENEFITS GRID */}
          <div className="space-y-6 pt-2 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              
              <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 shadow-xs hover:border-gray-300 transition-all">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-base font-bold text-gray-900 font-sans tracking-tight">1. First to Know</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans font-normal">
                  You'll receive an email notification with direct early enrollment access as soon as course registration goes live.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 shadow-xs hover:border-gray-300 transition-all">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
                  <Gift className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="text-base font-bold text-gray-900 font-sans tracking-tight">2. Early-Bird Pricing</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans font-normal">
                  VIP waitlist members receive exclusive initial launch discounts and promotional bonus resources.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 shadow-xs hover:border-gray-300 transition-all">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-purple-700" />
                </div>
                <h3 className="text-base font-bold text-gray-900 font-sans tracking-tight">3. Sneak Peeks</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-sans font-normal">
                  Watch your inbox for curriculum previews, study guides, and actionable industry updates before launch.
                </p>
              </div>

            </div>
          </div>

          {/* Need Help / Support Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-gray-600">
            <div className="flex items-center gap-3.5 text-left">
              <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-black font-bold text-sm sm:text-base font-sans">Have questions about upcoming courses?</p>
                <p className="text-gray-500 text-xs sm:text-sm font-sans">Our student support team is here to assist you anytime.</p>
              </div>
            </div>
            <a
              href="mailto:adriana@upgradedreacademy.com"
              className="bg-white border border-gray-200 text-black font-bold py-2.5 px-4 rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap text-xs sm:text-sm font-sans"
            >
              adriana@upgradedreacademy.com
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-black font-bold rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Home className="w-4 h-4" />
              Return to Home
            </button>
            <button
              onClick={onExploreCourses}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-neutral-900 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              Explore Active Courses
            </button>
          </div>

        </motion.div>

      </div>
    </div>
  );
}
