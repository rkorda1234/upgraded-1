import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Sparkles,
  Award,
  Users,
  Target,
  ShieldCheck,
  TrendingUp,
  Briefcase
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Image references
import leadershipHeroImg from "../assets/images/miami_leadership_1784827485850.jpg";
import licensingHeroImg from "../assets/images/licensing_hero_1784649720836.jpg";
import agentsCollaboratingImg from "../assets/images/agents_collaborating_1784649734023.jpg";
import adrianaHeadshotImg from "../assets/images/adriana_headshot_1784738478692.jpg";
import andresHeadshotImg from "../assets/images/andres_korda_headshot_1784820628787.jpg";
import enriqueHeadshotImg from "../assets/images/enrique_headshot_1784738489788.jpg";

interface LeadershipViewProps {
  onOpenChat: (prompt?: string) => void;
  onExploreLearningPaths: () => void;
}

export default function LeadershipView({ onOpenChat, onExploreLearningPaths }: LeadershipViewProps) {
  const [adrianaImgSrc, setAdrianaImgSrc] = useState("https://assets.cdn.filesafe.space/f9BI6PkMYA8EmsOEt8AU/media/6a5ff5113db5490e90c931fc.png");
  const [enriqueImgSrc, setEnriqueImgSrc] = useState("https://assets.cdn.filesafe.space/f9BI6PkMYA8EmsOEt8AU/media/6a623486f7d31b0eb4133359.png");
  const [andresImgSrc, setAndresImgSrc] = useState("https://assets.cdn.filesafe.space/f9BI6PkMYA8EmsOEt8AU/media/6a6234862e0540011f2ecfc3.png");
  const { isSpanish } = useLanguage();
  return (
    <div className="w-full flex flex-col">
      
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-28 px-6 overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="inline-block mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 border border-red-200/80 rounded-full shadow-sm text-xs font-semibold text-red-600">
                <span className="font-mono tracking-widest text-[9px] uppercase">
                  {isSpanish ? "Líderes y Visionarios de la Industria" : "Industry Leaders & Visionaries"}
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-black font-display leading-[1.05]">
              {isSpanish ? (
                <>
                  Construyendo el Futuro de la <br />
                  <span className="text-red-600 italic font-light">Educación Inmobiliaria Moderna.</span>
                </>
              ) : (
                <>
                  Building the Future of <br />
                  <span className="text-red-600 italic font-light">Modern Real Estate Education.</span>
                </>
              )}
            </h1>
            
            <p className="text-gray-900 font-sans text-base sm:text-lg leading-relaxed font-bold">
              {isSpanish ? (
                <>
                  Upgraded se fundó sobre una creencia simple: <br />
                  <span className="text-gray-500 font-medium">La educación en bienes raíces debe evolucionar junto con la industria a la que sirve.</span>
                </>
              ) : (
                <>
                  Upgraded was founded on a simple belief: <br />
                  <span className="text-gray-500 font-medium">Real estate education should evolve alongside the industry it serves.</span>
                </>
              )}
            </p>
            
            <div className="space-y-4 text-gray-500 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                {isSpanish 
                  ? "A medida que la tecnología transforma la profesión y las expectativas de los clientes continúan cambiando, la educación debe volverse más práctica, más relevante y más conectada con las habilidades que los profesionales necesitan hoy, no ayer." 
                  : "As technology transforms the profession and consumer expectations continue to change, education must become more practical, more relevant, and more connected to the skills professionals need today—not yesterday."}
              </p>
              
              <p className="border-l-2 border-red-200 pl-4 py-1 font-medium text-gray-700">
                {isSpanish 
                  ? "Juntos, nuestro liderazgo combina experiencia en bienes raíces, educación, emprendimiento, tecnología, innovación y estrategia empresarial con una sola misión compartida:" 
                  : "Together, our leadership combines expertise in real estate, education, entrepreneurship, technology, innovation, and business strategy with one shared mission:"}
              </p>
              
              <p className="text-red-600 font-bold">
                {isSpanish 
                  ? "Ayudar a los profesionales inmobiliarios a mantener su licencia, mantenerse relevantes y estar siempre a la vanguardia en cada etapa de su carrera." 
                  : "To help real estate professionals stay licensed, stay relevant, and stay ahead throughout every stage of their careers."}
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onExploreLearningPaths}
                className="bg-black hover:bg-neutral-900 text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2"
              >
                {isSpanish ? "Explorar Rutas de Aprendizaje" : "Explore Learning Paths"}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenChat(isSpanish ? "¿Quiénes fundaron Upgraded y cuál es su visión?" : "Who founded Upgraded and what is their vision?")}
                className="bg-white hover:bg-gray-50 text-black border border-gray-200 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-2"
              >
                {isSpanish ? "Consultar a la IA sobre el Liderazgo" : "Ask AI About Leadership"}
              </button>
            </div>
          </div>

          {/* Hero Image Frame */}
          <div className="lg:col-span-5">
            <div className="relative bg-white border border-gray-150 p-3 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent z-10" />
                <img
                  src={leadershipHeroImg}
                  alt="Upgraded Leadership Visionaries"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-5 left-5 right-5 z-20 text-left bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <span className="text-[9px] font-mono tracking-widest text-red-400 uppercase font-bold block mb-1">
                    {isSpanish ? "Aprobado por el DBPR de Florida" : "Florida DBPR Approved"}
                  </span>
                  <p className="text-white text-xs font-semibold leading-relaxed">
                    {isSpanish 
                      ? "Diseñado e impartido por expertos de la industria, pioneros e instructores certificados por el estado." 
                      : "Designed and taught by industry experts, pioneers, and state-certified instructors."}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </section>

      {/* 2. Why Professionals Trust Upgraded */}
      <section className="py-24 px-6 bg-gray-50/50 border-b border-gray-100 relative">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-block mb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full shadow-sm">
                {isSpanish ? "Por Qué los Profesionales Confían en Upgraded" : "Why Professionals Trust Upgraded"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight font-display">
              {isSpanish 
                ? "Experiencia real. Educación moderna. Una visión compartida." 
                : "Real-world experience. Modern education. One shared vision."}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Stat 1 */}
            <div className="bg-white border border-gray-150 rounded-2xl p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:border-red-200 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center border border-red-100 text-red-600">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-left">
                <span className="text-3xl font-extrabold tracking-tight text-black font-display block">2,000+</span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block font-bold">
                  {isSpanish ? "Profesionales Formados" : "Professionals Educated"}
                </span>
                <p className="text-gray-500 text-xs leading-relaxed pt-1">
                  {isSpanish 
                    ? "Más de dos mil agentes licenciados capacitados y empoderados para hacer crecer sus negocios." 
                    : "Over two thousand licensed agents trained and empowered to grow their practices."}
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-gray-150 rounded-2xl p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:border-red-200 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center border border-red-100 text-red-600">
                <Award className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-left">
                <span className="text-3xl font-extrabold tracking-tight text-black font-display block">
                  {isSpanish ? "+10 Años" : "10+ Years"}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block font-bold">
                  {isSpanish ? "Liderando en Educación" : "Leading Education"}
                </span>
                <p className="text-gray-500 text-xs leading-relaxed pt-1">
                  {isSpanish 
                    ? "Liderazgo activo en planes de estudio inmobiliarios y rutas de desarrollo profesional." 
                    : "Active leadership in real estate curriculum and professional development paths."}
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white border border-gray-150 rounded-2xl p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:border-red-200 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center border border-red-100 text-red-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-left">
                <span className="text-3xl font-extrabold tracking-tight text-black font-display block">
                  {isSpanish ? "Licenciada en Florida" : "Florida Licensed"}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block font-bold">
                  {isSpanish ? "Escuela de Bienes Raíces" : "Real Estate School"}
                </span>
                <p className="text-gray-500 text-xs leading-relaxed pt-1">
                  {isSpanish 
                    ? "Proveedor de educación estatal debidamente autorizado que cumple con rigurosos estándares de cumplimiento." 
                    : "Duly authorized state education provider meeting rigorous compliance standards."}
                </p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white border border-gray-150 rounded-2xl p-8 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:border-red-200 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center border border-red-100 text-red-600">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-left">
                <span className="text-3xl font-extrabold tracking-tight text-black font-display block">
                  {isSpanish ? "Líderes del Sector" : "Industry Leaders"}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block font-bold">
                  {isSpanish ? "Estándar Fundacional" : "Founding Standard"}
                </span>
                <p className="text-gray-500 text-xs leading-relaxed pt-1">
                  {isSpanish 
                    ? "Impulsado por experiencia práctica en Educación • Innovación • Tecnología • Estrategia Comercial." 
                    : "Driven by real-world expertise in Education • Innovation • Technology • Business Strategy."}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Our Founding Team Section */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Section title */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-block">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full shadow-sm">
                {isSpanish ? "Nuestro Equipo Fundador" : "Our Founding Team"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight font-display">
              {isSpanish ? "Conoce a los Fundadores" : "Meet the Founders"}
            </h2>
            <p className="text-gray-500 text-sm">
              {isSpanish 
                ? "Destacados instructores de bienes raíces, creadores de tecnología y experimentados ejecutivos corporativos." 
                : "Accomplished real estate instructors, technology creators, and seasoned corporate executives."}
            </p>
          </div>

          {/* Co-Founders details blocks */}
          <div className="space-y-16">
            
            {/* Founder 1: Adriana Rodriguez */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-150 rounded-3xl p-8 lg:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.01)] hover:border-red-200 transition-all duration-350 text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Visual indicator and name */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-red-50 text-red-600 rounded-2xl border border-red-100 shadow-sm">
                    <Award className="w-7 h-7" />
                  </div>

                  {/* High-fidelity Photo Headshot */}
                  <div className="relative w-full aspect-square max-w-[200px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100/60 to-gray-50 border border-gray-150 flex flex-col items-center justify-center shadow-inner group/headshot">
                    <img
                      src={adrianaImgSrc}
                      onError={() => setAdrianaImgSrc(adrianaHeadshotImg)}
                      alt="Adriana Rodriguez"
                      className="w-full h-full object-cover rounded-2xl absolute inset-0 z-20"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px] opacity-40 z-0" />
                    <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-red-500/[0.03] group-hover/headshot:scale-125 transition-transform duration-500" />
                    <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-red-500/[0.03] group-hover/headshot:scale-125 transition-transform duration-500" />
                    <span className="font-display text-4xl font-extrabold text-red-600/20 group-hover/headshot:text-red-600/35 group-hover/headshot:scale-105 transition-all duration-300 select-none z-10">
                      AR
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-black tracking-tight font-display">
                      Adriana Rodriguez
                    </h3>
                    <p className="text-red-600 text-xs font-mono font-extrabold uppercase tracking-wider mt-1">
                      {isSpanish ? "Cofundadora y CEO" : "Co-Founder & CEO"}
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-block text-[10px] font-mono uppercase bg-gray-100 px-2.5 py-1 rounded text-gray-500 font-semibold tracking-wider">
                      {isSpanish ? "Ingeniera de Sistemas" : "Systems Engineer"}
                    </span>
                  </div>
                </div>

                {/* Subtitle and Bio */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="border-l-4 border-red-600 pl-4">
                    <p className="text-sm sm:text-base font-bold text-black font-sans leading-relaxed">
                      {isSpanish 
                        ? "Instructora de Bienes Raíces de Florida • Broker Asociada Licenciada en Florida • Autora • Emprendedora" 
                        : "Florida Real Estate Instructor • Florida Licensed Broker Associate • Author • Entrepreneur"}
                    </p>
                  </div>

                  <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                    <p>
                      {isSpanish 
                        ? "Adriana Rodríguez es instructora de bienes raíces de Florida, Broker Asociada licenciada en Florida, emprendedora, autora y cofundadora y CEO de Upgraded Real Estate Academy. Combinando su formación en Ingeniería de Sistemas con estudios especializados en Psicomarketing y Crecimiento Empresarial, ha dedicado más de una década a ayudar a profesionales inmobiliarios a construir negocios más sólidos mediante educación, sistemas y estrategias basadas en relaciones." 
                        : "Adriana Rodriguez is a Florida Real Estate Instructor, Florida Licensed Broker Associate, entrepreneur, author, and Co-Founder & CEO of Upgraded Real Estate Academy. Combining her background in Systems Engineering with specialized studies in Psychomarketing and Business Growth, she has spent more than a decade helping real estate professionals build stronger businesses through education, systems, and relationship-based strategies."}
                    </p>
                    <p>
                      {isSpanish 
                        ? "Durante los últimos 10 años, Adriana ha capacitado y guiado a más de 2,000 profesionales de bienes raíces a través de educación de licencias, mentorías estratégicas, talleres, conferencias e iniciativas de desarrollo comercial. Su labor ha ayudado a agentes a fortalecer relaciones con clientes, generar más recomendaciones, hacer crecer sus empresas y adaptarse a una industria en constante cambio." 
                        : "Over the past 10 years, Adriana has trained and guided more than 2,000 real estate professionals through licensing education, strategic coaching, workshops, conferences, and business development initiatives. Her work has helped agents strengthen client relationships, generate more referrals, grow their businesses, and adapt to an ever-changing industry."}
                    </p>
                    <p>
                      {isSpanish 
                        ? "También se desempeña como Chief Community Officer en Avanti Way Realty, donde lidera educación, desarrollo profesional, eventos y proyectos comunitarios. Apasionada por la innovación y el futuro de la educación inmobiliaria, Adriana continúa diseñando experiencias modernas de aprendizaje que ayudan a los profesionales a simplificar la complejidad, implementar con confianza y mantenerse a la vanguardia." 
                        : "She also serves as Chief Community Officer at Avanti Way Realty, where she leads education, professional development, events, and community initiatives. Passionate about innovation and the future of real estate education, Adriana continues to design modern learning experiences that help professionals simplify complexity, implement with confidence, and stay ahead in a rapidly evolving industry."}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenChat(isSpanish ? "Cuéntame más sobre la trayectoria de Adriana Rodríguez" : "Tell me more about Adriana Rodriguez's background")}
                      className="text-xs font-bold text-red-600 hover:text-red-800 transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      {isSpanish ? "Consultar al Asesor IA de Adriana" : "Ask Adriana's Advisor AI"}
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Founder 2: Enrique Terán */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-150 rounded-3xl p-8 lg:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.01)] hover:border-red-200 transition-all duration-350 text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Visual indicator and name */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-red-50 text-red-600 rounded-2xl border border-red-100 shadow-sm">
                    <TrendingUp className="w-7 h-7" />
                  </div>

                  {/* High-fidelity Photo Headshot */}
                  <div className="relative w-full aspect-square max-w-[200px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100/60 to-gray-50 border border-gray-150 flex flex-col items-center justify-center shadow-inner group/headshot">
                    <img
                      src={enriqueImgSrc}
                      onError={() => setEnriqueImgSrc(enriqueHeadshotImg)}
                      alt="Enrique Terán"
                      className="w-full h-full object-cover rounded-2xl absolute inset-0 z-20"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px] opacity-40 z-0" />
                    <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-red-500/[0.03] group-hover/headshot:scale-125 transition-transform duration-500" />
                    <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-red-500/[0.03] group-hover/headshot:scale-125 transition-transform duration-500" />
                    <span className="font-display text-4xl font-extrabold text-red-600/20 group-hover/headshot:text-red-600/35 group-hover/headshot:scale-105 transition-all duration-300 select-none z-10">
                      ET
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-black tracking-tight font-display">
                      Enrique Terán
                    </h3>
                    <p className="text-red-600 text-xs font-mono font-extrabold uppercase tracking-wider mt-1">
                      {isSpanish ? "Cofundador y CEO" : "Co-Founder & CEO"}
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-block text-[10px] font-mono uppercase bg-gray-100 px-2.5 py-1 rounded text-gray-500 font-semibold tracking-wider">
                      {isSpanish ? "Innovador Tecnológico" : "Technology Innovator"}
                    </span>
                  </div>
                </div>

                {/* Subtitle and Bio */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="border-l-4 border-red-600 pl-4">
                    <p className="text-sm sm:text-base font-bold text-black font-sans leading-relaxed">
                      {isSpanish 
                        ? "Ejecutivo Inmobiliario • Emprendedor • Innovador Tecnológico" 
                        : "Real Estate Executive • Entrepreneur • Technology Innovator"}
                    </p>
                  </div>

                  <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                    <p>
                      {isSpanish 
                        ? "La pasión y comprensión de Enrique por el sector inmobiliario comenzaron a través del negocio familiar. Durante los primeros años de su carrera, cerró más de 200 transacciones inmobiliarias, una experiencia que inspiró su visión de transformar la forma en que trabajan los profesionales del sector." 
                        : "Enrique's lifelong passion and understanding of the real estate industry began through his family's business. During the first years of his career, he closed more than 200 real estate transactions, an experience that inspired his vision to transform the way real estate professionals work."}
                    </p>
                    <p>
                      {isSpanish 
                        ? "Impulsado por la innovación, Enrique creó una de las primeras plataformas de transacciones sin papel de la industria, ayudando a modernizar la experiencia inmobiliaria mediante la tecnología. Como cofundador y CEO de Avanti Way Group, ha contribuido a construir una de las organizaciones inmobiliarias más innovadoras y productivas de Florida." 
                        : "Driven by innovation, Enrique created one of the industry's first paperless transaction platforms, helping modernize the real estate experience through technology. As Co-Founder & CEO of Avanti Way Group, he has helped build one of Florida's most innovative and productive real estate organizations."}
                    </p>
                    <p>
                      {isSpanish 
                        ? "Enrique también se desempeñó como Presidente Residencial en 2022 de la Asociación de REALTORS® de Miami, lo que refleja su constante compromiso con el liderazgo, la innovación y la excelencia profesional." 
                        : "Enrique also served as the 2022 Residential President of the Miami Association of REALTORS®, reflecting his long-standing commitment to leadership, innovation, and professional excellence."}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenChat(isSpanish ? "Cuéntame más sobre los logros de Enrique Terán" : "Tell me more about Enrique Terán's accomplishments")}
                      className="text-xs font-bold text-red-600 hover:text-red-800 transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      {isSpanish ? "Consultar al Asesor IA de Enrique" : "Ask Enrique's Advisor AI"}
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Founder 3: Andrés Korda */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-150 rounded-3xl p-8 lg:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.01)] hover:border-red-200 transition-all duration-350 text-left"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Visual indicator and name */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-red-50 text-red-600 rounded-2xl border border-red-100 shadow-sm">
                    <Briefcase className="w-7 h-7" />
                  </div>

                  {/* High-fidelity Photo Headshot */}
                  <div className="relative w-full aspect-square max-w-[200px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100/60 to-gray-50 border border-gray-150 flex flex-col items-center justify-center shadow-inner group/headshot">
                    <img
                      src={andresImgSrc}
                      onError={() => setAndresImgSrc(andresHeadshotImg)}
                      alt="Andrés Korda"
                      className="w-full h-full object-cover rounded-2xl absolute inset-0 z-20"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px] opacity-40 z-0" />
                    <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-red-500/[0.03] group-hover/headshot:scale-125 transition-transform duration-500" />
                    <div className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-red-500/[0.03] group-hover/headshot:scale-125 transition-transform duration-500" />
                    <span className="font-display text-4xl font-extrabold text-red-600/20 group-hover/headshot:text-red-600/35 group-hover/headshot:scale-105 transition-all duration-300 select-none z-10">
                      AK
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-black tracking-tight font-display">
                      Andrés Korda
                    </h3>
                    <p className="text-red-600 text-xs font-mono font-extrabold uppercase tracking-wider mt-1">
                      {isSpanish ? "Cofundador y CEO" : "Co-Founder & CEO"}
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-block text-[10px] font-mono uppercase bg-gray-100 px-2.5 py-1 rounded text-gray-500 font-semibold tracking-wider">
                      {isSpanish ? "MBA de Babson y Egresado de Georgetown" : "Georgetown & Babson MBA"}
                    </span>
                  </div>
                </div>

                {/* Subtitle and Bio */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="border-l-4 border-red-600 pl-4">
                    <p className="text-sm sm:text-base font-bold text-black font-sans leading-relaxed">
                      {isSpanish 
                        ? "Emprendedor • Ejecutivo Inmobiliario • Estratega de Negocios" 
                        : "Entrepreneur • Real Estate Executive • Business Strategist"}
                    </p>
                  </div>

                  <div className="space-y-4 text-gray-500 text-sm leading-relaxed">
                    <p>
                      {isSpanish 
                        ? "Andrés Korda es graduado de la Universidad de Georgetown, posee un MBA de Babson College, y es un destacado emprendedor y ejecutivo inmobiliario. Como cofundador y CEO de Avanti Way Group, ha ayudado a construir uno de los ecosistemas inmobiliarios más innovadores de la industria al integrar corretaje, tecnología, títulos, administración de propiedades y servicios de inversión en una plataforma unificada." 
                        : "Andrés Korda is a Georgetown University graduate, Babson MBA, entrepreneur, and real estate executive. As Co-Founder & CEO of Avanti Way Group, he has helped build one of the industry's most innovative real estate ecosystems by integrating brokerage, technology, title, property management, and investment services into a unified platform."}
                    </p>
                    <p>
                      {isSpanish 
                        ? "Reconocido por su liderazgo y logros empresariales, Andrés ha sido incluido en las prestigiosas listas 40 Under 40 y Power Leaders del South Florida Business Journal. Su pasión por la innovación, la tecnología y el crecimiento estratégico continúa impulsando organizaciones que generan oportunidades de alto valor para profesionales de bienes raíces, clientes e inversores." 
                        : "Recognized for his leadership and entrepreneurial achievements, Andrés has been named to the South Florida Business Journal's 40 Under 40 and Power Leaders lists. His passion for innovation, technology, and strategic growth continues to drive organizations that create opportunities for real estate professionals, clients, and investors."}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenChat(isSpanish ? "Cuéntame más sobre la experiencia en estrategia de negocios de Andrés Korda" : "Tell me more about Andrés Korda's business strategy background")}
                      className="text-xs font-bold text-red-600 hover:text-red-800 transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                    >
                      {isSpanish ? "Consultar al Asesor IA de Andrés" : "Ask Andrés's Advisor AI"}
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. One Shared Vision Section */}
      <section className="py-24 px-6 bg-gray-50/50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-50 rounded-full opacity-50 blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <div className="inline-block">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full shadow-sm">
              {isSpanish ? "Una Visión Compartida" : "One Shared Vision"}
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight leading-tight font-display">
              {isSpanish ? (
                <>
                  Diferentes trayectorias. <br />
                  <span className="text-red-600 italic font-light">Un solo propósito compartido.</span>
                </>
              ) : (
                <>
                  Different backgrounds. <br />
                  <span className="text-red-600 italic font-light">One shared purpose.</span>
                </>
              )}
            </h2>
            <p className="text-gray-800 text-sm sm:text-base font-bold font-sans max-w-2xl mx-auto">
              {isSpanish 
                ? "Nos une la convicción de que la educación en bienes raíces debe hacer mucho más que cumplir con los requisitos de licencia: debe preparar a los profesionales para lo que viene." 
                : "We're united by the belief that real estate education should do more than satisfy licensing requirements—it should prepare professionals for what's next."}
            </p>
          </div>

          <div className="bg-white border border-gray-150 rounded-3xl p-8 lg:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.01)] hover:border-red-100 transition-all text-left space-y-6 max-w-3xl mx-auto">
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              {isSpanish 
                ? "Por eso estamos construyendo una plataforma de educación moderna que combina educación obligatoria para licencias, desarrollo profesional, tecnología e innovación, ayudando a los profesionales inmobiliarios a seguir aprendiendo, adaptándose y creciendo en cada etapa de su carrera." 
                : "That's why we're building a modern education platform that combines licensing education, professional development, technology, and innovation to help real estate professionals continue learning, adapting, and growing throughout every stage of their careers."}
            </p>
            <p className="text-gray-900 font-bold text-sm sm:text-base border-t border-gray-100 pt-6">
              {isSpanish 
                ? "Porque el futuro pertenece a los profesionales que nunca dejan de superarse." 
                : "Because the future belongs to professionals who never stop upgrading."}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Bottom Call-to-Action Section */}
      <section className="relative py-28 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3.5 py-1 rounded-full border border-red-200 shadow-sm">
                {isSpanish ? "Únete a la Academia" : "Join the Academy"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-black tracking-tight leading-tight font-display">
              {isSpanish ? "¿LISTO PARA INICIAR TU PRÓXIMO UPGRADE?" : "READY TO START YOUR NEXT UPGRADE?"}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {isSpanish 
                ? "Ya sea que estés obteniendo tu licencia, manteniéndola activa o invirtiendo en tu desarrollo profesional, estamos aquí para respaldar tu siguiente paso." 
                : "Whether you're earning your license, maintaining it, or investing in your professional development, we're here to support your next step."}
            </p>
          </div>

          <div className="pt-2 flex flex-col items-center gap-4">
            <button
              onClick={onExploreLearningPaths}
              className="bg-black hover:bg-neutral-900 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              {isSpanish ? "Explorar Rutas de Aprendizaje" : "Explore Learning Paths"}
            </button>
            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 font-bold uppercase tracking-widest pt-2">
              <span>{isSpanish ? "Donde los Agentes Modernos se Superan a Sí Mismos." : "Where Modern Agents Upgrade Themselves."}</span>
              <span className="text-red-300">•</span>
              <span>{isSpanish ? "Educación Que Evoluciona Contigo." : "Education That Evolves With You."}</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
