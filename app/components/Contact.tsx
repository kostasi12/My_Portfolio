import { RevealOnScroll } from "./RevealOnScroll";
import { Mail, ArrowUpRight, MoveDown } from "lucide-react";

export default function Contact({ t, lang }: { t: any; lang: string }) {
  const email = "kostassiam@gmail.com";

  return (
    <section id="contact" className="relative z-10 pt-10 pb-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-5 antialiased">
              {t.title}
            </h2>

            <p
              lang={lang}
              className="text-[11px] md:text-[12px] text-gray-400 uppercase tracking-[0.16em] font-medium max-w-lg mx-auto leading-relaxed"
            >
              {t.subtitle}
            </p>
          </div>
        </RevealOnScroll>

        {/* Elegant Arrow Separator */}
        <RevealOnScroll>
          <div className="flex flex-col items-center mb-6">
            <div className="w-px  bg-gradient-to-b from-transparent via-gray-500/60 to-transparent" />
            <MoveDown
              size={16}
              className="text-gray-600/70 mt-3 animate-bounce"
              strokeWidth={1.4}
            />
          </div>
        </RevealOnScroll>

        {/* Email Link Group */}
        <RevealOnScroll>
          <div className="group relative flex flex-col items-center justify-center w-full">
            
            {/* Let's build something together - Περισσότερο spacing (mb-6) */}
            <p className="mb-6 text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-all duration-500">
              Lets build something together
            </p>

            {/* Το Email Link - Με κίνηση δεξιά (translate-x-2) και κάτω (translate-y-1) */}
            <a
              href={`mailto:${email}`}
              className="relative flex items-center justify-center transition-all duration-500 transform hover:translate-x-0 hover:scale-105"
            >
              <div className="absolute -left-8 md:-left-7 flex-shrink-0">
                <Mail
                  size={18}
                  className="text-gray-500 group-hover:text-white transition-colors duration-500"
                  strokeWidth={1.2}
                />
              </div>

              <div className="relative">
                {/* Το χρώμα παραμένει γκρι/λευκό, χωρίς μπλε */}
                <span className="text-[15px] md:text-[17px] font-medium text-gray-400 group-hover:text-white tracking-tight transition-all duration-500 antialiased">
                  {email}
                </span>
              </div>

              {/* Hover Arrow - Πιο διακριτικό border */}
              <div className="absolute -right-10 md:-right-12 flex items-center justify-center w-8 h-8 border border-white/5 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-white/20 transition-all duration-500 ease-out">
                <ArrowUpRight size={15} className="text-white/70" strokeWidth={1.5} />
              </div>
            </a>
          </div>
        </RevealOnScroll>

        {/* Footer Detail */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gray-700/40 to-transparent"></div>

          <div className="flex items-center text-[9px] md:text-[10px] text-gray-600 font-bold uppercase tracking-[0.18em]">
            <span className="text-gray-500/80 cursor-default">
              Thessaloniki, Greece
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}