import { RevealOnScroll } from "./RevealOnScroll";
import { Mail, ArrowDown, ArrowUpRight } from "lucide-react";

export default function Contact({ t }: any) {
  const email = "kostassiam@gmail.com";

  return (
    <section id="contact" className="relative z-10 pt-12 pb-20 px-4">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        
        <RevealOnScroll>
          <div className="flex flex-col items-center mb-12">
            {/* Τίτλος */}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 antialiased">
              {t.title}
            </h2>
            
            {/* Διακριτικό βέλος που δείχνει προς τα κάτω, προς το email */}
            <div className="text-gray-600 animate-bounce">
              <ArrowDown size={24} strokeWidth={1} />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex flex-col items-center">
            
            {/* Το Email Link - Χωρίς "κουτί", μόνο με Hover Effect */}
            <a 
              href={`mailto:${email}`}
              className="group relative flex items-center gap-3 transition-all duration-500"
            >
              {/* Το Icon της Mail - Σταθερό & Καθαρό */}
              <Mail 
                size={24} 
                className="text-gray-500 group-hover:text-white transition-colors duration-300" 
                strokeWidth={1.5} 
              />
              
              <span className="text-xl md:text-3xl font-medium text-gray-400 group-hover:text-white tracking-tighter transition-all">
                {email}
              </span>

              {/* Το Βελάκι που εμφανίζεται και "πετάει" στο hover */}
              <ArrowUpRight 
                size={24} 
                className="text-blue-500 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" 
              />
            </a>

            {/* Η διακοσμητική γραμμή κάτω από το email */}
            <div className="mt-4 h-px w-12 bg-gray-800 group-hover:w-full transition-all duration-700"></div>

            {/* Τοποθεσία - Σκέτη και Clean */}
            <div className="mt-16 text-center">
              <p className="text-[10px] text-gray-600 font-bold tracking-[0.5em] uppercase">
                Thessaloniki • Greece
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Footer Copyright */}
        <div className="mt-24 opacity-10">
           <p className="text-[9px] text-white font-bold tracking-widest uppercase italic">
             Built with Passion • 2026
           </p>
        </div>

      </div>
    </section>
  );
}