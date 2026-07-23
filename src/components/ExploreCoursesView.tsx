import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  COURSES, 
  Course 
} from "../data/courses";
import GHLWaitingListModal from "./GHLWaitingListModal";
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Award, 
  Globe, 
  ArrowRight, 
  ArrowLeft, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  CreditCard, 
  Zap, 
  Layers, 
  HelpCircle, 
  Check, 
  Building2,
  Lock,
  Mail,
  UserCheck
} from "lucide-react";

interface ExploreCoursesViewProps {
  initialCourseId?: string | null;
  initialCategory?: string | null;
  onOpenChatWithPrompt?: (prompt: string) => void;
  onBackToHome: () => void;
}

export default function ExploreCoursesView({ 
  initialCourseId, 
  initialCategory,
  onOpenChatWithPrompt,
  onBackToHome 
}: ExploreCoursesViewProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [notifyModalCourse, setNotifyModalCourse] = useState<Course | null>(null);
  const [notifyEmail, setNotifyEmail] = useState<string>("");
  const [notifySubmitted, setNotifySubmitted] = useState<boolean>(false);

  // Sync initialCourseId and initialCategory if passed
  useEffect(() => {
    if (initialCourseId) {
      const found = COURSES.find(c => c.id === initialCourseId || c.slug === initialCourseId);
      if (found) {
        setSelectedCourse(found);
      }
    } else {
      setSelectedCourse(null);
    }

    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCourseId, initialCategory]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCourse]);

  const categories = ["All", "Continuing Education", "Licensing Education", "Professional Development"];

  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail.trim()) {
      setNotifySubmitted(true);
      setTimeout(() => {
        setNotifySubmitted(false);
        setNotifyModalCourse(null);
        setNotifyEmail("");
      }, 2500);
    }
  };

  const isProDev = selectedCourse?.category === "Professional Development";

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] pt-24 pb-28 text-left font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Breadcrumb & Navigation Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            onClick={() => {
              if (selectedCourse) {
                setSelectedCourse(null);
              } else {
                onBackToHome();
              }
            }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-gray-500 hover:text-black transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {selectedCourse ? "Back to Course Catalog" : "Back to Home"}
          </button>

          <div className="flex items-center gap-3 text-xs font-mono text-gray-400 font-medium">
            <span>UPGRADED REAL ESTATE ACADEMY</span>
            <span>/</span>
            <span className="text-black font-semibold">
              {selectedCourse ? selectedCourse.category : "COURSE CATALOG"}
            </span>
          </div>
        </div>

        {/* IF A COURSE IS SELECTED -> SHOW PRODUCT DETAIL PAGE */}
        {selectedCourse ? (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* PRODUCT HEADER BANNER */}
            <div className="bg-white border border-gray-150 rounded-3xl p-6 sm:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.02)] relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${isProDev ? "from-blue-50/70 via-indigo-50/30" : "from-emerald-50/50 via-gray-50/30"} to-transparent rounded-full blur-3xl pointer-events-none`} />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
                <div className="lg:col-span-8 space-y-6">
                  
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    {selectedCourse.dbprApproved && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-mono font-bold text-emerald-800 uppercase tracking-wider">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        Florida DBPR Approved
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-[11px] font-mono font-bold text-gray-700 uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      {selectedCourse.hours}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${isProDev ? "bg-blue-600 text-white" : "bg-black text-white"} text-[11px] font-mono font-bold uppercase tracking-wider`}>
                      {selectedCourse.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-3">
                    {selectedCourse.productCode && (
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${isProDev ? "text-blue-600 bg-blue-50 border-blue-200" : "text-emerald-600 bg-emerald-50 border-emerald-200"} px-2.5 py-1 rounded-md border inline-block`}>
                        {selectedCourse.productCode}
                      </span>
                    )}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight font-display leading-[1.15]">
                      {selectedCourse.title}
                    </h1>
                    {selectedCourse.heroTagline && (
                      <p className={`text-xl sm:text-2xl font-semibold ${isProDev ? "text-blue-600" : "text-emerald-700"} font-display`}>
                        {selectedCourse.heroTagline}
                      </p>
                    )}
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl font-medium">
                      {selectedCourse.headline}
                    </p>
                  </div>

                  {/* Trust Bar */}
                  {selectedCourse.trustBar && selectedCourse.trustBar.length > 0 && (
                    <div className={`p-4 ${isProDev ? "bg-blue-50/60 border-blue-200/60 text-blue-950" : "bg-emerald-50/60 border-emerald-200/60 text-emerald-950"} border rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold`}>
                      {selectedCourse.trustBar.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className={`w-4 h-4 ${isProDev ? "text-blue-600" : "text-emerald-600"} shrink-0`} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights Bar */}
                  <div className="pt-4 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-gray-600">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase text-gray-400 block">Access Period</span>
                      <p className="text-black font-semibold flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-gray-400" />
                        {selectedCourse.accessPeriod}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold uppercase text-gray-400 block">Languages</span>
                      <p className="text-black font-semibold flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-gray-400" />
                        {selectedCourse.language}
                      </p>
                    </div>
                    <div className="space-y-1 col-span-2 sm:col-span-1">
                      <span className="text-[10px] font-mono font-bold uppercase text-gray-400 block">Delivery Format</span>
                      <p className="text-black font-semibold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-500" />
                        100% Online Self-Paced
                      </p>
                    </div>
                  </div>

                </div>

                {/* PRICING & ENROLLMENT CTA CARD */}
                <div className="lg:col-span-4 bg-gray-50/80 border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                  <div className="space-y-2 border-b border-gray-200 pb-5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400 block">
                      Enrollment Fee
                    </span>
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl sm:text-5xl font-black text-black font-display tracking-tight">
                        {selectedCourse.price}
                      </span>
                      {selectedCourse.originalPrice && (
                        <span className="text-lg text-gray-400 line-through font-mono">
                          {selectedCourse.originalPrice}
                        </span>
                      )}
                    </div>
                    <p className={`text-xs ${isProDev ? "text-blue-700" : "text-emerald-700"} font-semibold flex items-center gap-1`}>
                      <Check className={`w-3.5 h-3.5 ${isProDev ? "text-blue-600" : "text-emerald-600"}`} />
                      Instant HighLevel Student Access Included
                    </p>
                  </div>

                  {/* Enroll CTA Button / Language Selection */}
                  {selectedCourse.isLive && selectedCourse.languageCheckouts && selectedCourse.languageCheckouts.length > 0 ? (
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-500 block text-center">
                        Choose Your Preferred Language
                      </span>
                      <p className="text-[11px] text-gray-500 text-center leading-snug">
                        Both courses provide the same curriculum and satisfy the same Professional Development learning objectives.
                      </p>
                      <div className="grid grid-cols-1 gap-2.5 pt-1">
                        {selectedCourse.languageCheckouts.map((lang, idx) => (
                          <a
                            key={idx}
                            href={lang.checkoutUrl || selectedCourse.checkoutUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-black hover:bg-neutral-900 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-between text-xs tracking-wide group cursor-pointer hover:scale-[1.01]"
                          >
                            <span className="flex items-center gap-2.5 whitespace-nowrap">
                              <span className="text-base leading-none">{lang.flag}</span>
                              <span className="font-bold text-xs uppercase tracking-wider">{lang.buttonText}</span>
                            </span>
                            <span className="flex items-center gap-1 shrink-0 ml-2">
                              <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </span>
                          </a>
                        ))}
                      </div>
                      <p className="text-[11px] text-gray-500 text-center leading-snug pt-1">
                        Need Help Choosing the Right Course? Request Your Upgraded Renewal Review™ below.
                      </p>
                    </div>
                  ) : selectedCourse.isLive && selectedCourse.checkoutUrl ? (
                    <div className="space-y-3">
                      <a
                        href={selectedCourse.checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-black hover:bg-neutral-900 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm uppercase tracking-wider group cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span>Enroll & Buy Course Now</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                      <p className="text-[11px] text-gray-500 text-center leading-snug">
                        Secure 256-bit checkout powered by HighLevel. Access details emailed instantly upon completion.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <button
                        onClick={() => setNotifyModalCourse(selectedCourse)}
                        className="w-full bg-black hover:bg-neutral-900 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer hover:scale-[1.01]"
                      >
                        <Mail className={`w-4 h-4 ${isProDev ? "text-blue-400" : "text-emerald-400"}`} />
                        <span>Notify Me When Available</span>
                      </button>
                      <p className={`text-[11px] ${isProDev ? "text-blue-900 bg-blue-50 border-blue-200/60" : "text-emerald-900 bg-emerald-50 border-emerald-200/60"} border p-2.5 rounded-lg text-center font-medium`}>
                        This course is currently in development. Click above to be notified as soon as enrollment opens.
                      </p>
                    </div>
                  )}

                  {/* Flow checklist */}
                  <div className="space-y-2 pt-2 border-t border-gray-200">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 block">
                      Enrollment Flow
                    </span>
                    <ol className="space-y-2 text-xs text-gray-600 font-medium">
                      <li className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                        <span>Click Enroll to proceed to HighLevel Checkout.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                        <span>Complete secure payment & receive login credentials.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-4 h-4 rounded-full bg-black text-white text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                        <span>Start coursework immediately in your Student Portal.</span>
                      </li>
                    </ol>
                  </div>

                  {/* Ask AI Advisor button */}
                  {onOpenChatWithPrompt && (
                    <button
                      onClick={() => onOpenChatWithPrompt(`I have questions about the "${selectedCourse.title}" course before enrolling.`)}
                      className="w-full bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-black" />
                      <span>Ask AI Advisor About This Course</span>
                    </button>
                  )}

                </div>
              </div>
            </div>

            {/* DETAILED COURSE CONTENT TABS & BODY */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Comprehensive Details */}
              <div className="lg:col-span-8 space-y-10">
                
                {/* 1. Overview & Description */}
                <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-10 space-y-4 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black">
                    <BookOpen className="w-4 h-4 text-black" />
                    <span>Course Overview</span>
                  </div>
                  <h2 className="text-2xl font-bold text-black font-display tracking-tight">
                    Program Overview
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line font-normal">
                    {selectedCourse.description}
                  </p>
                </div>

                {/* 2. Who Is This Course For */}
                <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black">
                    <UserCheck className="w-4 h-4 text-black" />
                    <span>Target Student Profile</span>
                  </div>
                  <h2 className="text-2xl font-bold text-black font-display tracking-tight">
                    Who This Course Is For
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedCourse.whoIsThisFor.map((item, idx) => (
                      <div key={idx} className="bg-gray-50 border border-gray-150 rounded-xl p-4 flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full ${isProDev ? "bg-blue-100 text-blue-800" : "bg-emerald-100 text-emerald-800"} flex items-center justify-center shrink-0 mt-0.5`}>
                          <Check className="w-3.5 h-3.5 font-bold" />
                        </div>
                        <p className="text-xs text-gray-700 leading-relaxed font-medium">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. What Students Will Learn */}
                <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black">
                    <Award className="w-4 h-4 text-black" />
                    <span>Learning Outcomes</span>
                  </div>
                  <h2 className="text-2xl font-bold text-black font-display tracking-tight">
                    What You Will Learn
                  </h2>
                  <div className="space-y-3">
                    {selectedCourse.whatYouWillLearn.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl border border-gray-100 bg-gray-50/50">
                        <span className="w-6 h-6 rounded-lg bg-black text-white text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs text-gray-700 leading-relaxed font-medium pt-0.5">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Course Features & Included Resources */}
                <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black">
                    <Layers className="w-4 h-4 text-black" />
                    <span>Included Resources</span>
                  </div>
                  <h2 className="text-2xl font-bold text-black font-display tracking-tight">
                    Course Features & Tools
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedCourse.features.map((feat, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-gray-150 bg-white shadow-xs space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 text-black flex items-center justify-center">
                          <CheckCircle2 className={`w-4 h-4 ${isProDev ? "text-blue-600" : "text-emerald-600"}`} />
                        </div>
                        <p className="text-xs font-bold text-gray-900 leading-snug">
                          {feat}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Which Florida Course Do I Need Table */}
                {selectedCourse.whichCourseTable && selectedCourse.whichCourseTable.length > 0 && (
                  <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black">
                      <HelpCircle className={`w-4 h-4 ${isProDev ? "text-blue-600" : "text-emerald-600"}`} />
                      <span>Requirements Guide</span>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-black font-display tracking-tight">
                        Which Florida Course Do I Need?
                      </h2>
                      <p className="text-xs text-gray-500">
                        The education you need depends on where you are in your Florida real estate licensing journey.
                      </p>
                    </div>

                    <div className="overflow-x-auto border border-gray-150 rounded-xl">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-gray-50 border-b border-gray-150 font-mono text-[11px] uppercase text-gray-600 font-bold">
                          <tr>
                            <th className="p-3.5">Your Current Situation</th>
                            <th className="p-3.5">Required Education</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 font-medium">
                          {selectedCourse.whichCourseTable.map((row, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/40"}>
                              <td className="p-3.5 text-gray-800">{row.situation}</td>
                              <td className="p-3.5 text-black font-bold font-mono">{row.requiredEducation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className={`p-4 ${isProDev ? "bg-blue-50/70 border-blue-200/80" : "bg-emerald-50/70 border-emerald-200/80"} border rounded-xl space-y-2 text-xs`}>
                      <p className={`font-bold ${isProDev ? "text-blue-950" : "text-emerald-950"}`}>Still unsure?</p>
                      <p className={`${isProDev ? "text-blue-900" : "text-emerald-900"} leading-relaxed`}>
                        Our Student Success Team is happy to help you determine which education requirement most likely applies to your current licensing status before you enroll.
                      </p>
                      {onOpenChatWithPrompt && (
                        <button
                          onClick={() => onOpenChatWithPrompt("I need help determining which Florida course applies to my licensing status before enrolling.")}
                          className={`inline-flex items-center gap-1.5 text-xs font-bold text-black ${isProDev ? "hover:text-blue-800" : "hover:text-emerald-800"} underline pt-1 cursor-pointer`}
                        >
                          Request Your Upgraded Renewal Review™
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* The Upgraded Renewal Review */}
                {selectedCourse.renewalReview && (
                  <div className="bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white rounded-2xl p-6 sm:p-10 space-y-6 shadow-xl">
                    <div className="space-y-2">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${isProDev ? "text-blue-400 bg-blue-950/80 border-blue-800" : "text-emerald-400 bg-emerald-950/80 border-emerald-800"} border px-3 py-1 rounded-full inline-block`}>
                        {selectedCourse.renewalReview.title}
                      </span>
                      <h2 className="text-2xl font-bold font-display text-white tracking-tight">
                        {selectedCourse.renewalReview.subtitle}
                      </h2>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                      {selectedCourse.renewalReview.paragraphs.map((para, idx) => (
                        <p key={idx}>{para}</p>
                      ))}
                    </div>

                    {selectedCourse.renewalReview.whyCreated && (
                      <div className="pt-4 border-t border-neutral-800 space-y-3">
                        <h3 className={`text-xs font-mono font-bold uppercase tracking-wider ${isProDev ? "text-blue-400" : "text-emerald-400"}`}>
                          Why We Created The Upgraded Renewal Review™
                        </h3>
                        <div className="space-y-2 text-xs text-gray-400 leading-relaxed">
                          {selectedCourse.renewalReview.whyCreated.map((item, idx) => (
                            <p key={idx}>{item}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Your Renewal Journey Starts Here */}
                {selectedCourse.renewalJourney && (
                  <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
                    <div className="space-y-2">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isProDev ? "text-blue-600 bg-blue-50 border-blue-200" : "text-emerald-600 bg-emerald-50 border-emerald-200"} border px-2.5 py-1 rounded-full inline-block`}>
                        Step-by-Step Experience
                      </span>
                      <h2 className="text-2xl font-bold text-black font-display tracking-tight">
                        {selectedCourse.renewalJourney.title}
                      </h2>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {selectedCourse.renewalJourney.subtitle}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedCourse.renewalJourney.items.map((item, idx) => (
                        <div key={idx} className="p-4 bg-gray-50 border border-gray-150 rounded-xl space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-black text-white text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                              {idx + 1}
                            </span>
                            <h3 className="text-xs font-bold text-black">{item.title}</h3>
                          </div>
                          <p className="text-xs text-gray-600 leading-relaxed font-normal pl-7">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Why Continuing Education Matters & Why Students Choose Upgraded */}
                {(selectedCourse.whyCEMatters || selectedCourse.whyChooseUpgraded) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {selectedCourse.whyCEMatters && (
                      <div className="bg-white border border-gray-150 rounded-2xl p-6 space-y-4 shadow-sm">
                        <h3 className="text-base font-bold text-black font-display">
                          Why Continuing Education Matters
                        </h3>
                        <div className="space-y-3 text-xs text-gray-600 leading-relaxed font-normal">
                          {selectedCourse.whyCEMatters.map((p, idx) => (
                            <p key={idx}>{p}</p>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedCourse.whyChooseUpgraded && (
                      <div className="bg-white border border-gray-150 rounded-2xl p-6 space-y-4 shadow-sm">
                        <h3 className="text-base font-bold text-black font-display">
                          Why Students Choose Upgraded
                        </h3>
                        <div className="space-y-3">
                          {selectedCourse.whyChooseUpgraded.map((item, idx) => (
                            <div key={idx} className="space-y-1">
                              <p className="text-xs font-bold text-black flex items-center gap-1.5">
                                <CheckCircle2 className={`w-3.5 h-3.5 ${isProDev ? "text-blue-600" : "text-emerald-600"} shrink-0`} />
                                {item.title}
                              </p>
                              <p className="text-[11px] text-gray-500 pl-5 leading-snug">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* How It Works Section */}
                {selectedCourse.howItWorks && (
                  <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-10 space-y-6 shadow-sm">
                    <div className="space-y-2">
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isProDev ? "text-blue-600 bg-blue-50 border-blue-200" : "text-emerald-600 bg-emerald-50 border-emerald-200"} border px-2.5 py-1 rounded-full inline-block`}>
                        Simple Process
                      </span>
                      <h2 className="text-2xl font-bold text-black font-display tracking-tight">
                        {selectedCourse.howItWorks.title}
                      </h2>
                    </div>

                    <div className="space-y-3">
                      {selectedCourse.howItWorks.steps.map((st, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-gray-50/80 border border-gray-150 rounded-xl">
                          <div className="bg-black text-white font-mono font-bold text-[11px] px-2.5 py-1 rounded-md shrink-0 w-fit">
                            {st.step}
                          </div>
                          <div className="space-y-0.5">
                            <h3 className="text-xs font-bold text-black">{st.title}</h3>
                            <p className="text-xs text-gray-600 leading-relaxed font-normal">{st.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Brokerage Access Notice */}
                {selectedCourse.brokerageNotice && (
                  <div className={`p-6 bg-gradient-to-r ${isProDev ? "from-slate-950 via-blue-950 to-black" : "from-emerald-950 via-neutral-900 to-black"} text-white rounded-2xl space-y-3 shadow-lg`}>
                    <div className={`flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest ${isProDev ? "text-blue-400" : "text-emerald-400"}`}>
                      <Building2 className={`w-4 h-4 ${isProDev ? "text-blue-400" : "text-emerald-400"}`} />
                      <span>{selectedCourse.brokerageNotice.title}</span>
                    </div>
                    <div className="space-y-2 text-xs text-gray-300 leading-relaxed font-normal">
                      {selectedCourse.brokerageNotice.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                    {onOpenChatWithPrompt && (
                      <button
                        onClick={() => onOpenChatWithPrompt("I need to verify my course access as an active agent.")}
                        className={`mt-2 inline-flex items-center gap-1.5 px-4 py-2 ${isProDev ? "bg-blue-500 hover:bg-blue-400" : "bg-emerald-500 hover:bg-emerald-400"} text-black font-bold text-xs rounded-lg transition-colors cursor-pointer`}
                      >
                        Verify My Course Access →
                      </button>
                    )}
                  </div>
                )}

                {/* Florida Licensing Notice */}
                {selectedCourse.licensingNotice && (
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-3 text-xs text-gray-500 leading-relaxed">
                    <div className="flex items-center gap-2 font-mono font-bold text-[10px] uppercase text-gray-700">
                      <Building2 className="w-4 h-4 text-gray-700" />
                      <span>Official Regulatory Notice</span>
                    </div>
                    {selectedCourse.licensingNotice.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                )}

              </div>

              {/* Right Sidebar: Key Specs & Trust Badges */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Provider Compliance Card */}
                <div className="bg-white border border-gray-150 rounded-2xl p-6 space-y-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-black border border-gray-200 shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-black font-display">Provider Details</h3>
                      <p className="text-[11px] text-gray-500">Upgraded Real Estate Academy LLC</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-gray-600 border-t border-gray-100 pt-3">
                    <div className="flex justify-between py-1 border-b border-gray-50">
                      <span className="text-gray-400">Regulatory Body:</span>
                      <span className="font-semibold text-black">Florida DBPR</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-50">
                      <span className="text-gray-400">Course Format:</span>
                      <span className="font-semibold text-black">Online Self-Paced</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-gray-50">
                      <span className="text-gray-400">Credit Submission:</span>
                      <span className={`font-semibold ${isProDev ? "text-blue-700" : "text-emerald-700"}`}>
                        {isProDev ? "Self-Paced Certificate" : "Automated Direct"}
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-gray-400">Support Email:</span>
                      <span className="font-semibold text-black">adriana@upgradedreacademy.com</span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Card */}
                {selectedCourse.isLive && selectedCourse.checkoutUrl && (
                  <div className="bg-black text-white rounded-2xl p-6 space-y-4 shadow-lg text-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold block">
                      Ready To Renew or Start?
                    </span>
                    <h3 className="text-lg font-bold font-display">
                      {selectedCourse.price} Full Access
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Enroll now to complete your course on your own schedule with direct Florida DBPR credit reporting.
                    </p>
                    <a
                      href={selectedCourse.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-white text-black hover:bg-gray-100 font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
                    >
                      <span>Proceed to HighLevel Checkout</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

              </div>

            </div>

          </motion.div>
        ) : (
          /* OTHERWISE -> CATALOG GRID VIEW */
          <div className="space-y-12">
            
            {/* Catalog Hero Banner */}
            <div className="bg-white border border-gray-150 rounded-3xl p-8 sm:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.01)] text-left relative overflow-hidden">
              <div className="max-w-3xl space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider text-gray-600">
                  <BookOpen className="w-3.5 h-3.5 text-black" />
                  Florida DBPR Approved Catalog
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold text-black tracking-tight font-display">
                  Explore Real Estate <span className="italic font-extrabold text-neutral-800">Courses</span>
                </h1>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  Browse our selection of Florida state-approved licensing courses, continuing education programs, and specialized real estate AI business playbooks.
                </p>
              </div>
            </div>

            {/* Filter Bar & Search */}
            <div className="bg-white border border-gray-150 rounded-2xl p-4 shadow-xs space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        selectedCategory === cat 
                          ? "bg-black text-white shadow-sm" 
                          : "text-gray-600 hover:text-black hover:bg-gray-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-64">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-4 py-2 text-xs text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition-all"
                  />
                </div>

              </div>
            </div>

            {/* COURSE CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white border border-gray-150 rounded-2xl p-6 flex flex-col justify-between hover:border-black hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer group relative overflow-hidden"
                  onClick={() => setSelectedCourse(course)}
                >
                  <div className="space-y-4">
                    
                    {/* Top Row Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                        {course.category}
                      </span>
                      {course.dbprApproved ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                          DBPR Approved
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                          {course.badge && course.badge.toLowerCase() !== course.category.toLowerCase() ? course.badge : "Pro Certificate"}
                        </span>
                      )}
                    </div>

                    {/* Course Title & Tagline */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-black font-display tracking-tight group-hover:text-black transition-colors leading-snug">
                        {course.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                        {course.headline}
                      </p>
                    </div>

                  </div>

                  {/* Bottom Meta & Action */}
                  <div className="pt-6 mt-6 border-t border-gray-100 space-y-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        {course.hours}
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-black text-black font-display">{course.price}</span>
                        {course.originalPrice && (
                          <span className="text-xs text-gray-400 line-through font-mono">{course.originalPrice}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCourse(course);
                        }}
                        className="flex-1 bg-gray-50 hover:bg-black hover:text-white border border-gray-200 text-black font-semibold text-xs py-2.5 px-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>View Program Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      {course.isLive && course.checkoutUrl && (
                        <a
                          href={course.checkoutUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="bg-black hover:bg-neutral-900 text-white font-bold text-xs py-2.5 px-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-1 shrink-0 cursor-pointer shadow-xs"
                          title="Direct HighLevel Enrollment"
                        >
                          <span>Buy</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="bg-white border border-gray-150 rounded-2xl p-12 text-center space-y-3">
                <p className="text-sm font-semibold text-gray-600">No courses match your search criteria.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-xs text-black underline font-mono font-bold uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </div>
            )}

          </div>
        )}

      </div>

      {/* NOTIFY WAITING LIST MODAL */}
      <GHLWaitingListModal 
        isOpen={!!notifyModalCourse} 
        onClose={() => setNotifyModalCourse(null)} 
        courseTitle={notifyModalCourse?.title} 
      />

    </div>
  );
}
