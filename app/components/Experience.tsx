import { RevealOnScroll } from "./RevealOnScroll";

export default function Experience({ t }: any) {
  return (
    <section id="experience" className="relative z-10 pt-6 md:pt-8 pb-10 md:pb-14 px-8 md:px-0 bg-slate-950/60 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-8 tracking-tight text-white">
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* JOB 1 */}
          <RevealOnScroll>
            {/* ΑΛΛΑΓΗ: transition-colors αντί για transition-all */}
            <div className="bg-slate-900/40 p-6 md:p-10 rounded-3xl border border-slate-800 
                            hover:border-blue-500/50 hover:duration-0 
                            transition-colors duration-300 
                            h-full w-full flex flex-col">
              
              <h3 className="text-lg md:text-xl font-semibold text-white leading-tight mb-4">
                {t.job1.title}
              </h3>
              
              <p className="text-slate-400 text-sm md:text-base leading-relaxed text-center flex-grow">
                {t.job1.desc}
              </p>
            </div>
          </RevealOnScroll>

          {/* JOB 2 */}
          <RevealOnScroll>
            {/* ΑΛΛΑΓΗ: transition-colors αντί για transition-all */}
            <div className="bg-slate-900/40 p-6 md:p-10 rounded-3xl border border-slate-800 
                            hover:border-blue-500/50 hover:duration-0 
                            transition-colors duration-300 
                            h-full w-full flex flex-col">
              
              <h3 className="text-lg md:text-xl font-semibold text-white leading-tight mb-4">
                {t.job2.title}
              </h3>
              
              <p className="text-slate-400 text-sm md:text-base leading-relaxed text-center flex-grow">
                {t.job2.desc}
              </p>
            </div>
          </RevealOnScroll>
          
        </div>
      </div>
    </section>
  );
}