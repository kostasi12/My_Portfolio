import { RevealOnScroll } from "./RevealOnScroll";
import { Mail, ArrowUpRight, MoveDown } from "lucide-react";

export default function Contact({ t, lang }: { t: any, lang: string }) {
  const email = "kostassiam@gmail.com";

  return (
    <section id="contact" className="relative z-10 pt-8 pb-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-6 antialiased">
              {t.title}
            </h2>
            
            <p 
              lang={lang}
              className="text-[10px] md:text-[11px] text-gray-500 uppercase tracking-[0.4em] font-medium max-w-md mx-auto leading-relaxed opacity-80"
            >
              {t.subtitle}
            </p>
          </div>
        </RevealOnScroll>

        {/* Floating Arrow - Το βέλος με τη γραμμή που κινείται */}
        <RevealOnScroll>
          <div className="flex justify-center mb-6">
            <MoveDown 
              size={22} 
              className="text-gray-500/80 animate-bounce" 
              strokeWidth={1.5}
            />
          </div>
        </RevealOnScroll>

        {/* Email Link Group */}
        <RevealOnScroll>
          <div className="group relative flex justify-center w-full">
            <a 
              href={`mailto:${email}`}
              className="relative flex items-center justify-center transition-all duration-500 hover:scale-105"
            >
              <div className="absolute -left-7 md:-left-8 flex-shrink-0">
                <Mail 
                  size={18} 
                  className="text-gray-600 group-hover:text-blue-400 transition-colors duration-500" 
                  strokeWidth={1.5} 
                />
              </div>
              
              <div className="relative">
                <span className="text-[14px] md:text-[16px] font-medium text-gray-500 group-hover:text-gray-200 tracking-tight transition-all duration-500">
                  {email}
                </span>
                {/* Αφαιρέσαμε την μπλε γραμμή από κάτω για να είναι πιο clean όπως είπαμε */}
              </div>

              {/* Το βέλος στα δεξιά που εμφανίζεται στο hover */}
              <div className="absolute -right-10 md:-right-12 flex items-center justify-center w-9 h-9 border border-gray-800 rounded-full opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all duration-500 ease-out">
                <ArrowUpRight size={16} className="text-blue-400" strokeWidth={2} />
              </div>
            </a>
          </div>
        </RevealOnScroll>

        {/* Footer Detail */}
        <div className="mt-10 flex flex-col items-center gap-3"> 
           <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
           
           <div className="flex items-center text-[9px] md:text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
              <span className="text-gray-500 cursor-default">
                Thessaloniki, Greece
              </span>
           </div>
        </div>

      </div>
    </section>
  );
}