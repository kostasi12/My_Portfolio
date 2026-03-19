import { RevealOnScroll } from "./RevealOnScroll";

export default function Experience({ t }: any) {
  return (
    /* ΑΛΛΑΓΗ: bg-slate-950 για το πιο σκούρο μπλε φόντο. 
       Το border-t border-white/5 δημιουργεί μια διακριτική γραμμή διαχωρισμού */
    <section id="experience" className="relative z-10 pt-6 pb-10 md:pt-10 md:pb-14 px-8 bg-slate-950/60  overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-10 tracking-tight text-white">
          {t.title}
        </h2>
        
        {/* Grid 2 στηλών για μεγάλες οθόνες */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          
          {/* JOB 1 */}
          <RevealOnScroll>
            {/* ΑΛΛΑΓΗ: bg-slate-900/50 για να φαίνεται η κάρτα ελαφρώς πιο ανοιχτή από το φόντο */}
            <div className="bg-slate-900/40 p-8 md:p-8 rounded-3xl border border-slate-800 
                            hover:border-blue-500/50 hover:duration-0 
                            transition-all duration-300 h-full text-center group">
              <div className="h-[40px] flex items-center justify-center mb-1">
                <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                  {t.job1.title}
                </h3>
              </div>
              {/* text-slate-400 για καθαρότητα στο κείμενο */}
              <p className="text-slate-400 mt-3 text-sm md:text-base leading-relaxed">
                {t.job1.desc}
              </p>
            </div>
          </RevealOnScroll>

          {/* JOB 2 */}
          <RevealOnScroll>
            {/* ΑΛΛΑΓΗ: bg-slate-900/50 για ομοιομορφία με την πρώτη κάρτα */}
            <div className="bg-slate-900/40 p-6 md:p-8 rounded-3xl border border-slate-800 
                            hover:border-blue-500/50 hover:duration-0 
                            transition-all duration-300 h-full text-center group">
              <div className="h-[40px] flex items-center justify-center mb-2">
                <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                  {t.job2.title}
                </h3>
              </div>
              <p className="text-slate-400 mt-2 text-sm md:text-base leading-relaxed">
                {t.job2.desc}
              </p>
            </div>
          </RevealOnScroll>
          
        </div>
      </div>
    </section>
  );
}