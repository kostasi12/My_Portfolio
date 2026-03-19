import { RevealOnScroll } from "./RevealOnScroll";
import { DiPython, DiReact, DiGit } from "react-icons/di";
import { FaBrain } from "react-icons/fa";

export default function About({ t }: any) {
  const icons: any = {
    backend: <DiPython className="text-4xl text-blue-500 mb-4" />,
    frontend: <DiReact className="text-4xl text-blue-500 mb-4" />,
    ml: <FaBrain className="text-3xl text-blue-500 mb-5" />,
    tools: <DiGit className="text-4xl text-blue-500 mb-4" />,
  };

  return (
    /* ΑΛΛΑΓΗ: bg-slate-900 για το "ανοιχτό" μπλε που ζήτησες αντί για το μαύρο ή το gray-900/15 */
    <section id="about" className="relative z-10 py-6 pb-10 md:pt-10 md:pb-14 px-0 bg-slate-950/60 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        
        {/* ΚΕΙΜΕΝΟ ABOUT */}
        <RevealOnScroll>
          <div className="text-center mb-10 md:mb-14 px-4">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8 tracking-tight text-white">
              {t.title}
            </h2>
            {/* ΑΛΛΑΓΗ: text-slate-400 για ομοιομορφία */}
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-left md:text-justify">
              {t.text}
            </p>
          </div>
        </RevealOnScroll>

        {/* SKILLS */}
        <RevealOnScroll>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8 tracking-tight text-white">
              {t.skillsTitle}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto px-6 md:px-0">
              {Object.entries(t.categories).map(([key, value]: any) => (
                /* ΑΛΛΑΓΗ: bg-slate-950 για τις κάρτες και border-slate-800. Αφαιρέθηκε το shadow/blur */
                <div 
                  key={key} 
                  className="bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-slate-800 
                             hover:border-blue-500/50 hover:duration-0 
                             transition-[transform,background-color] duration-300 
                             flex flex-col items-center group relative"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {icons[key]}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-2">{value}</h4>
                  
                  {/* ΑΛΛΑΓΗ: text-slate-400 */}
                  <div className="text-slate-400 text-xs leading-relaxed tracking-wide whitespace-pre-line text-center">
                    {key === 'backend' && (
                        <>Python • Django {"\n"} REST APIs • PostgreSQL</>
                    )}
                    {key === 'frontend' && (
                        <>React • Next.js • Tailwind • HTML {"\n"} CSS • JS • Swift</>
                    )}
                    {key === 'ml' && (
                        <>PyTorch • Computer Vision {"\n"} CNN • Transformers</>
                    )}
                    {key === 'tools' && "Git • GitHub • Postman"}
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