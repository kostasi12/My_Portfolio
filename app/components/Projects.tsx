import { RevealOnScroll } from "./RevealOnScroll";

export default function Projects({ t }: any) {
  return (
    <section id="projects" className="py-6 md:py-16 px-6 bg-gray-900/40"> 
      <div className="max-w-6xl mx-auto text-center"> 
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-12 tracking-tight text-white">
            {t.title}
          </h2>
        </RevealOnScroll>
        
        {/* Horizontal Scroll Wrapper */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {t.items.map((project: any, index: number) => (
            <div 
              key={index} 
              className="min-w-[85%] md:min-w-[350px] snap-center"
            >
              <RevealOnScroll>
                <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-[250px] shadow-xl text-center">
                  
                  <div className="h-[60px] flex items-center justify-center mb-3">
                    <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex-1 overflow-hidden">
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-4">
                      {project.desc}
                    </p>
                  </div>

                </div>
              </RevealOnScroll>
            </div>
          ))}
        </div>
        
        {/* Hint για το scroll */}
        <div className="text-gray-500 text-sm mt-2 md:hidden">
          ← Σύρε για να δεις περισσότερα →
        </div>
      </div>
    </section>
  );
}