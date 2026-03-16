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
    <Coffee size={30} strokeWidth={2.5} className="text-blue-500 mb-3" />,        
    <ChartColumnIncreasing size={30} strokeWidth={2.5} className="text-blue-500 mb-3" />, 
    <BrainCircuit size={30} strokeWidth={2.5} className="text-blue-500 mb-3" />,  
    <Music size={30} strokeWidth={2.5} className="text-blue-500 mb-3" />,         
    <Layout size={30} strokeWidth={2.5} className="text-blue-500 mb-3" />,        
  ];

  return (
    <section id="projects" className="py-6 md:py-12 px-6 bg-gray-900/40"> 
      <div className="max-w-6xl mx-auto text-center"> 
        <RevealOnScroll>
          {/* Εδώ ρυθμίζουμε πόσο ύψος θα έχει ο τίτλος από τις καρτέλες */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-10 tracking-tight text-white">
            {t.title}
          </h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 items-stretch">
          {t.items.map((project: any, index: number) => (
            <div 
              key={index} 
              className={`flex ${index < 3 ? "md:col-span-2" : "md:col-span-3"}`}
            >
              <RevealOnScroll>
                <div className="h-full w-full flex flex-col">
                  {/* ΔΙΟΡΘΩΣΗ: 
                    1. Αλλάξαμε το transition-all σε transition-[transform,background-color]
                    2. Βάλαμε duration-0 στο border (μέσω της hover:duration-0) για να αλλάζει ακαριαία
                  */}
                  <div className="bg-gray-800/10 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-gray-800 
                                  hover:border-blue-500/50 hover:duration-0 
                                  transition-[transform,background-color] duration-300 
                                  flex flex-col items-center h-full shadow-xl text-center w-full group">
                    
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {projectIcons[index]}
                    </div>

                    <div className="h-[50px] flex items-center justify-center mb-2">
                      <h3 className="text-lg md:text-xl font-semibold text-white leading-tight px-2">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex-1">
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

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