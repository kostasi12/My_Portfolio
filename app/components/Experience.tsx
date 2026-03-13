import { RevealOnScroll } from "./RevealOnScroll";

export default function Experience({ t }: any) {
  return (
    /* py για κινητά, md:py για υπολογιστή. px-4 για να μην κολλάει στις άκρες */
    <section id="experience" className="py-8 md:py-16 px-6 bg-gray-900/40">
      <div className="max-w-5xl mx-auto text-center">
        {/* text-3xl για κινητά */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-12 tracking-tight text-white">
          {t.title}
        </h2>
        
        <div className="space-y-6 md:space-y-8 text-left">
          <RevealOnScroll>
            {/*  p-6 για κινητά, p-8 για υπολογιστή */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
              <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                {t.job1.title}
              </h3>
              <p className="text-gray-400 mt-3 text-sm md:text-base leading-relaxed">
                {t.job1.desc}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
              <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
                {t.job2.title}
              </h3>
              <p className="text-gray-400 mt-3 text-sm md:text-base leading-relaxed">
                {t.job2.desc}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}