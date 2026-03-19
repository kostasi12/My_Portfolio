import { RevealOnScroll } from "./RevealOnScroll";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact({ t, lang }: { t: any; lang: string }) {
  const email = "kostassiam@gmail.com";

  return (
    /* ΑΛΛΑΓΗ: bg-slate-900 για το "ανοιχτό" μπλε φόντο που δένει με το Hero/About */
    <section id="contact" className="relative z-10 pt-8 pb-10 px-4 bg-slate-950/40 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-12 md:mb-16 text-balance">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-6 antialiased">
              {t.title}
            </h2>
            {/* ΑΛΛΑΓΗ: text-slate-400 για να ταιριάζει με το νέο φόντο */}
            <p className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-[0.18em] font-medium max-w-sm mx-auto opacity-70">
              {t.subtitle}
            </p>
          </div>
        </RevealOnScroll>

        {/* 1. Σταθερό Label - Start a conversation */}
        {/* ΑΛΛΑΓΗ: mb-3 md:mb-3 */}
        <p className="mt-1 md:mt-2 mb-1 text-[9px] md:text-[10px] text-slate-500 uppercase tracking-[0.4em] font-bold">
          {lang === 'el' ? 'Ξεκινήστε μια συζήτηση' : 'Start a conversation'}
        </p>

        {/* 2. Διαδραστικό Email Group - Με Κύκλο στο Βέλος */}
        <RevealOnScroll>
          <a
            href={`mailto:${email}`}
            className="group relative flex items-center gap-3 transition-all duration-500 transform hover:scale-105 will-change-transform"
          >
            {/* Mail Icon - Γίζεται ΜΠΛΕ στο hover */}
            <Mail
              size={22}
              className="text-slate-500 group-hover:text-blue-500 transition-colors duration-500 shrink-0"
              strokeWidth={1.2}
            />

            {/* Email Text - Γίνεται ΛΕΥΚΟ */}
            {/* text-slate-400 αρχικό χρώμα */}
            <span className="text-lg md:text-[1.5rem] font-light text-slate-400 group-hover:text-white transition-all duration-500 tracking-tight antialiased select-none">
              {email}
            </span>

            {/* Arrow Icon ΜΕΣΑ ΣΕ ΚΥΚΛΟ - Εμφανίζεται με slide effect */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full ml-0
             border border-slate-500/60
             transition-all duration-300 
             group-hover:border-blue-500
             group-hover:bg-blue-500/0
             group-hover:scale-105
             transform-gpu will-change-transform"
>
  <ArrowUpRight
    size={18}
    className="text-slate-400 transition-colors duration-300 group-hover:text-blue-400 transform-gpu"
    strokeWidth={1.5}
  />
</div>
          </a>
        </RevealOnScroll>

        {/*  Footer Detail */}
        <div className="mt-11 flex flex-col items-center gap-4">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
          {/* text-slate-500 */}
          <span className="text-[10px] md:text-[11px] text-slate-500 uppercase tracking-[0.4em] font-medium max-w-md mx-auto opacity-80 leading-relaxed">
            {lang === 'el' ? 'Θεσσαλονίκη, Ελλάδα' : 'Thessaloniki, Greece'}
          </span>
        </div>
      </div>
    </section>
  );
}