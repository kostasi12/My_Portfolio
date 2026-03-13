import { RevealOnScroll } from "./RevealOnScroll";

export default function Projects({ t }: any) {
  return (
    <section id="projects" className="py-6 md:py-16 px-6 bg-gray-900/40"> {/* Προσθήκη ίδιου bg και padding */}
      <div className="max-w-5xl mx-auto text-center"> {/* Προσθήκη σωστού container */}
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-12 tracking-tight text-white">
            {t.title}
          </h2>
        </RevealOnScroll>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 text-left">
          {t.items.map((project: any, index: number) => (
            <RevealOnScroll key={index}>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] shadow-xl">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}