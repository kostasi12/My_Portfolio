import { RevealOnScroll } from "./RevealOnScroll";
import { 
  Coffee, 
  ChartColumnIncreasing, 
  BrainCircuit, 
  Music, 
  Layout 
} from "lucide-react";

export default function Projects({ t }: any) {
  const projectIcons = [
    <Coffee size={30} strokeWidth={2.5} className="text-blue-500 mb-2" />,        
    <ChartColumnIncreasing size={30} strokeWidth={2.5} className="text-blue-500 mb-2" />, 
    <BrainCircuit size={30} strokeWidth={2.5} className="text-blue-500 mb-2" />,  
    <Music size={30} strokeWidth={2.5} className="text-blue-500 mb-2" />,         
    <Layout size={30} strokeWidth={2.5} className="text-blue-500 mb-2" />,         
  ];

  return ( 
    /* Φόντο slate-950 για ομοιομορφία με το Experience */
    <section id="projects" className="relative z-10 pt-6 pb-10 md:pt-10 md:pb-14 px-8 bg-slate-950/60 overflow-hidden"> 
      
      <div className="max-w-5xl mx-auto text-center"> 
        
        <RevealOnScroll>
          <div className="mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              {t.title}
            </h2>
          </div>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 items-stretch">
          {t.items.map((project: any, index: number) => (
            <div 
              key={index} 
              className={`flex ${index < 3 ? "md:col-span-2" : "md:col-span-3"}`}
            >
              <RevealOnScroll>
                <div className="h-full w-full flex flex-col">
                  {/* ΑΛΛΑΓΗ bg-slate-900/50 για ομοιομορφία με τις κάρτες του Experience */}
                  <div className="bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-slate-800 
                                  hover:border-blue-500/50 hover:duration-0 
                                  transition-[transform,background-color] duration-300 
                                  flex flex-col items-center h-full text-center w-full group relative">
                    
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {projectIcons[index]}
                    </div>

                    <div className="h-[35px] md:h-[50px] flex items-center justify-center mb-1">
                      <h3 className="text-lg md:text-xl font-semibold text-white leading-tight px-0">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex-1 mt-0">
                      {/* text-slate-400 για καθαρή αντίθεση πάνω στο σκούρο μπλε */}
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}