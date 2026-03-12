import { RevealOnScroll } from "./RevealOnScroll";
import { DiPython, DiReact, DiGit } from "react-icons/di";
import { FaBrain } from "react-icons/fa";

export default function About({ t }: any) {
  // Mapping των εικονιδίων
  const icons: any = {
    backend: <DiPython className="text-4xl text-blue-500 mb-4" />,
    frontend: <DiReact className="text-4xl text-blue-500 mb-4" />,
    ml: <FaBrain className="text-4xl text-blue-500 mb-4" />,
    tools: <DiGit className="text-4xl text-blue-500 mb-4" />,
  };

  return (
    <section id="about" className="py-32 px-6 bg-gray-900/40">
      <div className="max-w-5xl mx-auto">
        
        {/* ΕΝΟΤΗΤΑ: ΣΧΕΤΙΚΑ ΜΕ ΕΜΕΝΑ (ΠΑΝΩ) */}
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-semibold mb-8 tracking-tight text-white">
              {t.title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto text-justify">
              {t.text}
            </p>
          </div>
        </RevealOnScroll>

        {/*  ΔΕΞΙΟΤΗΤΕΣ ( */}
        <RevealOnScroll>
          <div className="text-center">
            <h2 className="text-4xl font-semibold mb-12 tracking-tight text-white">
              {t.skillsTitle}
            </h2>
            
            {/* 2x2 Grid για να είναι στο ίδιο ύψος  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {Object.entries(t.categories).map(([key, value]: any) => (
                <div 
                  key={key} 
                  className="bg-gray-800/10 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center group shadow-xl"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {icons[key]}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-3">{value}</h4>
                  
                  <div className="text-gray-500 text-xs leading-relaxed tracking-wide">
                    {key === 'backend' && "Python • Django • REST APIs • PostgreSQL"}
                    {key === 'frontend' && "React • Next.js • Tailwind • HTML • CSS • JS • Swift"}
                    {key === 'ml' && "PyTorch • Computer Vision • CNN • Transformers"}
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