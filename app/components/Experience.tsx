import { RevealOnScroll } from "./RevealOnScroll";

export default function Experience({ t }: any) {
  return (
    /* pb-12 md:py-14 text-center px-4 md:px-6  className="relative z-10 pt-6 pb-20 md:pt-10 md:pb-14 px-4 bg-gray-900/40 overflow-hidden  
    pb-4 md:py-14 px-4 bg-gray-900/20*/
    <section id="experience" className="relative z-10 pt-6 pb-10 md:pt-10 md:pb-14 px-6 bg-gray-900/20 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-10 tracking-tight text-white">
          {t.title}
        </h2>
        
        {/* Μετατροπή σε grid 2 στηλών για μεγάλες οθόνες */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <RevealOnScroll>
            {/* Η κλάση hover:duration-0 σταματάει το τρεμούλιασμα στο border */}
            <div className="bg-gray-800/10 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-gray-800 
                            hover:border-blue-500/50 hover:duration-0 
                            transition-[background-color] duration-300 shadow-xl h-full text-center group">
              {/* Σταθερό ύψος τίτλου για ευθυγράμμιση */}
              <div className="h-[40px] flex items-center justify-center mb-2">
                <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                  {t.job1.title}
                </h3>
              </div>
              <p className="text-gray-400 mt-2 text-sm md:text-base leading-relaxed">
                {t.job1.desc}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="bg-gray-800/10 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-gray-800 
                            hover:border-blue-500/50 hover:duration-0 
                            transition-[background-color] duration-300 shadow-xl h-full text-center group">
              <div className="h-[40px] flex items-center justify-center mb-2">
                <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                  {t.job2.title}
                </h3>
              </div>
              <p className="text-gray-400 mt-2 text-sm md:text-base leading-relaxed">
                {t.job2.desc}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}