import { RevealOnScroll } from "./RevealOnScroll";
import { DiPython, DiReact, DiGit } from "react-icons/di";
import { FaBrain } from "react-icons/fa";

export default function About({ t }: any) {
  const icons: any = {
    backend: <DiPython className="text-4xl text-blue-500 mb-4" />,
    frontend: <DiReact className="text-4xl text-blue-500 mb-4" />,
    ml: <FaBrain className="text-4xl text-blue-500 mb-4" />,
    tools: <DiGit className="text-4xl text-blue-500 mb-4" />,
  };

  return (
    <section id="about" className="py-8 md:py-16 px-2 md:px-6 bg-gray-900/40">
      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8 tracking-tight text-white">
              {t.title}
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-left md:text-justify">
              {t.text}
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-12 tracking-tight text-white">
              {t.skillsTitle}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {Object.entries(t.categories).map(([key, value]: any) => (
                <div 
                  key={key} 
                  className="bg-gray-800/10 backdrop-blur-sm p-4 md:p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center group shadow-xl"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {icons[key]}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-2">{value}</h4>
                  
                  <div className="text-gray-400 text-xs leading-relaxed tracking-wide whitespace-pre-line">
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