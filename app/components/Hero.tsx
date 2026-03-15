import { RevealOnScroll } from "./RevealOnScroll";

export default function Hero({ t, handleScroll }: any) {
  return (
    /* pt-32 στο κινητό, pt-40 στον υπολογιστή για σωστό spacing από το navbar */
    <section className="pt-32 md:pt-40 pb-12 md:pb-22 text-center px-4 md:px-6">
      <RevealOnScroll>
        {/* text-4xl για να χωράει στις μικρές οθόνες */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight animate-float leading-tight text-white">
          {t.title}
        </h1>
        
        {/* max-w-2xl για να μην απλώνεται πολύ το κείμενο */}
        <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
          {t.sub}
        </p>

        {/* Buttons flex-col στο κινητό για να είναι το ένα κάτω από το άλλο */}
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <a 
              href="#projects" 
              onClick={handleScroll} 
              className="w-fit min-w-[190px] bg-blue-600 hover:scale-105 text-white px-10 py-3 rounded-xl font-medium transition-all text-sm md:text-base text-center shadow-lg shadow-blue-900/20"
            >
              {t.btnProjects}
            </a>
            <a 
              href="#contact" 
              onClick={handleScroll} 
              className="w-fit min-w-[195px] border border-gray-700 hover:border-blue-500 hover:scale-105 text-white px-10 py-3 rounded-xl font-medium transition-all duration-300 text-sm md:text-base text-center"
            >
              {t.btnContact}
            </a>
        </div>
      </RevealOnScroll>
    </section>
  );
}