import { RevealOnScroll } from "./RevealOnScroll";
import { DiPython, DiReact, DiGit } from "react-icons/di";
import { FaBrain } from "react-icons/fa";

export default function About({ t }: any) {
  const icons: any = {
    backend: <DiPython className="text-4xl text-blue-500 mb-3" />,
    frontend: <DiReact className="text-4xl text-blue-500 mb-3" />,
    ml: <FaBrain className="text-3xl text-blue-500 mb-3" />,
    tools: <DiGit className="text-4xl text-blue-500 mb-3" />,
  };

  return (
    /* pt-6 αντί για 8 για να έρθει λίγο πιο πάνω */
    <section id="about" className="relative z-10 pt-6 pb-10 md:pb-14 px-0 bg-slate-950/60 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        
        {/* Κείμενο Αbout */}
        <RevealOnScroll>
          <div className="text-center mb-10 md:mb-14 px-6">
            {/* mb-4 στο κινητό για να έρθει πιο κοντά το κείμενο */}
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-6 tracking-tight text-white antialiased">
              {t.title}
            </h2>
            
            {/* ΑΛΛΑΓΗ ΓΙΑ ΟΜΟΙΟΜΟΡΦΙΑ:
                text-center (mobile) -> md:text-justify (desktop)
                text-base (mobile) -> md:text-lg (desktop)
                md:max-w-2xl (αντί για 3xl) στο desktop για να μην απλώνει πολύ η δικαιολόγηση
                [text-wrap:balance] -> md:[text-wrap:pretty] (desktop) για καλύτερο σπάσιμο γραμμών
            */}
            <p className="text-slate-400 text-base md:text-lg leading-relaxed mx-auto 
                          text-center  
                          max-w-[95ch] md:max-w-[65ch] 
                          -mt-2 md:mt-0 
                          [text-wrap:pretty] 
                          antialiased">
              {t.text}
            </p>
          </div>
        </RevealOnScroll>

        {/* SKILLS */}
        <RevealOnScroll>
          <div className="text-center">
            {/* ΔΙΟΡΘΩΣΗ: mb-4 στο κινητό */}
            <h2 className="text-3xl md:text-4xl font-semibold mb-5 md:mb-8 tracking-tight text-white antialiased">
              {t.skillsTitle}
            </h2>
                {/* Είχα md:px-0 κα μετά έβαλα σκετο p-2 */}                                                                
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-8 md:px-0">
              {Object.entries(t.categories).map(([key, value]: any) => (
                <div 
                  key={key} 
                  className="bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-slate-800 
                               hover:border-blue-500/50 hover:duration-0 
                               transition-[transform,background-color] duration-300 
                               flex flex-col items-center group relative"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300 transform-gpu translate-z-0 h-12 flex items-center justify-center">
                    {icons[key]}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-2 antialiased">{value}</h4>
                  
                  <div className="text-slate-400 text-xs leading-relaxed tracking-wide whitespace-pre-line text-center opacity-90">
                    {key === 'backend' && (
                        <>Python • Django {"\n"} REST APIs • PostgreSQL</>
                    )}
                    {key === 'frontend' && (
                        <>React • Next.js • Tailwind • HTML {"\n"} CSS • JS • Swift</>
                    )}
                    {key === 'ml' && (
                        <>PyTorch • Computer Vision {"\n"} CNN • Transformers</>
                    )}
                    {key === 'tools' && (
                        <> Git • GitHub • Postman • Vercel </> 

                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}